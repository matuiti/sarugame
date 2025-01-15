import { Images, Config } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;

class Rope {
  constructor() {
    this.w = CONFIG.SCREEN_W;
    this.h = CONFIG.SCREEN_H / 100;
    this.reset();
  }
  reset() {
    this.x = 0;
    this.y = 8;
  }
  draw(ctx) {
    ctx.drawImage(IMAGES.rope, this.x, this.y * CONFIG.BLOCK_H + this.h, this.w, this.h);
  }
  // toOver();
}

export default Rope;