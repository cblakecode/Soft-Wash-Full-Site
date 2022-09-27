const express = require("express");
const nodemailer = require("nodemailer");
const creds = require("./src/configs/emailConfig");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const moment = require("moment");

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());

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
app.post("/contact", (req, res, next) => {
  console.log("sent");
  const { fullName, email, mobile, message } = req.body;
  let mail = {
    from: fullName,
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

app.post("/quote", (req, res, next) => {
  console.log("sent");
  const {
    firstName,
    lastName,
    mobile,
    address,
    squareFeet,
    siding,
    date,
    time,
    techQuote,
  } = req.body;
  const name = `${firstName} ${lastName}`;
  const email = body.email;
  const phone = mobile;
  const homeAddress = address;
  const sqft = squareFeet;
  const material = siding;
  const when = `Preferred ${moment(date).format(
    "ddd, DD MMM YYYY"
  )} at ${time}`;
  const onSite = techQuote;
  let mail = {
    from: name,
    to: "blakeelliscodes@gmail.com",
    subject: "Quote Form Request",
    html: `<h3>Client Info</h3>
          <p>${name}</p> <p>${email}</p> <p>${phone}</p> <p>${homeAddress}</p>
          <br />
          <h3>Home Info</h3>
          <p>${sqft}sqft</p> <p>${material}</p> <p> quoted on site: ${onSite}</p>
          <div>${when}</div>`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({ msg: "success" });
    }
  });
});

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});
