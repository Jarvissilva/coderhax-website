import SnippetModel from "database/models/Snippet";
import handleApi from "helpers/handleApi";
import authenticate from "helpers/authenticate";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const loggedUser = await authenticate(req.cookies.auth_token, throwError);

    if (
      await SnippetModel.exists({
        title: req.body.title,
        category: req.body.category,
      })
    )
      throwError("Title already exists", 400);

    const slug = req.body.title
      .trim()
      .replaceAll(/  +/g, " ")
      .replaceAll(" ", "-");

    if (await SnippetModel.exists({ slug, category: req.body.category }))
      throwError("Slug already exists", 400);

    const newSnippet = await new SnippetModel({
      category: req.body.category,
      title: req.body.title,
      slug,
      code: encodeURIComponent(req.body.code),
      output: req.body.output ? encodeURIComponent(req.body.output) : null,
      description: encodeURIComponent(req.body.description),
      creator: loggedUser._id,
    }).save();

    if (!newSnippet) throwError("Snippet could not be created try again", 500);

    await loggedUser.updateOne({ $push: { snippets: newSnippet._id } });

    await res.revalidate(`/snippets/${newSnippet.category}`);
    await res.revalidate(`/users/${loggedUser.username}`);

    res.status(200).json({ success: true, message: "Snippet Published" });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
