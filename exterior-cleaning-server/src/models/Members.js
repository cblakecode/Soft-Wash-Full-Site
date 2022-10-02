const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "Member",
    },
  ],
  subscribed: {
    type: Boolean,
    default: false,
  },
  name: String,
  email: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model("Member", memberSchema);
