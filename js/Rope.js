import { Images, Config } from './index.js';
// import { CONFIG } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;

class Rope {
  constructor(){
    this.w = CONFIG.SCREEN_W;
    this.h = CONFIG.SCREEN_H / 100;
    this.reset();
  }
  reset(){
    this.x = 0;
    this.y = CONFIG.SCREEN_H / 2 - CONFIG.BLOCK_H * 2;
  }
  draw(ctx){
    ctx.drawImage(IMAGES.rope,this.x,this.y,this.w,this.h);
  }
  // toOver();
}

export default Rope;