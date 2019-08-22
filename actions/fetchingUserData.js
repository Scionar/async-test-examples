const firstRequest = require("../requests/firstRequest");
const secondRequest = require("../requests/secondRequest");

module.exports = async () => {
  const firstResponse = await firstRequest();

  if (firstResponse.status === "404") {
    throw new Error("Page not found");
  }

  const secondResponse = await secondRequest(firstResponse.status);
};
