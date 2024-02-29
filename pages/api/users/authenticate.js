import jwt from "jsonwebtoken";
import handleApi from "helpers/handleApi";
import UserModel from "database/models/User";

const handler = async (req, res, throwError) => {
  if (req.method == "GET") {
    const verifiedToken = jwt.verify(
      req.cookies.auth_token,
      process.env.JWT_SECRET_KEY,
      function (error, token) {
        if (error) return false;
        return token;
      }
    );

    if (!verifiedToken)
      return res.status(200).json({
        success: false,
        message: "User not logged in",
      });

    const foundUser = await UserModel.findById(verifiedToken._id).populate(
      "snippets"
    );
    if (!foundUser) return res.status(200).json({ success: false });

    res.status(200).json({ success: true, loggedUser: foundUser });
  } else {
    throwError("Only GET requests are allowed", 405);
  }
};

export default handleApi(handler);
