const Conway = require("./conway");
const ggg = require("./shapes/gosper_glider_gun");
const n10enginecordership = require("./shapes/n10enginecordership");
const n101 = require("./shapes/n101");
const spacefiller = require("./shapes/spacefillers");
const n3EngineCordershipRake = require("./shapes/n3_engine_cordership_rake");
const n3EngineCordershipGun = require("./shapes/n3_engine_cordership_gun");
const lwssGun = require("./shapes/lwss_gun");
const movingSawtooth = require("./shapes/moving_sawtooth");
const sawtooth1846 = require("./shapes/sawtooth1846");
const lobster = require("./shapes/lobster");
const teeth = require("./shapes/teeth");
const backrake3 = require("./shapes/backrake3");
const puffer1 = require("./shapes/puffer1");
const puffer2 = require("./shapes/puffer2");
const piship = require("./shapes/piship");
const prepulsarShuttle26 = require("./shapes/prepulsar_shuttle_26");
const prepulsarShuttle36 = require("./shapes/prepulsar_shuttle_36");
const clock = require("./shapes/clock");
const n106p135 = require("./shapes/n106p135");
const beluchenkoP51 = require("./shapes/beluchenko_p51");
const p58Toadsucker = require("./shapes/p58_toadsucker");

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

  document.getElementById("spacefillerdestroyed").onclick = () => {
    if(this.board == "spacefillerdestroyed") return;
    this.board = "spacefillerdestroyed";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Spacefiller Destroyed\n';
  }

  document.getElementById("3enginecordershiprake").onclick = () => {
    if(this.board == "3enginecordershiprake") return;
    this.board = "3enginecordershiprake";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '3 Engine Cordership Rake\n';
  }

  document.getElementById("3enginecordershipgun").onclick = () => {
    if(this.board == "3enginecordershipgun") return;
    this.board = "3enginecordershipgun";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '3 Engine Cordership Gun\n';
  }

  document.getElementById("lwssgun").onclick = () => {
    if(this.board == "lwssgun") return;
    this.board = "lwssgun";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'LWSS Gun\n';
  }

  document.getElementById("movingsawtooth").onclick = () => {
    if(this.board == "movingsawtooth") return;
    this.board = "movingsawtooth";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Moving Sawtooth\n';
  }

  document.getElementById("sawtooth1846").onclick = () => {
    if(this.board == "sawtooth1846") return;
    this.board = "sawtooth1846";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Sawtooth 1846\n';
  }

  document.getElementById("lobster").onclick = () => {
    if(this.board == "lobster") return;
    this.board = "lobster";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Lobster\n';
  }

  document.getElementById("teeth").onclick = () => {
    if(this.board == "teeth") return;
    this.board = "teeth";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Teeth\n';
  }

  document.getElementById("backrake3").onclick = () => {
    if(this.board == "backrake3") return;
    this.board = "backrake3";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Backrake 3\n';
  }

  document.getElementById("puffer1").onclick = () => {
    if(this.board == "puffer1") return;
    this.board = "puffer1";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Puffer 1\n';
  }

  document.getElementById("puffer2").onclick = () => {
    if(this.board == "puffer2") return;
    this.board = "puffer2";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Puffer 2\n';
  }

  document.getElementById("piship").onclick = () => {
    if(this.board == "piship") return;
    this.board = "piship";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Pi Ship\n';
  }

  document.getElementById("prepulsarshuttle26").onclick = () => {
    if(this.board == "prepulsarshuttle26") return;
    this.board = "prepulsarshuttle26";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Prepulsar Shuttle 26\n';
  }

  document.getElementById("prepulsarshuttle36").onclick = () => {
    if(this.board == "prepulsarshuttle36") return;
    this.board = "prepulsarshuttle36";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Prepulsar Shuttle 36\n';
  }

  document.getElementById("random").onclick = () => {
    if(this.board == "random") return;
    this.board = "random";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Randomize\n';
  }

  document.getElementById("clock").onclick = () => {
    if(this.board == "clock") return;
    this.board = "clock";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Clock\n';
  }

  document.getElementById("106P135").onclick = () => {
    if(this.board == "106P135") return;
    this.board = "106P135";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = '106P135\n';
  }

  document.getElementById("beluchenkoP51").onclick = () => {
    if(this.board == "beluchenkoP51") return;
    this.board = "beluchenkoP51";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'Beluchenko\'s p51\n';
  }

  document.getElementById("p58toadsucker").onclick = () => {
    if(this.board == "p58toadsucker") return;
    this.board = "p58toadsucker";
    this.createBoard();
    document.getElementById("boardStyle").innerHTML = 'P58 Toadsucker\n';
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
  } else if(this.board == "spacefillerdestroyed") {
    let pixelSize = Math.min($("#container").width() / 400, $("#container").height() / 400);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    spacefiller(sim, Math.floor(rows/2 - 13), 100);
    this.sim = sim;
  } else if(this.board == "3enginecordershiprake") {
    let pixelSize = Math.min($("#container").width() / 500, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n3EngineCordershipRake(sim, 1, 350);
    this.sim = sim;
  } else if(this.board == "3enginecordershipgun") {
    let pixelSize = Math.min($("#container").width() / 500, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n3EngineCordershipGun(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "lwssgun") {
    let pixelSize = Math.min($("#container").width() / 100, $("#container").height() / 100);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    lwssGun(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "movingsawtooth") {
    let pixelSize = Math.min($("#container").width() / 150, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    movingSawtooth(sim, 320, Math.floor(cols/2 - 70));
    this.sim = sim;
  } else if(this.board == "sawtooth1846") {
    let pixelSize = Math.min($("#container").width() / 150, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    sawtooth1846(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "lobster") {
    let pixelSize = Math.min($("#container").width() / 750, $("#container").height() / 750);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    lobster(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "teeth") {
    let pixelSize = Math.min($("#container").width() / 750, $("#container").height() / 750);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    teeth(sim, 1, Math.floor(cols/2 - 235));
    this.sim = sim;
  } else if(this.board == "backrake3") {
    let pixelSize = Math.min($("#container").width() / 200, $("#container").height() / 200);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    backrake3(sim, rows - 44, Math.floor(cols/2 - 15));
    this.sim = sim;
  } else if(this.board == "puffer1") {
    let pixelSize = Math.min($("#container").width() / 200, $("#container").height() / 200);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    puffer1(sim, rows - 27, Math.floor(cols/2 - 13));
    this.sim = sim;
  } else if(this.board == "puffer2") {
    let pixelSize = Math.min($("#container").width() / 200, $("#container").height() / 200);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    puffer2(sim, rows - 10, Math.floor(cols/2 - 9));
    this.sim = sim;
  } else if(this.board == "piship") {
    let pixelSize = Math.min($("#container").width() / 200, $("#container").height() / 200);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    piship(sim, rows - 30, Math.floor(cols/2 - 46));
    this.sim = sim;
  } else if(this.board == "prepulsarshuttle26") {
    let pixelSize = Math.min($("#container").width() / 40, $("#container").height() / 40);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    prepulsarShuttle26(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "prepulsarshuttle36") {
    let pixelSize = Math.min($("#container").width() / 80, $("#container").height() / 80);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    prepulsarShuttle36(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "random") {
    let pixelSize = Math.min($("#container").width() / 500, $("#container").height() / 500);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, 0.2);
    this.sim = sim;
  } else if(this.board == "clock") {
    let pixelSize = Math.min($("#container").width() / 20, $("#container").height() / 20);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    clock(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "106P135") {
    let pixelSize = Math.min($("#container").width() / 60, $("#container").height() / 60);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    n106p135(sim, 1, 1);
    this.sim = sim;
  } else if(this.board == "beluchenkoP51") {
    let pixelSize = Math.min($("#container").width() / 70, $("#container").height() / 70);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    beluchenkoP51(sim, 10, 10);
    this.sim = sim;
  } else if(this.board == "p58toadsucker") {
    let pixelSize = Math.min($("#container").width() / 70, $("#container").height() / 70);
    let cols = $("#container").width() / pixelSize;
    let rows = $("#container").height() / pixelSize;

    let sim = new Conway(rows, cols, pixelSize, this.roundDelay, chanceOfLife);
    p58Toadsucker(sim, 1, 1);
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
