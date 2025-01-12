
import { Config } from './index.js';

class Obj {
  constructor( type ) {
    this.blockW   = Config.BLOCK_W;
    this.blockH   = Config.BLOCK_H;
    this.fieldRow = Config.FIELD_ROW;
    this.type = type;         /*種類を設定*/
    this.x = this.rand(0, 9); /*初期座標x*/
    this.y = 0;               /*初期座標y*/
    this.vy = 1;              /*移動距離*/
    this.erase = false;
  }

  update() {
    if (over) return;
    if (this.checkMove()) this.erase = true; /*画面外は削除*/
    this.move();
  }

  draw() {
    // 描画処理をここに記述
  }

  /*画面下を超えたら削除*/
  checkMove() {
    return this.y >= this.fieldRow;
  }

  move() {
    this.y += this.vy;
  }

  

  /*min~maxの乱数獲得関数*/
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Obj;

