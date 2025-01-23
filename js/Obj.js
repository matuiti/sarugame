
import { Images, Config } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;

const BLOCK_W = CONFIG.BLOCK_W;
const BLOCK_H = CONFIG.BLOCK_H;
const FIELD_ROW = CONFIG.FIELD_ROW;
const ITEMS = IMAGES.items; // [ 0 ]:バナナ, [ 1 ]:リンゴ, [ 2 ]:うんち
class Obj {//オブジェクトの雛形クラス
  constructor(type) {
    this.type = type; // 0:バナナ,1:リンゴ,2:うんち
    this.image = ITEMS[this.type];// [ 0 ]:バナナ, [ 1 ]:リンゴ, [ 2 ]:うんち
    this.x = this.rand(0, 9);//pop位置xはランダム値
    this.y = 3;//pop位置y
    this.vy = 1; // 移動距離
    this.erase = false; // 削除フラグ
    this.moveIntervalId = null;
  }

  startAutoMove(interval) {//interval毎にオブジェクトを移動
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

  draw(ctx) {
    ctx.drawImage(this.image, this.x * BLOCK_W, this.y * BLOCK_H, BLOCK_W, BLOCK_H);
  }

  move() {
    if (this.y >= FIELD_ROW) {
      this.erase = true;//画面下を出たら削除
      return;
    }
    this.y += this.vy;
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

class Banana extends Obj {
  constructor() {
    super(0);
  }
  draw(ctx) {
    super.draw(ctx);
  }
}

class Apple extends Obj {
  constructor() {
    super(1);
  }
  draw(ctx) {
    super.draw(ctx);
  }
}

class Unti extends Obj {
  constructor() {
    super(2);
  }
  draw(ctx) {
    super.draw(ctx);
  }
}

export { Obj, Banana, Apple, Unti };