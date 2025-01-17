import { gameLoop } from './main.js';
import { Config } from './index.js';
import { GAME_STATE, SARU } from './index.js';
const CONFIG = new Config;
class Input {
  constructor() {
    this.init();
  }

  init() {
    // スマホのタッチイベント
    document.getElementById("left-btn").addEventListener("touchstart", this.touchLeft.bind(this), { passive: false });
    document.getElementById("right-btn").addEventListener("touchstart", this.touchRight.bind(this), { passive: false });
    // PCのキーボードイベント
    document.onkeydown = this.handleKeyDown.bind(this);
  }

  touchLeft(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x <= 0) return;
    SARU.move(false);
    gameLoop();
  }

  touchRight(e) {
    e.preventDefault();
    if (GAME_STATE.over || CONFIG.hit || SARU.x >= (CONFIG.SCREEN_W - SARU.w)) return;
    SARU.move(true);
    gameLoop();
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
