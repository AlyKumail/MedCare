const express = require("express");
const router = express.Router();

const {
  getRecords,
  setRecord,
  grantAccess,
} = require("../controllers/recordsController");

router.route("/").get(getRecords).post(setRecord);
router.post("/grant", grantAccess);
module.exports = router;
