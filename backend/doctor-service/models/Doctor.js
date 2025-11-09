import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  availability: [
    {
      day: { type: String }, // e.g., Monday, Tuesday
      timeSlots: [{ type: String }] // e.g., ["10:00 AM", "11:00 AM"]
    }
  ]
});

export default mongoose.model("Doctor", doctorSchema);
