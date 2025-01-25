import { Images } from './index.js';
import { SARU } from './index.js';

const IMAGES = new Images();
const IMG = {
  numGet: IMAGES.num_get, // 加点時の頭上ポップアップ数値画像0~9
  appleTime: IMAGES.appleTime //appleTime時の頭上ポップアップ画像
};

class Effects {
  constructor(ctx) {
    this.ctx = ctx;
    this.scorePopups = [];// 得点表示用の配列
    this.appleTimePopups = [];// appleTimeポップアップ用配列
  }

  reset() {
    this.scorePopups = [];
    this.appleTimePopups = [];
  }

  updateScorePopup(score) {
    const scoreStr = score.toString();
    const popup = {//設定
      x: SARU.x + 1.5, // 表示の横位置を調整
      y: SARU.y, // 開始位置
      targetY: SARU.y - 1.28, // 最終到達点
      scoreStr,
      opacity: 1,
      initialYSpeed: 0.2, // 最初の上昇速度
      finalYSpeed: 0.001, // 最後の上昇速度
      fadeOutSpeed: 0.08, // フェードアウト速度
      totalDistance: Math.abs(SARU.y - (SARU.y - 1.4)), // 総移動距離
      displayDuration: 300, // 表示時間（ms）
      fadeOutDuration: 100, // フェードアウト時間（ms）
      distanceCovered: 0 // 進んだ距離
    };
    this.scorePopups.push(popup);

    // アニメーションで位置を更新しながらフェードアウト
    const startFadeOut = Date.now() + popup.displayDuration;
    const animationInterval = setInterval(() => {
      if (Date.now() < startFadeOut) {
        if (popup.y > popup.targetY) {
          if (popup.distanceCovered < popup.totalDistance / 2) {
            popup.y -= popup.initialYSpeed; // 登り前半の速度
            popup.distanceCovered += popup.initialYSpeed;
          } else {
            popup.y -= popup.finalYSpeed; // 登り後半の速度
            popup.distanceCovered += popup.finalYSpeed;
          }
        }
      } else {
        popup.opacity -= popup.fadeOutSpeed; // フェードアウト
        if (popup.opacity <= 0 || popup.y <= popup.targetY) {
          clearInterval(animationInterval);
          this.scorePopups = this.scorePopups.filter(p => p !== popup);
        }
      }
    }, 50);
  }

  drawScorePopups() {
    this.ctx.save();
    this.scorePopups.forEach(popup => {
      this.ctx.globalAlpha = popup.opacity;
      let offsetX = 0;
      popup.scoreStr.split('').forEach(num => {
        this.ctx.drawImage(IMG.numGet[num], popup.x * SARU.BLOCK_W + offsetX, popup.y * SARU.BLOCK_H, 79, 94);
        offsetX += 100;
      });
    });
    this.ctx.restore();
  }

  updateAppleTimePopup() {
    const popup = {
      x: SARU.x, // 表示の横位置を調整
      y: SARU.y, // 開始位置
      targetY: SARU.y - 1.4, // 最終到達点
      opacity: 1,
      initialYSpeed: 0.2, // 最初の上昇速度
      finalYSpeed: 0.001, // 最後の上昇速度
      fadeOutSpeed: 0.04, // フェードアウト速度
      displayDuration: 300, // 表示時間（ms）
      fadeOutDuration: 100, // フェードアウト時間（ms）
      distanceCovered: 0 // 進んだ距離
    };
    this.appleTimePopups.push(popup);

    // アニメーションで位置を更新しながらフェードアウト
    const startFadeOut = Date.now() + popup.displayDuration;

    const animationInterval = setInterval(() => {
      if (Date.now() < startFadeOut) {
        if (popup.y > popup.targetY) {
          popup.y -= popup.initialYSpeed; // 上昇
        }
      } else {
        popup.opacity -= popup.fadeOutSpeed; // フェードアウト
        if (popup.opacity <= 0 || popup.y <= popup.targetY) {
          clearInterval(animationInterval);
          this.appleTimePopups = this.appleTimePopups.filter(p => p !== popup);
        }
      }
    }, 50);
  }

  drawAppleTimePopups() {
    this.ctx.save();
    this.appleTimePopups.forEach(popup => {
      this.ctx.globalAlpha = popup.opacity;
      this.ctx.drawImage(IMG.appleTime, popup.x * SARU.BLOCK_W, popup.y * SARU.BLOCK_H, 416, 79);
    });
    this.ctx.restore();
  }
}

export default Effects;
