import SnippetModel from "database/models/Snippet";
import handleApi from "helpers/handleApi";
import authenticate from "helpers/authenticate";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const loggedUser = await authenticate(req.cookies.auth_token, throwError);

    const foundSnippet = loggedUser.snippets.find((s) => s._id == req.query.id);
    if (!foundSnippet)
      throwError("You don't have access to edit this snpipet", 401);

    if (
      await SnippetModel.exists({
        _id: { $ne: foundSnippet._id },
        title: req.body.title,
        category: req.body.category,
      })
    )
      throwError("Title already exists", 400);

    const slug = req.body.title
      .trim()
      .replaceAll(/  +/g, " ")
      .replaceAll(" ", "-");

    if (
      await SnippetModel.exists({
        _id: { $ne: foundSnippet._id },
        slug,
        category: req.body.category,
      })
    )
      throwError("Slug already exists", 400);

    const updatedSnippet = await SnippetModel.findOneAndUpdate(
      { _id: req.query.id, creator: loggedUser._id },
      {
        category: req.body.category,
        title: req.body.title,
        slug,
        code: encodeURIComponent(req.body.code),
        output: req.body.output ? encodeURIComponent(req.body.output) : null,
        description: encodeURIComponent(req.body.description),
      },
      { runValidators: true, new: true }
    );

    if (!updatedSnippet)
      throwError("Could not update the snippet try again", 400);

    if (foundSnippet.category != updatedSnippet.category)
      await res.revalidate(`/snippets/${foundSnippet.category}`);

    if (foundSnippet.slug != updatedSnippet.slug)
      await res.revalidate(
        `/snippets/${foundSnippet.category}/${foundSnippet.slug}`
      );

    await res.revalidate(`/snippets/${updatedSnippet.category}`);
    await res.revalidate(
      `/snippets/${updatedSnippet.category}/${updatedSnippet.slug}`
    );
    await res.revalidate(`/users/${loggedUser.username}`);

    res.status(200).json({
      success: true,
      message: "Snippet Updated",
    });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
