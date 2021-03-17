import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let last_time = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

function game_loop(timestamp) {
  let deltaTime = timestamp - last_time;
  last_time = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(game_loop);
}

requestAnimationFrame(game_loop);
