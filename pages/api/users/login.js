import { sign } from "jsonwebtoken";
import UserModel from "database/models/User";
import handleApi from "helpers/handleApi";
import sendMail from "helpers/sendMail";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const foundUser = await UserModel.exists({ email: req.body.email });

    if (!foundUser)
      throwError("No user account found with this email please register", 400);

    const token = sign({ _id: foundUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5min",
    });

    await sendMail({
      to: req.body.email,
      subject: "Verify your identity",
      html: `<p>Welcome back to coderhax verify your identity by clicking this link: <a href="${process.env.SITE_URL}/users/verify?token=${token}">Click Here</a></p>`,
      throwError,
    });

    res.status(200).json({
      success: true,
      message: "Verify your identity by clicking the link sent to your mail",
      token,
    });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
