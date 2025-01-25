import { Images } from './index.js';
import { CONFIG } from './index.js';

const IMAGES = new Images();
const IMG = {
  icon: IMAGES.icons, // 0:普通, 1:叫び, 2:ダウン, 3:appleTime
  life: IMAGES.lifes, // ライフ0~5
  numNow: IMAGES.num_now, // バナナ数の数値0~9
  numMax: IMAGES.num_max, // クリア目標数の数値0~9
  numScore: IMAGES.num_score, // スコア数値0~9
  scoreTitle: IMAGES.score_title, // 「SCORE:」
  countPanel: IMAGES.count_panel // バナナ数と目標数が載る背景パネル
};

class HeaderUI {
  constructor(ctx) {
    this.ctx = ctx;
    // ヘッダー
    this.x = 0;
    this.y = 0;
    this.w = CONFIG.SCREEN_W;
    this.h = 235;
    this.radius = 20;
    this.bgc = "#F1EC7E";
    // ヘッダーのシャドウ
    this.shadow_color = "#F7CA48";
    this.shadow_offset_y = 23;
    // icon
    this.icon_X = 71;
    this.icon_y = 50;
    this.icon_w = 188;
    this.icon_h = 141;
    // score title
    this.scoreTitle_w = 210;
    this.scoreTitle_h = 46 / 2 + 1;
    this.scoreTitle_X = 319;
    this.scoreTitle_y = 42 + this.scoreTitle_h / 2;
    // num score
    this.numScore_w = 37;
    this.numScore_h = 42;
    this.numScore_X = 536;
    this.numScore_y = 45;
    // life
    this.life_X = 319;
    this.life_y = 120;
    this.life_w = 405;
    this.life_h = 71;
    // countPanel
    this.countPanel_X = 771;
    this.countPanel_y = 21;
    this.countPanel_w = 279;
    this.countPanel_h = 193;
    // num now
    this.numNow_X = 819;
    this.numNow_y = 63;
    this.numNow_w = 59;
    this.numNow_h = 85;
    // num max
    this.numMax_X = 944;
    this.numMax_y = 157;
    this.numMax_w = 29;
    this.numMax_h = 41;
  }

  init(iconIndex, newLife, newScore, countBananas, maxBananas) {
    this.drawAll(iconIndex, newLife, newScore, countBananas, maxBananas);
  }

  drawAll(iconIndex, newLife, newScore, countBananas, maxBananas) {
    this.drawBG();
    this.drawBoard();
    this.drawScoreTitle();
    this.drawIcon(iconIndex);
    this.drawLife(newLife);
    this.drawScore(newScore);
    this.drawBananas(countBananas);
    this.drawMaxBananas(maxBananas);
  }

drawBG() {
    // ヘッダーのシャドウを描画
    this.ctx.fillStyle = this.shadow_color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.h - this.shadow_offset_y);
    this.ctx.lineTo(this.x + this.w, this.y + this.h - this.shadow_offset_y);
    this.ctx.arcTo(this.x + this.w, this.y + this.h + this.shadow_offset_y, this.x + this.w - this.radius, this.y + this.h + this.shadow_offset_y, this.radius);
    this.ctx.arcTo(this.x, this.y + this.h + this.shadow_offset_y, this.x, this.y + this.h, this.radius);
    this.ctx.closePath();
    this.ctx.fill();
    // ヘッダーの背景
    this.ctx.fillStyle = this.bgc;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.w, this.y);
    this.ctx.lineTo(this.x + this.w, this.y + this.h - this.radius);
    this.ctx.arcTo(this.x + this.w, this.y + this.h, this.x + this.w - this.radius, this.y + this.h, this.radius);
    this.ctx.lineTo(this.x + this.radius, this.y + this.h);
    this.ctx.arcTo(this.x, this.y + this.h, this.x, this.y + this.h - this.radius, this.radius);
    this.ctx.closePath();
    this.ctx.fill();
}



  drawIcon(iconIndex) {
    this.ctx.drawImage(IMG.icon[iconIndex], this.icon_X, this.icon_y, this.icon_w, this.icon_h);
  }

  drawLife(newLife) {
    this.ctx.drawImage(IMG.life[newLife], this.life_X, this.life_y, this.life_w, this.life_h);
  }

  drawScore(newScore) {
    const scoreStr = String(newScore).padStart(5, '0'); // 0埋め、5桁表示
    for (let i = 0; i < scoreStr.length; i++) {
      const num = parseInt(scoreStr[i], 10);
      this.ctx.drawImage(IMG.numScore[num], this.numScore_X + i * this.numScore_w, this.numScore_y, this.numScore_w, this.numScore_h);
    }
  }

  drawBananas(countBananas) {
    const currentStr = String(countBananas).padStart(2, '0'); // 0埋め、2桁表示
    for (let i = 0; i < currentStr.length; i++) {
      const num = parseInt(currentStr[i], 10);
      this.ctx.drawImage(IMG.numNow[num], this.numNow_X + i * this.numNow_w, this.numNow_y, this.numNow_w, this.numNow_h);
    }
  }

  drawMaxBananas(maxBananas) {
    const maxStr = String(maxBananas).padStart(2, '0'); // 0埋め、2桁表示
    for (let i = 0; i < maxStr.length; i++) {
      const num = parseInt(maxStr[i], 10);
      this.ctx.drawImage(IMG.numMax[num], this.numMax_X + i * this.numMax_w, this.numMax_y, this.numMax_w, this.numMax_h);
    }
  }

  drawScoreTitle() {
    this.ctx.drawImage(IMG.scoreTitle, this.scoreTitle_X, this.scoreTitle_y, this.scoreTitle_w, this.scoreTitle_h);
  }

  drawBoard() {
    this.ctx.drawImage(IMG.countPanel, this.countPanel_X, this.countPanel_y, this.countPanel_w, this.countPanel_h);
  }
}

export default HeaderUI;
