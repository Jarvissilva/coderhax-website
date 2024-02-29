import jwt from "jsonwebtoken";
import UserModel from "database/models/User";
import handleApi from "helpers/handleApi";
import sendMail from "helpers/sendMail";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    const newUser = await new UserModel({
      username: req.body.username,
      email: req.body.email,
      ipAddress: req.connection.remoteAddress,
    }).save();

    if (!newUser) throwError("User could not be created try again", 500);

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    await sendMail({
      to: req.body.email,
      subject: "Verify your identity",
      html: `<p>Welcome to coderhax verify your identity by clicking this link: <a href="${process.env.SITE_URL}/users/verify?token=${token}">Click Here</a></p>`,
      throwError,
    });

    res.status(200).json({
      success: true,
      message:
        "User registered verify your identity by clicking the link sent to your mail",
      token,
    });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
