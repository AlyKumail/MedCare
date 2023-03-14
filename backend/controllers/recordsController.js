const asyncHandler = require("express-async-handler");

// @desc Get records
// @route GET /api/records
// @access Private
const getRecords = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Records" });
});

// @desc Set records
// @route GET /api/records
// @access Private
const setRecord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set Record" });
});

module.exports = {
  getRecords,
  setRecord,
};
