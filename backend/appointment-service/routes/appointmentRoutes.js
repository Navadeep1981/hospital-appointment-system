import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentsByDoctor,
  cancelAppointment
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAllAppointments);
router.get("/doctor/:id", getAppointmentsByDoctor);
router.delete("/:id", cancelAppointment);

export default router;
