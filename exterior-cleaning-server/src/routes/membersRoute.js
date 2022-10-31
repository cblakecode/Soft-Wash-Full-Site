const express = require("express");
const router = express.Router();
const membersController = require("../controllers/membersController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router.get("/:username", membersController.getMember);

router
  .route("/")
  .patch(membersController.updateMember)
  .delete(membersController.deleteMember);

module.exports = router;
