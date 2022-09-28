const {
  contact_email_post,
  quote_email_post,
} = require("../controllers/emailController");
const express = require("express");
const app = express();

app.post("/contact", contact_email_post);

app.post("/quote", quote_email_post);
