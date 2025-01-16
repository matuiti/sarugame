import { Sounds } from './index.js'
const SOUNDS = new Sounds; //サウンドデータ

class GameState {
  constructor() {
    this.reset();
    this.scoreType = [100, 300]//[バナナ,リンゴ]
    this.initRemainingAppleTime = 5;//アップルタイムの基本効果時間(s)
    this.remainingAppleTime = this.initRemainingAppleTime;//アップルタイムの残り時間(s)
    this.addTime = 2;//アップルタイム中のリンゴ獲得による延長時間(s)
    this.appleTimer = null;
  }
  reset() {
    this.over = false;
    this.clear = false;
    this.state = 0;//0:通常, 1:hit, 2:ダウン, 3:appleTime
    this.maxBanana = 5;
    this.currentBanana = 0;
    this.maxLife = 5;
    this.currentLife = this.maxLife;
    this.score = 0;

  }
  // スコア更新
  #updateScore(points) {
    this.score += points;
  }
  // ライフ更新
  #updateLife() {
    this.currentLife--;
    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
    } else if (this.currentLife <= 0) {
      this.currentLife = 0;
      this.over = true;
    }
  }

  hitBanana() {
    SOUNDS.se("banana");
    this.currentBanana++;
    this.#updateScore(this.scoreType[0]);
    if (this.currentBanana >= this.maxBanana) this.clear = true;
  }
  hitApple() {
    if (this.state === 3) {//アップルタイム中なら
      SOUNDS.se("apple");
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
    } else {
      SOUNDS.se("appleTime");
      this.state = 3;
      this.#updateScore(this.scoreType[1]);
      this.startAppleTime();

    }

  }
  startAppleTime() {
    this.appleTimer = setInterval(() => {
      if (this.remainingAppleTime > 0) {
        this.remainingAppleTime--;
      } else {
        this.stopAppleTime();
      }
    }, 1000); // 1秒ごとにカウントダウン
  }
  addAppleTime(addTime) { this.remainingAppleTime += addTime; }//アップルタイムの継続時間を延長
  stopAppleTime() { clearInterval(this.appleTimer); this.appleTimer = null; }//アップルタイム終了

  hitUnti() {
    SOUNDS.se("unti");
    this.state = 1;
    this.#updateLife();
    setTimeout(() => {
      this.state = 0;
    }, 1000);
  }

}

export default GameState;
