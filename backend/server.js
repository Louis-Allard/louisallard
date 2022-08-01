const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber} = require("./conf");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');

app.use(cors());
app.use(express.json());
app.use(express.static("./tmp"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
app.listen(5000, () => console.log(":. Server Running .:"));

// Test
app.get('/', function (req, res) {
  res.send(':. Node test is ok .:');
});

// Nodemailer
const contactEmail = nodemailer.createTransport({
  type: 'OAuth2',
  service: 'protonmail',
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true, // true for 465, false the other ports
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PWD,
    })
  },
  tls: {
    rejectUnauthorized: false
}
});

contactEmail.verify((error) => {
  if (error) {
    console.log(":. " + error + " .:");
  } else {
    console.log(":. Ready to Send .:");
  }
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});