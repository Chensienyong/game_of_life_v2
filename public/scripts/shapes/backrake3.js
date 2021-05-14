const setShape = require("./shape");

function backrake3(sim, top, left) {
  let shape = [
    [false, false, false, false, true, true, true, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, true, true],
    [false, false, false, false, true, false, false, true, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, false, true, false, false, true],
    [false, false, false, false, true, false, false, false, false, false, false, false, true, false, true, true, false, true, true, false, true, false, false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    [false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    [false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true],
    [false, false, false, false, false, true, false, true, false, false, false, true, true, false, true, false, false, false, true, false, true, true, false, false, false, true, false, true],
    [false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true],
    [],
    [],
    [],
    [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true],
    [false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true],
    [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
    [true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    [true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
    [false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true],
    [false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true],
    [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
    [false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
    [false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true]
  ];

  setShape(sim, top, left, shape);
}

module.exports = backrake3;
