"use strict";

function cov_1ni34fn8f8() {
  var path = "/Users/juanfernandez/Desktop/dev/coverage-demo/src/utils.js";
  var hash = "a78ff1985f4caf32666533a42caaee81f41a8862";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juanfernandez/Desktop/dev/coverage-demo/src/utils.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "3": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 27
        }
      },
      "4": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "5": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 28
        }
      },
      "6": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 32
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 35
        }
      },
      "8": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "validateInput",
        decl: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 1,
            column: 39
          }
        },
        loc: {
          start: {
            line: 1,
            column: 47
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 3,
            column: 4
          },
          end: {
            line: 5,
            column: 27
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 7,
            column: 21
          }
        }, {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 10,
            column: 32
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 19
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a78ff1985f4caf32666533a42caaee81f41a8862"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1ni34fn8f8 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1ni34fn8f8();
cov_1ni34fn8f8().s[0]++;

module.exports = function validateInput(input) {
  cov_1ni34fn8f8().f[0]++;
  cov_1ni34fn8f8().s[1]++;

  switch (input) {
    case "1":
      cov_1ni34fn8f8().b[0][0]++;
      var newValue = (cov_1ni34fn8f8().s[2]++, input);
      cov_1ni34fn8f8().s[3]++;
      return "".concat(newValue);

    case "2":
      cov_1ni34fn8f8().b[0][1]++;
      cov_1ni34fn8f8().s[4]++;
      return "adios";

    case "3":
      cov_1ni34fn8f8().b[0][2]++;
      var oldValue = (cov_1ni34fn8f8().s[5]++, input);
      cov_1ni34fn8f8().s[6]++;
      return "".concat(oldValue, "-yeah");

    default:
      cov_1ni34fn8f8().b[0][3]++;
      cov_1ni34fn8f8().s[7]++;
      console.log("invalid input");
      cov_1ni34fn8f8().s[8]++;
      return false;
  }
};