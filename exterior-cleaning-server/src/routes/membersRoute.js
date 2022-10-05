const express = require("express");
const router = express.Router();
const membersController = require("../controllers/membersController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .get(membersController.getMember)
  .patch(membersController.updateMember)
  .delete(membersController.deleteMember);

module.exports = router;
