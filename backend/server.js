const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber} = require("./conf");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use(express.static("./tmp"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(5000, () => console.log(":. Server Running .:"));

// Test
app.get('/', function (req, res) {
  res.send(':. Node test is ok .:');
});


// Nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "l.allard.mail@gmail.com",
    pass: "LnxQ2NKbF83jhDh",
  },
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