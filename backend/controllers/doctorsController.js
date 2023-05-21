const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Doctor = require("../models/doctorModel");

// @desc Register Doctor
// @route POST /api/doctor
// @access Public
const registerDoctor = asyncHandler(async (req, res) => {
  const { name, password, email, phone, dob, country, specialization } =
    req.body;

  if (!name || !password || !email || !phone || !dob || !country) {
    res.status(400);
    throw new Error("Please add all the fields");
  }

  const DoctorExists = await Doctor.findOne({ email });

  if (DoctorExists) {
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

  const doctor = await Doctor.create({
    name,
    email,
    phone,
    dob,
    country,
    specialization,
    password: hashedPassword,
  });

  if (doctor) {
    res.status(201);

    res.json({
      _id: doctor.id,
      name: doctor.name,
      email: doctor.email,
      phone: doctor.phone,
      dob: doctor.dob,
      country: doctor.country,
      specialization: doctor.specialization,
      accessRequests: doctor.accessRequests,
      token: generateToken(doctor._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate a Doctor
// @route POST /api/doctors/login
// @access Public
const loginDoctor = asyncHandler(async (req, res) => {
  console.log("backend doctor login");
  const { email, password } = req.body;
  console.log("email password", email, password);

  const doctor = await Doctor.findOne({ email });

  if (doctor && (await bcrypt.compare(password, doctor.password))) {
    res.status(200);

    res.json({
      _id: doctor.id,
      name: doctor.name,
      email: doctor.email,
      phone: doctor.phone,
      dob: doctor.dob,
      country: doctor.country,
      specialization: doctor.specialization,
      accessRequests: doctor.accessRequests,
      token: generateToken(doctor._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credential");
  }
});

// @desc Get current logined doctor
// @route GET /api/doctors/me
// @access public
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await Doctor.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerDoctor,
  loginDoctor,
  getMe,
};
