"use strict";

require("@babel/register");

var validateInput = require("./utils");

describe("utils", function () {
  test("validateInput", function () {
    debugger;
    var result = validateInput("1");
    expect(result).toEqual("1");
  });
});