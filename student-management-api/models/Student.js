const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  rollNumber: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]
  },

  department: {
    type: String,
    required: true
  },

  cgpa: {
    type: Number,
    min: 0,
    max: 4
  },

  enrollmentYear: {
    type: Number,
    required: true
  },

  isActive: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);