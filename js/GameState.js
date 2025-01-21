import { Images, Sounds } from './index.js';
import { HEADER_UI, EFFECTS } from './index.js';

const IMAGES = new Images();
const SOUNDS = new Sounds();

class GameState {
  constructor() {
    this.scoreType = [10, 50]; // [バナナ,リンゴ]
    this.initRemainingAppleTime = 5; // アップルタイムの基本効果時間(s)
    this.remainingAppleTime = this.initRemainingAppleTime; // アップルタイムの残り時間(s)
    this.addTime = 3; // アップルタイム中のリンゴ獲得による延長時間(s)
    this.hitTime = 300; // hit中判定の時間（ms）
    this.reset();
  }

  reset() {
    this.over = false;
    this.clear = false;
    this.toOver = false;
    this.state = 0;
    this.maxBananas = 33;
    this.currentBananas = 0;
    this.maxLife = 5;
    this.currentLife = this.maxLife;
    this.score = 0;
    this.appleTimer = null;
    HEADER_UI.init(this.state, this.currentLife, this.score, this.currentBananas, this.maxBananas);
  }

  #updateScore(points) {
    this.score += points;
  }

  #updateLife() {
    this.currentLife--;
    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
      return;
    } else if (this.currentLife <= 0) {
      this.currentLife = 0;
      this.state = 2;
      this.toOver = true;
      return;
    } else {
      setTimeout(() => {
        this.state = 0;
      }, this.hitTime);
    }
  }

  hitBanana() {
    SOUNDS.se("banana");
    this.currentBananas++;
    this.#updateScore(this.scoreType[0]);
    EFFECTS.updateScorePopup(this.scoreType[0]);
    if (this.currentBananas >= this.maxBananas) this.clear = true;
  }

  hitApple() {
    if (this.state === 3) {
      SOUNDS.se("apple");
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
      EFFECTS.updateScorePopup(this.scoreType[1]);
    } else {
      SOUNDS.se("appleTime");
      this.state = 3;
      this.#updateScore(this.scoreType[1]);
      this.startAppleTime();
      EFFECTS.updateScorePopup(this.scoreType[1]);
      EFFECTS.updateAppleTimePopup();
    }
  }

  startAppleTime() {
    this.appleTimer = setInterval(() => {
      if (this.remainingAppleTime > 0) {
        this.remainingAppleTime--;
      } else {
        this.stopAppleTime();
      }
    }, 1000);
  }

  addAppleTime(addTime) {
    this.remainingAppleTime += addTime;
  }

  stopAppleTime() {
    clearInterval(this.appleTimer);
    this.appleTimer = null;
    this.state = 0;
  }

  hitUnti() {
    SOUNDS.se("unti");
    this.state = 1;
    this.#updateLife();
  }
}

export default GameState;
