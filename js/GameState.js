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
    this.toOver = false;
    this.over = false;
    this.toClear = false;
    this.clear = false;
    this.state = 0;
    this.maxBananas = 10;
    this.currentBananas = 0;
    this.maxLife = 5;
    this.currentLife = this.maxLife;
    this.score = 0;
    this.appleTimer = null;
    this.countBananas = 0;
    this.countApples = 0;
    this.countUntis = 0;
    HEADER_UI.init(this.state, this.currentLife, this.score, this.currentBananas, this.maxBananas);
  }

  getResult() {
    const result = [this.countBananas, this.countApples, this.countUntis, this.score];
    return result;//結果画面出力用、オブジェクトそれぞれの総獲得数、トータルスコアを返す
  }

  #updateScore(points) {
    this.score += points;
  }

  #updateLife() {
    this.currentLife--;
    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
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
    this.currentBananas++;
    this.#updateScore(this.scoreType[0]);
    EFFECTS.updateScorePopup(this.scoreType[0]);
    if (this.currentBananas >= this.maxBananas) this.toClear = true;
  }

  hitApple() {
    if (this.state === 3) {//すでにアップルタイム中なら
      SOUNDS.se("apple");
      this.countApples++;
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
      EFFECTS.updateScorePopup(this.scoreType[1]);
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
}

export default GameState;
