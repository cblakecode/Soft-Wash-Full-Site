const express = require("express");
const router = express.Router();
const membersController = require("../controllers/membersController");

router
  .route("/")
  .get(membersController.getMember)
  .post(membersController.createNewMember)
  .patch(membersController.updateMember)
  .delete(membersController.deleteMember);

module.exports = router;
