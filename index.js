const firstRequest = require("./requests/firstRequest");

const action = firstRequest();

action.then(response => {
  console.log(response, "response");
});
