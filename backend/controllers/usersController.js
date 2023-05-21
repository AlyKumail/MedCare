const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    password,
    email,
    phone,
    dob,
    country,
    specialization,
    experience,
    walletAddress,
    hospital,
  } = req.body;

  if (!name || !password || !email || !phone || !dob || !country) {
    res.status(400);
    throw new Error("Please add all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already registered");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(dob);
  console.log(new Date(dob));
  console.log("Special:", specialization);
  // Create user
  let user;
  if (specialization != "") {
    const doctor = {
      specialization: specialization,
      experience: experience,
      hospital: hospital,
    };
    user = await User.create({
      name,
      email,
      phone,
      dob,
      country,
      doctor,
      walletAddress,
      password: hashedPassword,
    });
  } else {
    user = await User.create({
      name,
      email,
      phone,
      dob,
      country,
      walletAddress,
      password: hashedPassword,
    });
  }

  if (user) {
    res.status(201);

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      dob: user.dob,
      country: user.country,
      doctor: user.doctor,
      walletAddress: user.walletAddress,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  console.log("backend login");
  const { email, password } = req.body;
  console.log("email password", email, password);

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      dob: user.dob,
      country: user.country,
      specialization: user.specialization,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credential");
  }
});

// @desc Get current logined user
// @route GET /api/users/me
// @access public
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// @desc add address to dataShared
// @route POST /api/users/addAddress
// @access public
const addAddress = asyncHandler(async (req, res) => {
  const { address, userId } = req.body;
  // console.log("---inside backend add address api");
  // console.log("user id", req.user.id);
  // console.log("req body", req.body);
  // console.log("address", address);
  // console.log("userId", userId);
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  // console.log("user", user);

  user.dataShared = [...user.dataShared, address];

  user.save();
  // console.log("updated user", user);

  res.status(200).json({
    dataShared: user.dataShared,
  });
});

// @desc get  dataShared
// @route GET /api/users/getDataShared
// @access public
const getDataShared = asyncHandler(async (req, res) => {
  console.log("in backend get data shared");
  console.log("req.userbody", req.user.id);
  // const { userId } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  console.log("user", user);

  let userList;

  User.find({ walletAddress: { $in: user.dataShared } })
    .then((users) => {
      // console.log("Users:", users);
      userList = users;
      res.status(200).json({
        userList: users,
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  // console.log("userList", userList);
});

// @desc remove  dataShared
// @route PUT /api/users/removeDataShared
// @access public
const removeDataShared = asyncHandler(async (req, res) => {
  console.log("in backend remove data shared");
  console.log("req.userbody", req.user.id);
  // const { userId } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  console.log("user", user);

  let userList;

  const itemList = await User.find({ walletAddress: { $in: user.dataShared } });
  console.log("itemList", itemList);
  console.log("address", req?.body?.address);

  const newItemList = itemList.filter(
    (item) => item.walletAddress != req?.body?.address
  );
  console.log("newItemList", newItemList);

  user.dataShared = newItemList;

  user.save();
  // .then((users) => {
  //   // console.log("Users:", users);
  //   userList = users;
  //   res.status(200).json({
  //     userList: users,
  //   });
  // })
  // .catch((error) => {
  //   console.error("Error fetching users:", error);
  // });

  // console.log("userList", userList);

  res.status(200).json({
    dataShared: user.dataShared,
  });
});

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  addAddress,
  getDataShared,
  removeDataShared,
};
