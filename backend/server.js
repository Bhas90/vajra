const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");
const axios = require("axios");

const app = express();
const PORT = 5000;

// ✅ CORS setup
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(requestIp.mw());

// ✅ Health check
app.get("/home", (req, res) => {
  res.status(200).json("Backend working");
});

// ✅ Gmail transporter (App Password required)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "admin@aurealconsulting.com",
    pass: "ihdt hwnd ipyx iacl", // ⚠️ replace with Gmail App Password
  },
});

// ✅ Auto-reply to user
const sendAutoReply = async (userEmail, userName) => {
  const mailOptions = {
    from: `"Vajra Westcity" <admin@aurealconsulting.com>`,
    to: userEmail,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
        <div style="background-color:#047bc5; color:white; padding:15px 20px; text-align:center;">
          <h1 style="margin:0; font-size:22px;">Thank You for Contacting Us!</h1>
        </div>
        <div style="padding:20px;">
          <h2 style="color:#047bc5;">Hello ${userName},</h2>
          <p>Thank you for reaching out to <strong>Vajra Westcity</strong>!</p>
          <p>We’ll get in touch with you shortly to assist you further.</p>
          <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;" />
          <p>If you have any questions, call us at <a href="tel:+918977516130" style="color:#047bc5;">+91-8977516130</a>.</p>
        </div>
        <div style="background-color:#f0f0f0; padding:15px 20px; text-align:center; color:#666;">
          <p style="margin:0; font-style:italic;">Warm regards,<br/>Team Vajra Westcity</p>
        </div>
      </div>
    `,
  };
  return transporter.sendMail(mailOptions);
};

// ✅ Notify admin
const notifyAdmin = async (formData) => {
  const mailOptions = {
    from: `"Vajra Westcity" <admin@aurealconsulting.com>`,
    to: "azmath@aurealconsulting.com",
    subject: "New Lead - Vajra Westcity",
    html: `
      <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px;">
        <div style="background-color:#047bc5; color:white; padding:15px 20px; text-align:center;">
          <h1 style="margin:0;">New Inquiry Received</h1>
        </div>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td><b>Name</b></td><td>${formData.name}</td></tr>
          <tr><td><b>Email</b></td><td>${formData.email}</td></tr>
          <tr><td><b>Mobile</b></td><td>${formData.mobile}</td></tr>
          <tr><td><b>IP Address</b></td><td>${formData.ip}</td></tr>
        </table>
        <div style="background-color:#f7f7f7; padding:10px 15px;">
          <p>Please follow up with this lead as early as possible.</p>
        </div>
      </div>
    `,
  };
  return transporter.sendMail(mailOptions);
};

// ✅ TeleCRM Integration (corrected using PHP reference)
const pushToTeleCRM = async (lead) => {
  const telecrmUrl =
    "https://api.telecrm.in/enterprise/669f8deb9c0669c069b90fc3/autoupdatelead";
  const telecrmAuth =
    "Bearer dfc2d8a1-cca4-4226-b121-ebe4b22f6b071721799771196:b0f4940e-3a88-4941-9f34-5485c382e5d7";

  // ✅ Based on working PHP payload
  const payload = {
    fields: {
      name: lead.name,
      phone: lead.mobile,
      email: lead.email,
      ip_address: lead.ip,
    },
    actions: [
      {
        type: "SYSTEM_NOTE",
        text: "Lead Source: Vajra Westcity Website",
      },
    ],
  };

  console.log("📤 Sending to TeleCRM:", JSON.stringify(payload, null, 2));

  try {
    const response = await axios.post(telecrmUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: telecrmAuth,
      },
    });
    console.log("✅ TeleCRM Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ TeleCRM Error:", error.response?.data || error.message);
    throw new Error("Failed to push lead to TeleCRM");
  }
};

// ✅ Main route
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile } = req.body;
  const ip = req.clientIp || "Unknown";
  console.log("📩 Incoming Lead:", { name, email, mobile, ip });

  if (!name || !email || !mobile) {
    return res.status(400).json({ error: "Name, email, and mobile are required." });
  }

  try {
    console.log("➡️ Sending Auto Reply...");
    await sendAutoReply(email, name);
    console.log("✅ Auto Reply Sent");

    console.log("➡️ Notifying Admin...");
    await notifyAdmin({ name, email, mobile, ip });
    console.log("✅ Admin Notified");

    console.log("➡️ Pushing to TeleCRM...");
    await pushToTeleCRM({ name, email, mobile, ip });
    console.log("✅ TeleCRM Lead Created");

    res.status(200).json({ message: "Emails sent and lead added to TeleCRM successfully" });
  } catch (error) {
    console.error("❌ FULL ERROR LOG:", error);
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
