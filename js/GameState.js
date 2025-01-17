import { Sounds } from './index.js';
import { HEADER_UI } from './index.js';
const SOUNDS = new Sounds;
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
    this.maxBananas = 5;//ステージクリア目標数
    this.currentBananas = 0;
    this.maxLife = 5;//最大ライフ数
    this.currentLife = this.maxLife;
    this.score = 0;
    HEADER_UI.init(this.state, this.currentLife, this.score, this.currentBananas, this.maxBananas);//(iconIndex, newLife, newScore, currentBananas, maxBananas)
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
  // 加点時の頭上表示アニメーション
  //  #showScorePopup(score){}

  // 衝突後の処理(バナナ)
  hitBanana() {
    SOUNDS.se("banana");
    this.currentBananas++;
    this.#updateScore(this.scoreType[0]);
    // this.#showScorePopup(this.scoreType[0]);
    if (this.currentBananas >= this.maxBananas) this.clear = true;
  }

  // 衝突後の処理(リンゴ)
  hitApple() {
    if (this.state === 3) {//アップルタイム中なら
      SOUNDS.se("apple");
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
      // this.#showScorePopup(this.scoreType[0]);
    } else {
      SOUNDS.se("appleTime");
      this.state = 3;
      this.#updateScore(this.scoreType[1]);
      this.startAppleTime();
      // this.#showScorePopup(this.scoreType[0]);
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

  // 衝突後の処理(うんち)
  hitUnti() {
    SOUNDS.se("unti");
    this.state = 1;//やられ状態
    this.#updateLife();//ライフが1減る
    setTimeout(() => {
      this.state = 0;//通常状態
    }, 1000);//やられ時間
  }

}

export default GameState;
