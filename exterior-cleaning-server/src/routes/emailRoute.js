const {
  contact_email_post,
  quote_email_post,
} = require("../controllers/emailController");
const express = require("express");
const router = express.Router();

router.route("/contact").post(contact_email_post);
router.route("/quote").post(quote_email_post);

module.exports = router;
