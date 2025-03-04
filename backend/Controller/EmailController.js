import { sendEmail } from "../utils/sendEmail.js";

export const EmailController = async (req, res) => {
  const {name, email,phone,message,  } = req.body;

  if (!name||!email || !phone|| !message ) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await sendEmail({name, email, phone,message, });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};



