const nodemailer = require("nodemailer");

const receiveMail = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: `You have an email from ${firstName} ${lastName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json({ response: info.response });
  });
};

module.exports = receiveMail;
