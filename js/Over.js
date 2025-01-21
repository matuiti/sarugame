import { Images, Sounds, Config } from './index.js';
import { GAME_STATE } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;

const oCanvas = document.getElementById('over-canvas');
const oCtx = oCanvas.getContext('2d');
oCanvas.width = CONFIG.SCREEN_W;
oCanvas.height = CONFIG.SCREEN_H;
oCtx.imageSmoothingEnabled = true;
oCtx.imageSmoothingQuality = 'high';

const IMG = {
  numResult: IMAGES.num_result // 0~9の数字画像
}
const OVER_ELMS = {
  overSaru: document.getElementById('over-saru'),
  overPanel: document.getElementById('over-panel')
}
class Over {
  constructor() {
    this.score_x = 246;
    this.score_y = 459;
    this.score_w = 124;
    this.score_h = 155;
    this.count_item_x = 599; // base
    this.count_item_w = 89;  // base
    this.count_item_h = 111; // base
    this.count_banana_x = this.count_item_x;
    this.count_banana_y = 722;
    this.count_banana_w = this.count_item_w;
    this.count_banana_h = this.count_item_h;
    this.count_apple_x = this.count_item_x;
    this.count_apple_y = 905;
    this.count_apple_w = this.count_item_w;
    this.count_apple_h = this.count_item_h;
    this.count_unti_x = this.count_item_x;
    this.count_unti_y = 1088;
    this.count_unti_w = this.count_item_w;
    this.count_unti_h = this.count_item_h;
  }

  drawNumber(ctx, num, x, y, w, h, digitCount) {
    const numStr = num.toString().padStart(digitCount, '0'); // 指定桁数になるように0で埋める
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr.charAt(i));
      ctx.drawImage(IMG.numResult[digit], x + (numStr.length - 1 - i) * w, y, w, h); // 右寄せ表示
    }
  }

  drawScore(score) {
    this.drawNumber(oCtx, score, this.score_x, this.score_y, this.score_w, this.score_h, 5); // 5桁
  }

  drawItemCount(count, x, y, w, h) {
    this.drawNumber(oCtx, count, x, y, w, h, 2); // 2桁
  }

  startOver() {
    const result = GAME_STATE.getResult();
    setTimeout(() => {
      OVER_ELMS.overSaru.src = 'images/over_saru.gif';
      setTimeout(() => {
        OVER_ELMS.overPanel.style.opacity = "1";
        this.drawScore(result[3]); // 例: トータルスコアを描画
        this.drawItemCount(result[0], this.count_banana_x, this.count_banana_y, this.count_banana_w, this.count_banana_h); // 例: バナナの個数を描画
        this.drawItemCount(result[1], this.count_apple_x, this.count_apple_y, this.count_apple_w, this.count_apple_h); // 例: リンゴの個数を描画
        this.drawItemCount(result[2], this.count_unti_x, this.count_unti_y, this.count_unti_w, this.count_unti_h); // 例: ウンチの個数を描画
      }, 4000);
    }, 2000);
  }
}

export default Over;
