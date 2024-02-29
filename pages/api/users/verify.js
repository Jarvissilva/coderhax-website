import { verify, sign } from "jsonwebtoken";
import { serialize } from "cookie";
import UserModel from "database/models/User";
import handleApi from "helpers/handleApi";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const verifiedToken = verify(
      req.body.verificationToken,
      process.env.JWT_SECRET_KEY,
      function (error, token) {
        if (error) throwError("link is invalid or expired login again", 400);
        return token;
      }
    );

    const foundUser = await UserModel.findById(verifiedToken._id);
    if (!foundUser) throwError("User account does not exist", 400);

    if (!foundUser.active) await foundUser.updateOne({ active: true });

    const token = sign({ _id: foundUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.setHeader(
      "Set-Cookie",
      serialize("auth_token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 604800,
        path: "/",
      })
    );

    res.status(200).json({ success: true, message: "Verified successfully" });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
