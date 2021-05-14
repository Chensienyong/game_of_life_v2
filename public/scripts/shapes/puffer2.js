const setShape = require("./shape");

function puffer2(sim, top, left) {
  let shape = [
    [false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, true],
    [true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, true],
    [false, false, false, true, false, false, false, false, true, true, true, false, false, false, false, false, false, true],
    [false, false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, true],
    [false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, true]
  ];

  setShape(sim, top, left, shape);
}

module.exports = puffer2;
