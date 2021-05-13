const Conway = require("./conway");
const ggg = require("./shapes/gosper_glider_gun");
const n10enginecordership = require("./shapes/n10enginecordership");
const n101 = require("./shapes/n101");
const spacefiller = require("./shapes/spacefillers");
const n3EngineCordershipRake = require("./shapes/n3_engine_cordership_rake");

function Board() {
  this.cols = 0;
  this.rows = 0;
  this.pixelSize = 1;
  this.chanceOfLive = 0;
  this.board = "ggg";
  this.run = false;
  this.sim = null;
  this.speed = "fast";
  this.roundDelay = 0;
};

Board.prototype.init = function() {
  this.createBoard();
  this.toggleButtons();
  this.changeSpeed();
};

Board.prototype.toggleButtons = function() {
  document.getElementById("adjustFast").onclick = () => {
    this.speed = "fast";
    this.changeSpeed();
    document.getElementById("adjustSpeed").innerHTML = 'Speed: Fast\n';
  }

  document.getElementById("adjustAverage").onclick = () => {
    this.speed = "average";
    this.changeSpeed();
    document.getElementById("adjustSpeed").innerHTML = 'Speed: Average\n';
  }

  document.getElementById("adjustSlow").onclick = () => {
    this.speed = "slow";
    this.changeSpeed();
    document.getElementById("adjustSpeed").innerHTML = 'Speed: Slow\n';
  }

  document.getElementById("clearBoard").onclick = () => {
    if(this.board == "clear") return;
    this.board = "clear";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Clear Board\n';
  }

  document.getElementById("ggg").onclick = () => {
    if(this.board == "ggg") return;
    this.board = "ggg";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Gosper Glider Gun\n';
  }

  document.getElementById("doubleggg").onclick = () => {
    if(this.board == "doubleggg") return;
    this.board = "doubleggg";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Double GGG\n';
  }

  document.getElementById("10enginecordership").onclick = () => {
    if(this.board == "10enginecordership") return;
    this.board = "10enginecordership";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '10 Engine Corder Ship\n';
  }

  document.getElementById("101").onclick = () => {
    if(this.board == "101") return;
    this.board = "101";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '101\n';
  }

  document.getElementById("spacefiller").onclick = () => {
    if(this.board == "spacefiller") return;
    this.board = "spacefiller";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Spacefiller\n';
  }

  document.getElementById("3enginecordershiprake").onclick = () => {
    if(this.board == "3enginecordershiprake") return;
    this.board = "3enginecordershiprake";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '3 Engine Cordership rake\n';
  }

  document.getElementById("startButton").onclick = () => {
    if (this.run) {
      this.run = false;
      document.getElementById("boardStyle").className = "btn btn-dark btn-lg dropdown-toggle";
      document.getElementById("startButton").innerHTML = "Start";

      this.sim.stop();
    } else {
      this.run = true;
      document.getElementById("boardStyle").className = "btn btn-dark btn-lg dropdown-toggle disabled";
      document.getElementById("startButton").innerHTML = "Stop";

      this.sim.start();
    }
  }
};

Board.prototype.changeSpeed = function() {
  switch (this.speed) {
    case "fast":
      this.roundDelay = 0;
      break;
    case "average":
      this.roundDelay = 15;
      break;
    case "slow":
      this.roundDelay = 30;
      break;
    default:
      this.roundDelay = 0;
  }
  this.sim.interRoundDelay = this.roundDelay;
  if(this.run) {
    this.sim.stop();
    this.sim.start();
  }
};

Board.prototype.createBoard = function() {
  let chanceOfLife = 0
  let container = document.getElementById('container');

  if(this.board == "clear") {
    let pixelSize = 5;
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    this.sim = sim;
  } else if(this.board == "ggg") {
    let pixelSize = Math.floor(Math.min($("#container").width() / 120, $("#container").height() / 120));
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    ggg.downRight(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "doubleggg") {
    let pixelSize = Math.floor(Math.min($("#container").width() / 120, $("#container").height() / 120));
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    ggg.downRight(sim, 1, 1);
    ggg.downRight(sim, 1, 50);
    ggg.topLeft(sim, 50, 100);
    ggg.verticalTopLeft(sim, 70, 97);
    this.sim = sim;
  } else if(this.board == "10enginecordership") {
    let pixelSize = Math.min($("#container").width() / 200, $("#container").height() / 200);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n10enginecordership(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "101") {
    let pixelSize = Math.min($("#container").width() / 30, $("#container").height() / 30);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n101(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "spacefiller") {
    let pixelSize = Math.min($("#container").width() / 400, $("#container").height() / 400);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    spacefiller(sim, Math.floor(rows/2 - 13), Math.floor(cols/2 - 18));
    this.sim = sim;
  } else if(this.board == "3enginecordershiprake") {
    let pixelSize = Math.min($("#container").width() / 500, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n3EngineCordershipRake(sim, 1, 350);
    this.sim = sim;
  }
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  container.append(this.sim.canvas);
  this.sim.repaint();
};

let newBoard = new Board();
newBoard.init();
