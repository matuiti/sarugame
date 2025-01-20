import { gameLoop } from './index.js';
import { Config } from './index.js';
import { GAME_STATE, SARU } from './index.js';

const CONFIG = new Config();

class Input {
  constructor() {
    this.init();
  }

  init() {
    // スマホのタッチイベント
    this.leftBtn = document.getElementById("left-btn");
    this.rightBtn = document.getElementById("right-btn");

    this.leftBtn.addEventListener("touchstart", this.touchLeft.bind(this), { passive: false });
    this.leftBtn.addEventListener("touchend", this.stopMovement.bind(this), { passive: false });
    this.leftBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: false });

    this.rightBtn.addEventListener("touchstart", this.touchRight.bind(this), { passive: false });
    this.rightBtn.addEventListener("touchend", this.stopMovement.bind(this), { passive: false });
    this.rightBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: false });

    // PCのキーボードイベント
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  touchLeft(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x <= 0) return;
    this.moveLeft = true;
    this.move();
  }

  touchRight(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x >= (CONFIG.SCREEN_W - SARU.w)) return;
    this.moveRight = true;
    this.move();
  }

  stopMovement() {
    this.moveLeft = false;
    this.moveRight = false;
  }

  move() {
    if (this.moveLeft && !GAME_STATE.over && !CONFIG.hit && SARU.x > 0) {
      SARU.move(false);
      gameLoop();
      setTimeout(this.move.bind(this), 100); // 速度調整のために100ms待機
    } else if (this.moveRight && !GAME_STATE.over && !CONFIG.hit && SARU.x < (CONFIG.SCREEN_W - SARU.w)) {
      SARU.move(true);
      gameLoop();
      setTimeout(this.move.bind(this), 100); // 速度調整のために100ms待機
    }
  }

  handleKeyDown(e) {
    if (GAME_STATE.over) return;
    if (e.key === "ArrowLeft" && SARU.x > CONFIG.LEFT_END && !CONFIG.hit) {
      SARU.move(0);
      gameLoop();
    } else if (e.key === "ArrowRight" && SARU.x < CONFIG.RIGHT_END && !CONFIG.hit) {
      SARU.move(1);
      gameLoop();
    }
  }
}

export default Input;
