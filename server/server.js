import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const app = express();

app.use(cors());
app.use(express.json());

console.log(
  "EMAIL_USER:",
  process.env.EMAIL_USER ? "OK" : "MISSING"
);

console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "OK" : "MISSING"
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Portfolio server is running");
});

app.get("/api/messages", (req, res) => {
  res.json({
    message: "Email system is working",
  });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Message sent successfully from:", email);

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      message: "Unable to send message",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});