import { Sounds } from './index.js';
import { CONFIG, HEADER_UI, EFFECTS } from './index.js';
const SOUNDS = new Sounds();
class GameState {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.toOver = false;
    this.over = false;
    this.toClear = false;
    this.clear = false;
    this.state = 0;
    this.score = 0;
    this.appleTimer = null;
    this.countBananas = 0;
    this.countApples = 0;
    this.countUntis = 0;
    HEADER_UI.init(this.state, CONFIG.CURRENT_LIFE, this.score, CONFIG.CURRENT_BANANAS, CONFIG.MAX_BANANAS);
  }

  getResult() {
    const result = [this.countBananas, this.countApples, this.countUntis, this.score];
    return result;
  }

  #updateScore(points) {
    this.score += points;
  }

  #updateLife() {
    CONFIG.CURRENT_LIFE--;
    if (CONFIG.CURRENT_LIFE > CONFIG.MAX_LIFE) {
      CONFIG.CURRENT_LIFE = CONFIG.MAX_LIFE;
      return;
    } else if (CONFIG.CURRENT_LIFE <= 0) {
      CONFIG.CURRENT_LIFE = 0;
      this.state = 2;
      this.toOver = true;
      return;
    } else {
      setTimeout(() => {
        this.state = 0;
      }, CONFIG.HIT_TIME);
    }
  }

  hitBanana() {
    SOUNDS.se("banana");
    this.countBananas++;
    CONFIG.CURRENT_BANANAS++;
    this.#updateScore(CONFIG.SCORE_TYPE[0]);
    EFFECTS.updateScorePopup(CONFIG.SCORE_TYPE[0]);
    if (CONFIG.CURRENT_BANANAS >= CONFIG.MAX_BANANAS) this.toClear = true;
  }

  hitApple() {
    if (this.state === 3) {
      SOUNDS.se("apple");
      this.countApples++;
      this.#updateScore(CONFIG.SCORE_TYPE[1]);
      this.addAppleTime();
      EFFECTS.updateScorePopup(CONFIG.SCORE_TYPE[1]);
      return;
    } else {
      SOUNDS.se("appleTime");
      this.countApples++;
      this.state = 3;
      CONFIG.REMAINING_APPLE_TIME = CONFIG.INIT_REMAINING_APPLE_TIME;//基本効果時間を残り時間に代入
      this.#updateScore(CONFIG.SCORE_TYPE[1]);
      this.startAppleTime();
      EFFECTS.updateScorePopup(CONFIG.SCORE_TYPE[1]);
      EFFECTS.updateAppleTimePopup();
      return;
    }
  }

  hitUnti() {
    SOUNDS.se("unti");
    this.countUntis++;
    this.state = 1;
    this.#updateLife();
  }

  startAppleTime() {
    this.appleTimer = setInterval(() => {
      if (CONFIG.REMAINING_APPLE_TIME > 0) {
        CONFIG.REMAINING_APPLE_TIME--;
      } else {
        this.stopAppleTime();
      }
    }, 1000);
  }

  addAppleTime( ) {
    CONFIG.REMAINING_APPLE_TIME += CONFIG.ADD_TIME;
  }

  stopAppleTime() {
    clearInterval(this.appleTimer);
    this.appleTimer = null;
    this.state = 0;
  }
}

export default GameState;
