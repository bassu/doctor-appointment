const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

// Static folder
const path = require("path");
app.use(express.static(path.join(__dirname, "build")));
let mailerConfig = {
  host: process.env.HOST_NAME,
  secureConnection: false,
  secure: true,
  // tls: {
  //   ciphers: "SSLV3",
  // },
  debug: true,
  port: 465,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD,
  },
};
const transporter = nodemailer.createTransport(mailerConfig);
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our Message");
  }
});
app.post("/send", function (req, res) {
  try {
    res.send(
      JSON.stringify({
        success: true,
        msg: "Message has been sent successfully",
      })
    );
  } catch (err) {
    res.send(JSON.stringify({ success: false, msg: err }));
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(req.body.date);
  const time = today.toLocaleDateString("en-US", options);
  let mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "Appointment" + req.body.title,
    html:
      `<body>` +
      `<div>
      <p><h1>Title:${req.body.title}</h1></p>
      <p>Name:${req.body.name}</p>
      <p>Email:${req.body.email}</p>
      <p>Contact #:${req.body.phone}</p>
      <p>Appointment Date:${time}</p>
    </div>` +
      `</body>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error " + error);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`server has been started`));
