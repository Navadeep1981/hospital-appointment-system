import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://hospital_mongo:27017/hospitalDB";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected for Appointment Service"))
  .catch((err) => console.error("❌ DB connection failed", err));

// Define Appointment model
const appointmentSchema = new mongoose.Schema({
  doctorId: String,
  patientName: String,
  patientEmail: String,
  date: String,
  timeSlot: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// GET test route
app.get("/api/appointments", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

// POST route for booking appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const { doctorId, patientName, patientEmail, date, timeSlot } = req.body;

    if (!doctorId || !patientName || !patientEmail || !date || !timeSlot) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      doctorId,
      patientName,
      patientEmail,
      date,
      timeSlot,
    });

    await newAppointment.save();
    res.status(201).json({ message: "✅ Appointment booked successfully!" });
  } catch (error) {
    console.error("❌ Error booking appointment:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 Appointment Service running on port ${PORT}`));
