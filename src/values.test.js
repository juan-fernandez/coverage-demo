const divide = require("./values");
const validateInput = require("./utils");

describe("values", () => {
  test("divide for 1", () => {
    const result = divide(1);
    expect(result).toEqual(1);
  });
  test("divide for 2", () => {
    const result = divide(2);
    expect(result).toEqual(1);
  });
  test("cross for validate", () => {
    const result = validateInput("3");
    expect(result).toEqual("3-yeah");
  });
});
