
import { Config } from './index.js';

class Obj {
  constructor(type) {
    this.blockW = Config.BLOCK_W;
    this.blockH = Config.BLOCK_H;
    this.fieldRow = Config.FIELD_ROW;
    this.fallingSpeed = Config.FALLING_SPEED;

    this.type = type;         /*種類を設定*/
    this.x = this.rand(0, 9); /*初期座標x*/
    this.y = 0;               /*初期座標y*/
    this.vy = 1;              /*移動距離*/

    this.erase = false;/*削除フラグ*/
    this.moveIntervalId = null;

    this.startAutoMove(this.fallingSpeed);/*オブジェクトの移動を開始*/
  }

  startAutoMove(interval) {
    this.moveIntervalId = setInterval(() => {
      this.move();
    }, interval);
  }

  stopAutoMove() {
    if (this.moveIntervalId !== null) {
      clearInterval(this.moveIntervalId);
      this.moveIntervalId = null;
    }
  }

  update() {
  }

  draw(context) {
    context.drawImage(this.image, this.x * this.blockW, this.y * this.blockH, this.blockW, this.blockH);
  }

  move() {
    if (this.y >= this.fieldRow) {
      this.erase = true;// 画面下なら削除
      return;
    }
    this.y += this.vy;
  }



  /*min~maxの乱数獲得関数*/
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Obj;

