const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  addAddress,
  getDataShared,
  removeDataShared,
} = require("../controllers/usersController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/getDataShared", protect, getDataShared);
router.put("/removeDataShared", protect, removeDataShared);
router.post("/addAddress", addAddress);

module.exports = router;
