const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
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
    specialization: {
      type: String,
      required: [true, "Please add a specialization value"],
    },
    accessRequests: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);
