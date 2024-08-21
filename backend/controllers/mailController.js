const nodemailer = require("nodemailer");

const receiveMail = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tonykimanthi9@gmail.com",
      pass: process.env.EMAILPASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "tonykimanthi9@gmail.com",
    subject: subject,
    text: `You have an email from ${firstName} ${lastName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Unable to send the email" });
    }
    res.status(200).json({ response: info.response });
  });
};


module.exports = receiveMail;