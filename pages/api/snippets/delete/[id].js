import SnippetModel from "database/models/Snippet";
import handleApi from "helpers/handleApi";
import authenticate from "helpers/authenticate";

const handler = async (req, res, throwError) => {
  if (req.method == "DELETE") {
    const loggedUser = await authenticate(req.cookies.auth_token, throwError);

    const foundSnippet = loggedUser.snippets.find((s) => s._id == req.query.id);
    if (!foundSnippet)
      throwError("You don't have access to delete this snippet", 401);

    const deletedSnippet = await SnippetModel.findOneAndDelete({
      _id: req.query.id,
      creator: loggedUser._id,
    });

    if (!deletedSnippet)
      throwError("Could not delete the snippet try again", 400);

    await res.revalidate(`/snippets/${foundSnippet.category}`);
    await res.revalidate(
      `/snippets/${foundSnippet.category}/${foundSnippet.slug}`
    );
    await res.revalidate(`/users/${loggedUser.username}`);

    res.status(200).json({
      success: true,
      message: "Snippet Deleted",
    });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
