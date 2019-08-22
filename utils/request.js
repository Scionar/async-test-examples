const fetch = require("node-fetch");

module.exports = (url, method, body) => {
  return fetch(url, {
    method,
    body
  });
};
