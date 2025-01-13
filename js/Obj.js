import { Images, Config } from './index.js';
const IMAGES = new Images();
const CONFIG = new Config();

class Obj {
  constructor(type) {
    this.blockW = CONFIG.BLOCK_W;
    this.blockH = CONFIG.BLOCK_H;
    this.fieldRow = CONFIG.FIELD_ROW;
    this.fallingSpeed = CONFIG.FALLING_SPEED;

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

  update() { }

  draw(ctx) {
    if (this.image && this.image.complete) {
      console.log(`Drawing ${this.type} at (${this.x * this.blockW}, ${this.y * this.blockH})`);
      ctx.drawImage(this.image, this.x * this.blockW, this.y * this.blockH, this.blockW, this.blockH);
    } else if (this.image) {
      this.image.onload = () => {
        console.log(`Loading ${this.type} image`);
        ctx.drawImage(this.image, this.x * this.blockW, this.y * this.blockH, this.blockW, this.blockH);
      };
    }
  }


  move() {
    if (this.y >= this.fieldRow) {
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
