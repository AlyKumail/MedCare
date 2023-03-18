const mongoose = require("mongoose");

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
    _doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true,
  }
);

const doctorSchema = mongoose.Schema({
  specialization: {
    type: String,
    required: [true, "Please add a specialization value"],
  },
});

var Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = mongoose.model("User", userSchema);
