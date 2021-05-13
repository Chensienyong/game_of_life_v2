/*
  Given a shape (2d array of true/false for alive/not-alive)
*/
function setShape(sim, top, left, shape) {
  for(let i = 0; i < shape.length; i++) {
    for(let j = 0; j < shape[i].length; j++) {
      sim.grid[top + i][left + j].alive = shape[i][j]
    }
  }
};

module.exports = setShape;
