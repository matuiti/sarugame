import { Images, Sounds, Config } from './index.js';
import { GAME_STATE } from './index.js';
const IMAGES = new Images;
const SOUNDS = new Sounds;
const CONFIG = new Config;

const oCanvas = document.getElementById('over-canvas');
const oCtx = oCanvas.getContext('2d');
oCanvas.width = CONFIG.SCREEN_W;
oCanvas.height = CONFIG.SCREEN_H;
oCtx.imageSmoothingEnabled = true;
oCtx.imageSmoothingQuality = 'high';

const IMG = {
  numResult: IMAGES.num_result // 結果画面用の数字画像0~9
}
const OVER_ELMS = {
  overSaru: document.getElementById('over-saru'),//サルのimg要素
  overPanel: document.getElementById('over-panel')//リザルト用のパネル要素
}
class Over {
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
    oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height); // 画面のクリア
    OVER_ELMS.overPanel.style.display = "none";
    OVER_ELMS.overSaru.src = 'images/over_saru@2x.png';
  }

  drawNumber(ctx, num, x, y, w, h, digitCount, startX) {
    const numStr = num.toString().padStart(digitCount, '0'); // 指定桁数になるように0で埋める

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr.charAt(i));
      ctx.drawImage(IMG.numResult[digit], startX - (numStr.length - 1 - i) * w, y, w, h); // 右寄せ表示
    }
  }

  drawScore(score) {
    this.drawNumber(oCtx, score, this.score_x, this.score_y, this.score_w, this.score_h, 5, this.score_startX); // 5桁
  }

  drawItemCount(count, x, y, w, h) {
    this.drawNumber(oCtx, count, x, y, w, h, 2, this.score_item_startX); // 2桁
  }

  startOver() {
    const result = GAME_STATE.getResult();
    setTimeout(() => {
      SOUNDS.se('standup');
      OVER_ELMS.overSaru.src = 'images/over_saru.gif';
      setTimeout(() => {
        OVER_ELMS.overPanel.style.display = "block";
        SOUNDS.se('se_bgm');
        this.drawScore(result[3]);
        this.drawItemCount(result[0], this.count_banana_x, this.count_banana_y, this.count_banana_w, this.count_banana_h);
        this.drawItemCount(result[1], this.count_apple_x, this.count_apple_y, this.count_apple_w, this.count_apple_h);
        this.drawItemCount(result[2], this.count_unti_x, this.count_unti_y, this.count_unti_w, this.count_unti_h);
      }, 4000);
    }, 3000);
  }
}

export default Over;
