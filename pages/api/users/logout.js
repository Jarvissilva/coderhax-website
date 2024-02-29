import handleApi from "helpers/handleApi";
import authenticate from "helpers/authenticate";

const handler = async (req, res, throwError) => {
  if (req.method == "GET") {
    if (!req.cookies.auth)
      return res.status(401).json({ success: false, message: "Not logged in" });

    const verifiedToken = jwt.verify(
      req.cookies.auth,
      process.env.JWT_SECRET_KEY
    );

    if (!verifiedToken)
      return res.status(401).json({
        success: false,
        message: "User not logged in",
      });

    res.setHeader(
      "Set-Cookie",
      "auth_token=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict"
    );
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } else {
    throwError("Only GET requests are allowed", 405);
  }
};

export default handleApi(handler);
