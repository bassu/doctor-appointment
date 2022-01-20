const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const cors = require("cors")({ origin: true });
let mailerConfig = {
  host: "smtpout.secureserver.net",
  secureConnection: false,
  secure: false,
  // tls: {
  //   ciphers: "SSLV3",
  // },
  debug: true,
  port: 587,
  auth: {
    user: "appointment@drusmanjavaid.com",
    pass: "Dr@3218609947",
  },
};
let transporter = nodemailer.createTransport(mailerConfig);
exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let mailOptions = {
      from: "appointment@drusmanjavaid.com",
      to: "mzr.ali@gmail.com",
      subject: "Appointment" + req.data.title,
      html:
        `<body>` +
        `<div>
      <p><h1>Title:${req.data.title}</h1></p>
      <p>Name:${req.data.name}</p>
      <p>Email:${req.data.email}</p>
      <p>Contact #:${req.data.phone}</p>
      <p>Appointment Date:${req.data.date}</p>
      <p>:${req.data.name}</p>
    </div>` +
        `</body>`,
    };
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }
      return res.status(200).send({
        date: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
