import { Images, Sounds } from './index.js';
import { ROPE, SARU } from './index.js';
const IMAGES = new Images();
const SOUNDS = new Sounds();
const IMG = {
  numGet: IMAGES.num_get, // 0~9
};
class Effects {
  constructor(ctx){
    this.ctx = ctx;
    this.scorePopups = [];// 得点表示用の配列
  }
  reset(){
    this.scorePopups = [];
  }
    updateScorePopup(score) {
      const scoreStr = score.toString();
      const popup = {//アニメーションの設定
        x: SARU.x + 1, // 表示の横位置を調整
        y: SARU.y, // 開始位置
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
}

export default Effects;
