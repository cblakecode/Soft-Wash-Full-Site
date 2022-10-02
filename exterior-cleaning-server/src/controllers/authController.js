const Member = require("../models/Members");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = asyncHandler(async (req, res) => {});

// @desc Logout
// @route Post /auth/logout
// @access Public - to clear cookies if exists
const logout = asyncHandler(async (req, res) => {});

module.exports = {
  login,
  refresh,
  logout,
};
