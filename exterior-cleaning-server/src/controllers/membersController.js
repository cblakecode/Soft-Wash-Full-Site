const Member = require("../models/Members");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc get members
// @route GET /members
// @access Private
const getAllMembers = asyncHandler(async (req, res) => {});

// @desc Create new member
// @route POST /members
// @access Private
const createNewMember = asyncHandler(async (req, res) => {});

// @desc Update a member
// @route PATCH /members
// @access Private
const updateMember = asyncHandler(async (req, res) => {});

// @desc Delete a member
// @route DELETE /members
// @access Private
const deleteMember = asyncHandler(async (req, res) => {});

module.exports = {
  getAllMembers,
  createNewMember,
  updateMember,
  deleteMember,
};
