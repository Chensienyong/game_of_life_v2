const setShape = require("./shape");

function n101(sim, top, left) {
  let shape = [
    [false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false],
    [false, false, false, true, false, true, false, false, false, false, false, false, true, false, true, false, false, false],
    [false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false],
    [true, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, true, true],
    [true, true, false, true, false, true, false, false, true, true, false, false, true, false, true, false, true, true],
    [false, false, false, true, false, true, false, true, false, false, true, false, true, false, true, false, false, false],
    [false, false, false, true, false, true, false, true, false, false, true, false, true, false, true, false, false, false],
    [true, true, false, true, false, true, false, false, true, true, false, false, true, false, true, false, true, true],
    [true, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, true, true],
    [false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false],
    [false, false, false, true, false, true, false, false, false, false, false, false, true, false, true, false, false, false],
    [false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false]
  ];

  setShape(sim, top, left, shape);
}

module.exports = n101;
