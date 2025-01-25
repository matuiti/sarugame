import { Images } from './index.js';
import { CONFIG } from './index.js';
const IMAGES = new Images();
class Rope {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = CONFIG.SCREEN_W;
    this.h = CONFIG.SCREEN_H / 100;
    this.reset();
  }
  reset() {
    this.x = 0;
    this.y = CONFIG.START_Y;
    this.isFalling = false;
  }
  draw() {
    this.ctx.drawImage(IMAGES.rope, this.x, this.y * CONFIG.BLOCK_H + this.h, this.w, this.h);
  }
  fall() { this.isFalling = true; }

  update() {
    if (this.isFalling && this.y < CONFIG.FIELD_ROW) {
      this.y += 1; // ロープが落ちる
    } else {
      this.isFalling = false;
    }
  }
}

export default Rope;
