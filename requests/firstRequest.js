const request = require("../utils/request");

module.exports = () =>
  request("https://www.google.fi", "get").then(res => res.text());
