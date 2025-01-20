import { Images, Sounds } from './index.js';
import { HEADER_UI } from './index.js';
import { ctx } from './index.js'; // canvasのコンテキストをインポート

const IMAGES = new Images();
const SOUNDS = new Sounds();
const IMG = {
  numGet: IMAGES.num_get, // 0~9
};

class GameState {
  constructor() {
    this.scoreType = [10, 50]; // [バナナ,リンゴ]
    this.initRemainingAppleTime = 5; // アップルタイムの基本効果時間(s)
    this.remainingAppleTime = this.initRemainingAppleTime; // アップルタイムの残り時間(s)
    this.addTime = 3; // アップルタイム中のリンゴ獲得による延長時間(s)
    this.hitTime = 300; // hit中判定の時間（ms）
    this.scorePopups = []; // 得点表示用の配列
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
    this.scorePopups = [];
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

  #updateScorePopup(saru, score) {
    const scoreStr = score.toString();
    const popup = {
      x: saru.x + 1, // 表示の横位置を調整
      y: saru.y, // 開始位置
      scoreStr,
      opacity: 1,
      initialYSpeed: 0.2, // 最初の上昇速度
      finalYSpeed: 0.02, // 最後の上昇速度
      fadeOutSpeed: 0.1, // フェードアウト速度
      totalDistance: 2, // 総移動距離
      distanceCovered: 0 // 進んだ距離
    };
    this.scorePopups.push(popup);

    // アニメーションで位置を更新しながらフェードアウト
    const animationInterval = setInterval(() => {
      // 速く登る距離を超えたら速度を切り替える
      if (popup.distanceCovered < popup.totalDistance / 2) {
        popup.y -= popup.initialYSpeed; // 速く上昇
        popup.distanceCovered += popup.initialYSpeed;
      } else {
        popup.y -= popup.finalYSpeed; // ゆっくり上昇
        popup.distanceCovered += popup.finalYSpeed;
      }
      popup.opacity -= popup.fadeOutSpeed; // フェードアウト
      if (popup.opacity <= 0) {
        clearInterval(animationInterval);
        this.scorePopups = this.scorePopups.filter(p => p !== popup);
      }
    }, 50);
  }

  drawScorePopups(saru) {
    ctx.save();
    this.scorePopups.forEach(popup => {
      ctx.globalAlpha = popup.opacity;
      let offsetX = 0;
      popup.scoreStr.split('').forEach(num => {
        ctx.drawImage(IMG.numGet[num], popup.x * saru.BLOCK_W + offsetX, popup.y * saru.BLOCK_H, 79, 94);
        offsetX += 100;
      });
    });
    ctx.restore();
  }

  hitBanana(saru) {
    SOUNDS.se("banana");
    this.currentBananas++;
    this.#updateScore(this.scoreType[0]);
    this.#updateScorePopup(saru, this.scoreType[0]);
    if (this.currentBananas >= this.maxBananas) this.clear = true;
  }

  hitApple(saru) {
    if (this.state === 3) {
      SOUNDS.se("apple");
      this.#updateScore(this.scoreType[1]);
      this.addAppleTime(this.addTime);
      this.#updateScorePopup(saru, this.scoreType[1]);
    } else {
      SOUNDS.se("appleTime");
      this.state = 3;
      this.#updateScore(this.scoreType[1]);
      this.startAppleTime();
      this.#updateScorePopup(saru, this.scoreType[1]);
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
