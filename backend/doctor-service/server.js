import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; // ✅ ADD THIS LINE

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors()); // ✅ ADD THIS LINE TO ALLOW FRONTEND ACCESS

// ✅ Dummy doctor data
const doctors = [
  { _id: "1", name: "Dr. John Smith", specialization: "Cardiologist" },
  { _id: "2", name: "Dr. Priya Sharma", specialization: "Dermatologist" },
  { _id: "3", name: "Dr. Ankit Verma", specialization: "Neurologist" },
];

// ✅ Test route
app.get("/api/doctors", (req, res) => {
  res.json(doctors);
});

const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI || "mongodb://hospital_mongo:27017/hospitalDB";

// ✅ Mongo connection (safe)
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected (Doctor Service)"))
  .catch((err) => console.error("❌ DB Connection Failed", err));

app.listen(PORT, () => console.log(`🚀 Doctor Service running on port ${PORT}`));
