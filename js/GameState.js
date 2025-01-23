import { Sounds } from './index.js';
import { HEADER_UI, EFFECTS } from './index.js';
const SOUNDS = new Sounds();
class GameState {
  constructor() {
    this.scoreType = [10, 50]; // [バナナ,リンゴ]
    this.initRemainingAppleTime = 5; // アップルタイムの基本効果時間(s)
    this.addTime = 3; // リンゴ追加獲得によるアップルタイムの延長時間(s)
    this.hitTime = 300; // hit中判定の時間（ms）
    this.reset();
  }

  reset() {
    this.toOver = false;
    this.over = false;
    this.toClear = false;
    this.clear = false;
    this.state = 0; // 0:普通, 1:叫び, 2:ダウン, 3:アップルタイム
    this.maxLife = 5;//最大ライフ
    this.currentLife = this.maxLife;//現在のライフ
    this.maxBananas = 10;//ステージクリア目標バナナ数
    this.countBananas = 0;//獲得数をカウント
    this.countApples = 0;//獲得数をカウント
    this.countUntis = 0;//獲得数をカウント
    this.score = 0;//トータルスコア
    this.remainingAppleTime = this.initRemainingAppleTime; // アップルタイムの残り時間(s)
    this.stopAppleTime();//アップルタイム計測用インターバル処理をクリア
    HEADER_UI.init(this.state, this.currentLife, this.score, this.countBananas, this.maxBananas);//ヘッダーの初期化
  }

  getResult() {
    const result = [this.countBananas, this.countApples, this.countUntis, this.score];
    return result;//結果画面出力用、オブジェクトそれぞれの総獲得数、トータルスコアを返す
  }

  #updateScore(points) {
    this.score += points;
  }

  #updateLife() {//ライフ更新処理
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
    this.countBananas++;
    this.#updateScore(this.scoreType[0]);
    EFFECTS.updateScorePopup(this.scoreType[0]);
    if (this.countBananas >= this.maxBananas) this.toClear = true;
  }

  hitApple() {
    if (this.state === 3) {//すでにアップルタイム中なら
      SOUNDS.se("apple");
      this.countApples++;
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
      EFFECTS.updateScorePopup(this.scoreType[1]);
      return;
    } else {
      SOUNDS.se("appleTime");
      this.countApples++;
      this.state = 3;
      this.#updateScore(this.scoreType[1]);
      this.startAppleTime();
      EFFECTS.updateScorePopup(this.scoreType[1]);
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
    this.appleTimer = setInterval(() => {//アップルタイムの残り時間を計測
      if (this.remainingAppleTime > 0) {
        this.remainingAppleTime--;
      } else {//効果時間が経ったら
        this.stopAppleTime();//終了処理へ
      }
    }, 1000);
  }

  addAppleTime(addTime) {//アップルタイム中の継続時間追加の処理
    this.remainingAppleTime += addTime;
  }

  stopAppleTime() {
    clearInterval(this.appleTimer);
    this.appleTimer = null;
    this.state = 0;
  }
}

export default GameState;
