import UserModel from "database/models/User";
import handleApi from "helpers/handleApi";
import authenticate from "helpers/authenticate";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const loggedUser = await authenticate(req.cookies.auth_token, throwError);

    const updatedUser = await UserModel.findByIdAndUpdate(
      loggedUser._id,
      {
        name: req.body.name,
        username: req.body.username,
        description: encodeURIComponent(req.body.description),
      },
      { runValidators: true, new: true }
    );

    if (!updatedUser) throwError("Could not update the user try again", 500);

    if (loggedUser.username != updatedUser.username) {
      loggedUser.snippets.map(
        async (snippet) =>
          await res.revalidate(`/snippets/${snippet.category}/${snippet.slug}`)
      );
      await res.revalidate(`/users/${loggedUser.username}`);
    }
    await res.revalidate(`/users/${updatedUser.username}`);

    res.status(200).json({ success: true, message: "User updated" });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
