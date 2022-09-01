const express = require("express");
const nodemailer = require("nodemailer");
const creds = require("./config");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.listen(port, () => console.log(`Listening on port ${port}`));

// const corsOptions = {
//   origin: "http://localhost:8080",
//   optionsSuccessStatus: 200,
// };

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

app.use(express.json());
app.post("/send", (req, res, next) => {
  console.log("sent");
  console.log(req.body);
  const name = req.body.fullName;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const message = req.body.message;
  let mail = {
    from: name,
    to: "blakeelliscodes@gmail.com",
    subject: "Contact form request",
    html: `${message} | ${mobile} | ${email}`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("error");
      res.json({
        msg: "fail",
      });
    } else {
      console.log("it worked");
      res.json({
        msg: "success",
      });
    }
  });
});
