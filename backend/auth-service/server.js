import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// ✅ Routes
app.post("/api/auth/register", (req, res) => {
  res.json({ message: "Registration successful ✅ (Mock route)" });
});

app.post("/api/auth/login", (req, res) => {
  res.json({ token: "dummy-jwt-token", message: "Login successful ✅" });
});

app.get("/api/auth/users", (req, res) => {
  res.json({ message: "Auth service is running fine ✅" });
});

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://hospital_mongo:27017/hospitalDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Failed", err));

app.listen(PORT, () => console.log(`🚀 Auth Service running on port ${PORT}`));
