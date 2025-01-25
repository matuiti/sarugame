
import { Images } from './index.js';
import { CONFIG } from './index.js';
const IMAGES = new Images;
const ITEMS = IMAGES.items; // 0:バナナ,1:リンゴ,2:うんち
class Obj {
  constructor(type) {
    this.type = type; // 0:バナナ,1:リンゴ,2:うんち
    this.image = ITEMS[this.type];
    this.x = this.rand(0, 9);
    this.y = 3;
    this.vy = 1; // 移動距離
    this.erase = false; // 削除フラグ
    this.moveIntervalId = null;
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

  draw(ctx) {
    ctx.drawImage(this.image, this.x * CONFIG.BLOCK_W, this.y * CONFIG.BLOCK_H, CONFIG.BLOCK_W, CONFIG.BLOCK_H);
  }

  move() {
    if (this.y >= CONFIG.FIELD_ROW) {
      this.erase = true;
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