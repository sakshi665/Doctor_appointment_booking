const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: Number,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Appointment", appointmentSchema);
