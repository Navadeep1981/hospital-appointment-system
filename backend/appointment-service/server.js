import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 Appointment Service running on port ${PORT}`));
