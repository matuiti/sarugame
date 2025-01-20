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

    this.leftBtn.addEventListener("touchstart", this.touchLeftStart.bind(this), { passive: false });
    this.leftBtn.addEventListener("touchend", this.touchLeftEnd.bind(this), { passive: false });
    this.leftBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: false });

    this.rightBtn.addEventListener("touchstart", this.touchRightStart.bind(this), { passive: false });
    this.rightBtn.addEventListener("touchend", this.touchRightEnd.bind(this), { passive: false });
    this.rightBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: false });

    // PCのキーボードイベント
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  touchLeftStart(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x <= 0) return;
    this.moveLeft = true;
    this.isSingleTouch = true;
    this.move();
  }

  touchLeftEnd(e) {
    e.preventDefault();
    if (this.isSingleTouch) {
      SARU.move(false);
      gameLoop();
    }
    this.stopMovement();
  }

  touchRightStart(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x >= (CONFIG.SCREEN_W - SARU.w)) return;
    this.moveRight = true;
    this.isSingleTouch = true;
    this.move();
  }

  touchRightEnd(e) {
    e.preventDefault();
    if (this.isSingleTouch) {
      SARU.move(true);
      gameLoop();
    }
    this.stopMovement();
  }

  stopMovement() {
    this.moveLeft = false;
    this.moveRight = false;
    this.isSingleTouch = false;
  }

  move() {
    if (this.moveLeft && !GAME_STATE.over && !CONFIG.hit && SARU.x > CONFIG.LEFT_END) {
      this.isSingleTouch = false;
      SARU.move(false);
      gameLoop();
      setTimeout(this.move.bind(this), 200); // 速度調整のために300ms待機
    } else if (this.moveRight && !GAME_STATE.over && !CONFIG.hit && SARU.x < CONFIG.RIGHT_END) {
      this.isSingleTouch = false;
      SARU.move(true);
      gameLoop();
      setTimeout(this.move.bind(this), 200); // 速度調整のために300ms待機
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
