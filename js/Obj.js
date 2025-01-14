import { Images, Config } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;
const BLOCK_W = CONFIG.BLOCK_W;
const BLOCK_H = CONFIG.BLOCK_H;
const FIELD_ROW = CONFIG.FIELD_ROW;
class Obj {
  constructor(type) {
    this.type = type; // 種類を設定
    this.image = this.getImage(type); // 画像を設定
    this.x = this.rand(0, 9); // 初期座標x
    this.y = 0; // 初期座標y
    this.vy = 1; // 移動距離
    this.erase = false; // 削除フラグ
    this.moveIntervalId = null;
  }

  getImage(type) {
    switch (type) {
      case "banana":
        return IMAGES.banana;
      case "apple":
        return IMAGES.apple;
      case "unti":
        return IMAGES.unti;
      default:
        return null;
    }
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
    if (this.image && this.image.complete) {
      ctx.drawImage(this.image, this.x * BLOCK_W, this.y * BLOCK_H, BLOCK_W, BLOCK_H);
    } else if (this.image) {
      this.image.onload = () => {
        ctx.drawImage(this.image, this.x * BLOCK_W, this.y * BLOCK_H, BLOCK_W, BLOCK_H);
      };
    }
  }

  move() {
    if (this.y >= FIELD_ROW) {
      this.erase = true;
      return;
    }
    this.y += this.vy;
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Obj;
