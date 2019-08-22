const fetchingUserData = require("./fetchingUserData");
const firstRequest = require("../requests/firstRequest");
const secondRequest = require("../requests/secondRequest");

// Mock individual requests
jest.mock("../requests/firstRequest");
jest.mock("../requests/secondRequest");

describe("fetchingUserData", () => {
  it("calls firstRequest", async () => {
    // Set request's resolved value. If request's value
    // needs to be modified, set mocked value in test
    // case itself.
    firstRequest.mockResolvedValue({
      status: "ok"
    });

    // Wait until request resolves
    await fetchingUserData();

    // Check that mocked request gets called
    expect(firstRequest).toBeCalled();
  });

  it("calls secondRequest", async () => {
    firstRequest.mockResolvedValue({
      status: "ok"
    });

    await fetchingUserData();

    expect(secondRequest).toBeCalled();
  });

  it("throws an error when response is not ok", async () => {
    firstRequest.mockResolvedValue({
      status: "404"
    });

    // Check that mocked request gets called
    await expect(fetchingUserData()).rejects.toThrow("Page not found");
  });
});
