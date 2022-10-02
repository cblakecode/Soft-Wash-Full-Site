const nodemailer = require("nodemailer");
const moment = require("moment");

const transport = {
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_CONFIG_USER,
    pass: process.env.EMAIL_CONFIG_PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  }
  if (success) {
    console.log("All works fine, congratz!");
  }
});

const contact_email_post = (req, res) => {
  const { fullName, email, mobile, message } = req.body;
  let mail = {
    from: fullName,
    to: "blakeelliscodes@gmail.com",
    subject: "Contact form request",
    html: `${message} | ${mobile} | ${email}`,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
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
};

const quote_email_post = (req, res) => {
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
};

module.exports = {
  contact_email_post,
  quote_email_post,
};
