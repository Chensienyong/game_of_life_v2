const setShape = require("./shape");

function clock(sim, top, left) {
  let shape = [
    [false, false, false, false, false, false, true, true],
    [false, false, false, false, false, false, true, true],
    [],
    [false, false, false, false, true, true, true, true],
    [true, true, false, true, false, false, false, false, true],
    [true, true, false, true, false, false, true, false, true],
    [false, false, false, true, false, false, true, false, true, false, true, true],
    [false, false, false, true, false, true, false, false, true, false, true, true],
    [false, false, false, false, true, true, true, true],
    [],
    [false, false, false, false, true, true],
    [false, false, false, false, true, true]
  ];

  setShape(sim, top, left, shape);
}

module.exports = clock;
