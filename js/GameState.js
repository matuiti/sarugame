import { Config } from "./index.js";

class GameState {
  constructor() {
    this.reset();
  }
  // 初期化
  reset() {
    this.loop  = false;
    this.over  = false;
    this.clear = false;

    this.maxBanana = 10;
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
  updateLife(amount) {
    this.currentLife += amount;
    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
    } else if (this.currentLife <= 0) {
      this.currentLife = 0;
      this.over = true;
    }
  }
  // バナナ数更新
  updateBanana() {
    this.currentBanana++;
    this.#updateScore( Config.SCORE_BANANA );// 得点を加算して更新
    if( this.currentBanana >= this.maxBanana ) { this.clear = true; }
  }
}

export default GameState;
