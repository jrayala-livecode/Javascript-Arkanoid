import { detectCollision } from "/src/collisiondetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.width = 16;
    this.height = 16;
    this.reset();
  }

  reset() {
    this.position = {
      x: this.gameWidth / 2,
      y: this.gameHeight / 2 - 20
    };

    this.speed = {
      x: 50,
      y: 50
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;

    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.height > this.gameHeight) {
      this.reset();
      this.game.lives--;
    }

    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
    }
  }
}
