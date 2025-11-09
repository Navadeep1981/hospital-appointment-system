import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Doctor" },
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  status: { type: String, default: "Pending" } // Pending / Confirmed / Cancelled
});

appointmentSchema.index({ doctorId: 1, date: 1, timeSlot: 1 }, { unique: true }); // Prevent duplicate bookings

export default mongoose.model("Appointment", appointmentSchema);
