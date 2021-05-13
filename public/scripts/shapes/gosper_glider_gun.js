const setShape = require("./shape");

function downRight(sim, top, left) {
  let shape = [
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false ],
    [ false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,true,false,true,true,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ]
  ];

  setShape(sim, top, left, shape);
}

function topLeft(sim, top, left) {
  let shape = [
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,true,true,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,true,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,true,false ],
    [ false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ],
    [ false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false ]
  ];

  setShape(sim, top, left, shape);
}

function verticalTopLeft(sim, top, left) {
  let shape = [
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, true, true, false, false, false ],
    [ false, false, false, false, false, false, true, true, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, true, true, false, false, false, true, true, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, true, false, false, false, true, false, false ],
    [ false, false, false, false, false, true, true, true, false, false, false ],
    [ false, false, false, false, false, true, true, true, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, true, false, false, false, false, false, false ],
    [ false, false, false, true, true, true, false, false, false, false, false ],
    [ false, false, true, false, false, false, true, false, false, false, false ],
    [ false, false, false, false, true, false, false, false, false, false, false ],
    [ false, true, false, false, false, false, false, true, false, false, false ],
    [ false, true, false, false, false, false, false, true, false, false, false ],
    [ false, false, true, false, false, false, true, false, false, false, false ],
    [ false, false, false, true, true, true, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ],
    [ false, false, false, false, true, true, false, false, false, false, false ],
    [ false, false, false, false, true, true, false, false, false, false, false ],
    [ false, false, false, false, false, false, false, false, false, false, false ]
  ];

  setShape(sim, top, left, shape);
}

module.exports = {
  downRight,
  topLeft,
  verticalTopLeft
};
