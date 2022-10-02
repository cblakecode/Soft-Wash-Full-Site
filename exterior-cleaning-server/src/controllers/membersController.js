const Member = require("../models/Members");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc get members
// @route GET /members
// @access Private
const getAllMembers = asyncHandler(async (req, res) => {
  const members = await Member.find().select("-password").lean();
  if (!members?.length) {
    return res.status(400).json({ message: "No Members Found" });
  }
  res.json(users);
});

// @desc Create new member
// @route POST /members
// @access Private
const createNewMember = asyncHandler(async (req, res) => {
  const {
    username,
    password,
    userInfo: { name, email, phone, address },
  } = req.body;

  if (!username || !password || !name || !email || !phone || !address) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const duplicate = await username.findOne({ username, email }).lean().exec();

  if (duplicate) {
    return res
      .status(409)
      .json({ message: "Username or Email already exists" });
  }

  const hashedPwd = await bcrypt.hash(password, 10); //salt rounds

  const memberObject = {
    username,
    password: hashedPwd,
    name,
    email,
    phone,
    address,
  };

  const member = await Member.create(memberObject);

  if (member) {
    res.status(201).json({ message: `New member ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid member data received" });
  }
});

// @desc Update a member
// @route PATCH /members
// @access Private
const updateMember = asyncHandler(async (req, res) => {
  const {
    id,
    username,
    subscribed,
    password,
    userInfo: { name, email, phone, address },
  } = req.body;

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
  member.subscribed = subscribed;

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
  const { id } = res.body;

  if (!id) {
    return res.status.json({ message: "user id required" });
  }

  const member = await Member.findById(id).exec();

  if (!member) {
    return res.status(400).json({ message: "user not found" });
  }

  const result = await member.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} deleted`;
});

module.exports = {
  getAllMembers,
  createNewMember,
  updateMember,
  deleteMember,
};
