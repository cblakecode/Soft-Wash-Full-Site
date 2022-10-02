const {
  contact_email_post,
  quote_email_post,
} = require("../controllers/emailController");
const express = require("express");
const router = express.Router();

router.post("/contact", contact_email_post);
router.post("/quote", quote_email_post);

module.exports = router;
