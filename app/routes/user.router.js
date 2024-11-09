import express from "express";
import { saveUser, sendWelcomeEmail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", saveUser);
router.post("/send-welcome-email", sendWelcomeEmail);
router.post("/forgot-password");
export default router;
