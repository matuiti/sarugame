class GameState {
  constructor() {
    this.reset();
    this.addScore = [100,300]//[バナナ,リンゴ]
  }
  reset() {
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
  updateLife() {
    this.currentLife--;
    if (this.currentLife > this.maxLife) {
      this.currentLife = this.maxLife;
    } else if (this.currentLife <= 0) {
      this.currentLife = 0;
      this.over = true;
    }
  }
  // バナナ数とスコアを増加
  addBanana() {
    this.currentBanana++;
    this.#updateScore( this.addScore[0] );// 得点を加算
    if( this.currentBanana >= this.maxBanana ) { this.clear = true; }//目標数達成でクリア
  }
  // リンゴのスコアを増加
  addApple() {
    this.#updateScore( this.addScore[1] );// 得点を加算
  }
}

export default GameState;
