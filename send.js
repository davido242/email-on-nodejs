const nodeMailer = require("nodemailer");
require("dotenv").config();
console.log(process.env.USER_NAME)

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD
  }
});

const mailOptions = {
  // from: "anyoneEmail@gmail.com",
  to: process.env.RECIEVER_EMAIL,
  subject: "Testing Sending Gmail from form email to another email with my app auth mail",
  html: "<p>Thanks for you Mail Dave, with html tag</p>",
  from: process.env.USER_NAME
};

transporter.sendMail(mailOptions, function(err, info) {
  if(err) {
    console.log(err)
  } else {
    console.log("Email Sent: " + info.response)
  }
});