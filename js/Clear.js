import { Images, Sounds, Config } from './index.js';
import { GAME_STATE } from './index.js';
const IMAGES = new Images;
const SOUNDS = new Sounds;
const CONFIG = new Config;

const cCanvas = document.getElementById('clear-canvas');
const cCtx = cCanvas.getContext('2d');
cCanvas.width = CONFIG.SCREEN_W;
cCanvas.height = CONFIG.SCREEN_H;
cCtx.imageSmoothingEnabled = true;
cCtx.imageSmoothingQuality = 'high';

const IMG = {
  numResult: IMAGES.num_result // 0~9の数字画像
}
const CLEAR_ELMS = {
  clearPanel: document.getElementById('clear-panel')
}
class Clear {
  constructor() {
    this.score_x = 246;
    this.score_y = 459;
    this.score_w = 114;//124
    this.score_h = 140;//155
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

    this.score_startX = 711; // 1桁目の左上x
    this.score_item_startX = 666 + 30; // 1桁目の左上x + a
  }

  reset() {
    cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height); // 画面のクリア
    CLEAR_ELMS.clearPanel.style.opacity = "0";
  }

  drawNumber(ctx, num, x, y, w, h, digitCount, startX) {
    const numStr = num.toString().padStart(digitCount, '0'); // 指定桁数になるように0で埋める

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr.charAt(i));
      ctx.drawImage(IMG.numResult[digit], startX - (numStr.length - 1 - i) * w, y, w, h); // 右寄せ表示
    }
  }

  drawScore(score) {
    this.drawNumber(cCtx, score, this.score_x, this.score_y, this.score_w, this.score_h, 5, this.score_startX); // 5桁
  }

  drawItemCount(count, x, y, w, h) {
    this.drawNumber(cCtx, count, x, y, w, h, 2, this.score_item_startX); // 2桁
  }

  startClear() {
    SOUNDS.se('win');
    const result = GAME_STATE.getResult();
    setTimeout(() => {
      CLEAR_ELMS.clearPanel.style.opacity = "1";
      SOUNDS.se('se_bgm');
      this.drawScore(result[3]);
      this.drawItemCount(result[0], this.count_banana_x, this.count_banana_y, this.count_banana_w, this.count_banana_h); // 例: バナナの個数を描画
      this.drawItemCount(result[1], this.count_apple_x, this.count_apple_y, this.count_apple_w, this.count_apple_h); // 例: リンゴの個数を描画
      this.drawItemCount(result[2], this.count_unti_x, this.count_unti_y, this.count_unti_w, this.count_unti_h); // 例: ウンチの個数を描画
    }, 3000);
  }
}

export default Clear;
