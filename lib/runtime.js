"use strict";

function cov_pgbf2dc8u() {
  var path = "/Users/juanfernandez/Desktop/dev/coverage-demo/src/runtime.js";
  var hash = "d55317bed9bc5006fed324bd70c7d049d9ad549b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/juanfernandez/Desktop/dev/coverage-demo/src/runtime.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 1,
          column: 40
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 34
        }
      },
      "2": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "run",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 12
          }
        },
        loc: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d55317bed9bc5006fed324bd70c7d049d9ad549b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_pgbf2dc8u = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_pgbf2dc8u();
var validateInput = (cov_pgbf2dc8u().s[0]++, require("./utils"));

function run() {
  cov_pgbf2dc8u().f[0]++;
  cov_pgbf2dc8u().s[1]++;
  console.log(validateInput("1"));
}

cov_pgbf2dc8u().s[2]++;
run();