import { Config } from './index.js';
import { GAME_STATE, SARU } from './index.js';
const CONFIG = new Config();
class Input {
  constructor(gameLoop) {
    this.gameLoop = gameLoop;
    this.init();
  }

  init() {
    // スマホのタッチイベント
    this.leftBtn = document.getElementById("left-btn");
    this.rightBtn = document.getElementById("right-btn");

    this.leftBtn.addEventListener("touchstart", this.touchLeftStart.bind(this), { passive: true });
    this.leftBtn.addEventListener("touchend", this.touchLeftEnd.bind(this), { passive: true });
    this.leftBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: true });

    this.rightBtn.addEventListener("touchstart", this.touchRightStart.bind(this), { passive: true });
    this.rightBtn.addEventListener("touchend", this.touchRightEnd.bind(this), { passive: true });
    this.rightBtn.addEventListener("touchcancel", this.stopMovement.bind(this), { passive: true });

    // PCのキーボードイベント
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  touchLeftStart(e) {
    // e.preventDefault();
    if (GAME_STATE.over || GAME_STATE.clear ||CONFIG.hit || SARU.x <= CONFIG.LEFT_END) return;
    if (this.leftCooldown) return; // クールダウン中は反応しない
    this.moveLeft = true;
    this.isSingleTouch = true;
    this.move();
    this.leftCooldown = true;
    setTimeout(() => this.leftCooldown = false, 100); // 300msのクールダウン時間を設定
  }

  touchLeftEnd(e) {
    // e.preventDefault();
    if (this.isSingleTouch && SARU.x > CONFIG.LEFT_END) {
      SARU.move(false);
      this.gameLoop();
    }
    this.stopMovement();
  }

  touchRightStart(e) {
    // e.preventDefault();
    if (GAME_STATE.over || GAME_STATE.clear || CONFIG.hit || SARU.x >= CONFIG.RIGHT_END) return;
    if (this.rightCooldown) return; // クールダウン中は反応しない
    this.moveRight = true;
    this.isSingleTouch = true;
    this.move();
    this.rightCooldown = true;
    setTimeout(() => this.rightCooldown = false, 100); // 300msのクールダウン時間を設定
  }

  touchRightEnd(e) {
    // e.preventDefault();
    if (this.isSingleTouch && SARU.x < CONFIG.RIGHT_END) {
      SARU.move(true);
      this.gameLoop();
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
      this.gameLoop();
      setTimeout(this.move.bind(this), 300); // 速度調整のために200ms待機
    } else if (this.moveRight && !GAME_STATE.over && !CONFIG.hit && SARU.x < CONFIG.RIGHT_END) {
      this.isSingleTouch = false;
      SARU.move(true);
      this.gameLoop();
      setTimeout(this.move.bind(this), 300); // 速度調整のために200ms待機
    }
  }

  handleKeyDown(e) {
    if (GAME_STATE.over || GAME_STATE.clear) return;
    if (e.key === "ArrowLeft" && SARU.x > CONFIG.LEFT_END && !CONFIG.hit) {
      SARU.move(0);
      this.gameLoop();
    } else if (e.key === "ArrowRight" && SARU.x < CONFIG.RIGHT_END && !CONFIG.hit) {
      SARU.move(1);
      this.gameLoop();
    }
  }
}

export default Input;
