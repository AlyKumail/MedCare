const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log("inside authMiddlewalre");
  console.log("req.headers", req.headers);
  console.log("req.headers.authorization", req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("inside authMiddlewalre 111");

    try {
      // Get toekn from header
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      res.status(400);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
