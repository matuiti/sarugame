import { Images, Sounds } from './index.js';
import { CONFIG, GAME_STATE } from './index.js';
const IMAGES = new Images;
const SOUNDS = new Sounds;
const IMG = {
  numResult: IMAGES.num_result // 0~9の数字画像
}
const CLEAR_ELMS = {
  clearPanel: document.getElementById('clear-panel')
}
class Clear {
  constructor() {
    this.cCanvas = document.getElementById('clear-canvas');
    this.cCtx = this.cCanvas.getContext('2d');
    this.cCanvas.width = CONFIG.SCREEN_W;
    this.cCanvas.height = CONFIG.SCREEN_H;
    this.cCtx.imageSmoothingEnabled = true;
    this.cCtx.imageSmoothingQuality = 'high';
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
    this.cCtx.clearRect(0, 0, this.cCanvas.width, this.cCanvas.height); // 画面のクリア
    CLEAR_ELMS.clearPanel.style.display = "none";
  }

  drawNumber(ctx, num, x, y, w, h, digitCount, startX) {
    const numStr = num.toString().padStart(digitCount, '0'); // 指定桁数になるように0で埋める

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr.charAt(i));
      ctx.drawImage(IMG.numResult[digit], startX - (numStr.length - 1 - i) * w, y, w, h); // 右寄せ表示
    }
  }

  drawScore(score) {
    this.drawNumber(this.cCtx, score, this.score_x, this.score_y, this.score_w, this.score_h, 5, this.score_startX); // 5桁
  }

  drawItemCount(count, x, y, w, h) {
    this.drawNumber(this.cCtx, count, x, y, w, h, 2, this.score_item_startX); // 2桁
  }

  startClear() {
    SOUNDS.se('win');
    const result = GAME_STATE.getResult();
    setTimeout(() => {
      CLEAR_ELMS.clearPanel.style.display = "block";
      SOUNDS.se('se_bgm');
      this.drawScore(result[3]);
      this.drawItemCount(result[0], this.count_banana_x, this.count_banana_y, this.count_banana_w, this.count_banana_h);
      this.drawItemCount(result[1], this.count_apple_x, this.count_apple_y, this.count_apple_w, this.count_apple_h);
      this.drawItemCount(result[2], this.count_unti_x, this.count_unti_y, this.count_unti_w, this.count_unti_h);
    }, 3000);
  }
}

export default Clear;
