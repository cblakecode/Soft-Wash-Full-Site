const Member = require("../models/Members");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const foundMember = await Member.findOne({ username }).exec();

  if (!foundMember) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const match = await bcrypt.compare(password, foundMember.password);

  if (!match) return res.status(401).json({ message: "unauthorized" });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundMember.username,
        roles: foundMember.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "3m" }
  );

  const refreshToken = jwt.sign(
    { username: foundMember.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "forbidden" });

      const foundMember = await Member.findOne({
        username: decoded.username,
      }).exec();

      if (!foundMember)
        return res.status(401).json({ message: "unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundMember.username,
            roles: foundMember.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "3m" }
      );

      res.json({ accessToken });
    })
  );
});

// @desc Logout
// @route Post /auth/logout
// @access Public - to clear cookies if exists
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //no content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.json({ message: "cookie cleared" });
});

module.exports = {
  login,
  refresh,
  logout,
};
