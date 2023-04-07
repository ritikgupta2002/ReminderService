const nodemailer = require("nodemailer");
//transport object is going to be object that is able to send mails
const { EMAIL_ID, EMAIL_PASS } = require("./serverConfig");

const sender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASS,
  },
});

module.exports = sender;