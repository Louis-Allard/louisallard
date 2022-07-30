require("dotenv").config();

const portNumber = process.env.BACKEND_PORT || "42134";

module.exports = {
  portNumber
};