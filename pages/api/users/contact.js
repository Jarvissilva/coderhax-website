import handleApi from "helpers/handleApi";
import sendMail from "helpers/sendMail";

const handler = async (req, res, throwError) => {
  if (req.method == "POST") {
    if (!req.body.name || !req.body.email || !req.body.description)
      throwError("Required values are empty", 400);

    await sendMail({
      to: "jarvissilva937@gmail.com",
      subject: "Coderhax Contact form",
      html: `Name: ${req.body.name} <br> Email: ${req.body.email} <br> Description: ${req.body.description}`,
      throwError,
    });

    res.status(200).json({
      success: true,
      message:
        "Your response is successfully sent you will get a response soon",
    });
  } else {
    throwError("Only POST requests are allowed", 405);
  }
};

export default handleApi(handler);
