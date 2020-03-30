const validateInput = require("./utils");

describe("utils", () => {
  test("validateInput for input 1", () => {
    const result = validateInput("1");
    expect(result).toEqual("1");
  });
  test("validateInput for input 2", () => {
    const result = validateInput("2");
    expect(result).toEqual("adios");
  });
});
