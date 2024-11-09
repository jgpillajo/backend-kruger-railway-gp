import { User } from "../models/user.model.js";
import sendEmail from "../utils/email.js";

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const sendWelcomeEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    await sendEmail({ email, subject, message });
    res.json({ message: "Email enviado" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export { saveUser, sendWelcomeEmail };
