const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber} = require("./conf");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.static("./tmp"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test
app.get('/', function (req, res) {
  res.send('Node test is ok');
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});