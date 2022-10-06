const Member = require("../models/Members");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc get members
// @route GET /members
// @access Private
const getMember = asyncHandler(async (req, res) => {
  const username = req.query.username;

  const member = await Member.findOne({ username })
    .select("-password")
    .lean()
    .exec();

  if (!member) {
    return res.status(400).json({ message: "Member Not Found" });
  }

  res.json(member);
});

// @desc Update a member
// @route PATCH /members
// @access Private
const updateMember = asyncHandler(async (req, res) => {
  const { id, username, subscribed, password, name, email, phone, address } =
    req.body;

  if (!id || !username || typeof subscribed !== "boolean") {
    return res.status(400).json({ message: "all fields are required" });
  }

  const member = await Member.findById(id).exec();

  if (!member) {
    return res.status(400).json({ message: "member not found" });
  }

  const duplicate = await Member.findOne({ username }).lean().exec();

  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  member.username = username;
  member.password = password;
  member.subscribed = subscribed;
  member.email = email;
  member.phone = phone;
  member.address = address;
  member.name = name;

  if (password) {
    member.password = await bcrypt.hash(password, 10);
  }

  const updatedMember = await member.save();

  res.json({ message: `${updatedMember.username} updated` });
});

// @desc Delete a member
// @route DELETE /members
// @access Private
const deleteMember = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status.json({ message: "user id required" });
  }

  const member = await Member.findById(id).exec();

  if (!member) {
    return res.status(400).json({ message: "user not found" });
  }

  const result = await member.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getMember,
  updateMember,
  deleteMember,
};
