//Author: Jay Patel (B00881906)
const nodemailer = require("nodemailer");
const config = require("../config/email.config");

const sendTicketUpdateEmail = (email, name, subject, messageTitle, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.pass,
    },
  });

  let mailOptions = {
    from: '"Dalffins Team" team.dalffins@gmail.com',
    to: email,
    subject,
    html: `
        <p>Hello ${name},</p>
        
        <p>${messageTitle}</p>
        <p>"${message}."</p>
        
        <p>Best wishes,<br/>Dalffins</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (!err) {
      console.log("Email sent successfully!");
    } else {
      console.error("Error: " + err);
    }
  });
};

module.exports = { sendTicketUpdateEmail };
