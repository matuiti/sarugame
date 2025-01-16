import { Sounds } from './index.js'
const SOUNDS = new Sounds; //サウンドデータ

class GameState {
  constructor() {
    this.reset();
    this.scoreType = [100, 300]//[バナナ,リンゴ]
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
    SOUNDS.se("apple");
    this.#updateScore(this.scoreType[1]);

  }

  addApple() {// リンゴのスコアを増加
    this.#updateScore(this.scoreType[1]);// 得点を加算
  }

  hitUnti() {
    SOUNDS.se("unti");
    this.state = 1;
    console.log("hitUnti"+this.state);
    this.#updateLife();
    setTimeout(() => {
      this.state = 0;
      console.log("1秒後"+this.state);
    }, 1000);
  }

}

export default GameState;
