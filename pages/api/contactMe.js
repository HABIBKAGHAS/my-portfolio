// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
export default function mailer(req, res) {
  console.log("habib", req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: "noreplyhabib7@gmail.com",
    to: "habibkaghas@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    console.log({ err });
    console.log({ info });
    if (err) res.status(500).send(err);
    else res.send();
  });
}
