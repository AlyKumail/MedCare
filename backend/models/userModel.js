const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  specialization: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  hospital: {
    type: String,
    required: false,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name value"],
    },
    email: {
      type: String,
      required: [true, "Please add a email value"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone value"],
    },
    dob: {
      type: Date,
      required: [true, "Please add a dob value"],
    },
    country: {
      type: String,
      required: [true, "Please add a country value"],
    },
    password: {
      type: String,
      required: [true, "Please add a password value"],
    },
    doctor: {
      type: doctorSchema,
      required: false,
    },
    dataShared: {
      type: [String],
      required: false,
    },
    walletAddress: {
      type: String,
      required: [true, "Please add a wallet Address value"],
    },
    // _doctor: {
    //   type: doctorSchema,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

var Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = mongoose.model("User", userSchema);
