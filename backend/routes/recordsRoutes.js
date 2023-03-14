const express = require("express");
const router = express.Router();

const { getRecords, setRecord } = require("../controllers/recordsController");

router.route("/").get(getRecords).post(setRecord);

module.exports = router;
