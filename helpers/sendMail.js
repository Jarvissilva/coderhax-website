import { createTransport } from "nodemailer";

const sendMail = async ({ to, subject, html, throwError }) => {
  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_HOST_USER_EMAIL,
      pass: process.env.GMAIL_HOST_PASSWORD,
    },
  });
  return transporter
    .sendMail({ from: process.env.GMAIL_HOST_USER_EMAIL, to, subject, html })
    .catch((e) => throwError(e.message, 500));
};

export default sendMail;
