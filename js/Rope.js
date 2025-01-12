import { Config } from './index.js';

class Rope {
  constructor(){
    this.w = Config.SCREEN_W;
    this.h = Config.SCREEN_H / 50;
    this.reset();
  }
  reset(){
    this.x = 0;
    this.y = Config.SCREEN_H / 2 - Config.BLOCK_H * 2;
  }
}

export default Rope;