module.exports = function validateInput(input) {
  switch (input) {
    case "1":
      let newValue = input;
      return `${newValue}`;
    case "2":
      return "adios";
    case "3":
      const oldValue = input;
      return `${oldValue}-yeah`;
    default:
      console.log("invalid input");
      return false;
  }
};
