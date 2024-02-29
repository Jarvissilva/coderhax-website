import SnippetModel from "database/models/Snippet";
import handleApi from "helpers/handleApi";

const handler = async (req, res, throwError) => {
  if (req.method == "GET") {
    if (!/^([\w\p{P}\p{S}]+\s)*[\w\p{P}\p{S}]+$/i.test(req.query.value))
      throwError("Search query cannot contain special characters", 400);

    const foundSnippets = await SnippetModel.find({
      title: { $regex: new RegExp("^" + req.query.value + ".*", "i") },
      category: req.query.category,
    }).limit(10);

    if (!foundSnippets[0]) throwError("Snippets not found", 404);

    res.status(200).json({ success: true, snippets: foundSnippets });
  } else {
    throwError("Only GET requests are allowed", 405);
  }
};

export default handleApi(handler);
