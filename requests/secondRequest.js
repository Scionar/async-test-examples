const request = require("../utils/request");

module.exports = body =>
  request("https://www.google.fi", "post", body).then(res => res.text());
