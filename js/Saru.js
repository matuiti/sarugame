import { Images, Config, Rope } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;
const ROPE = new Rope;
let animFrames = [IMAGES.saru_open_l, IMAGES.saru_close_l, IMAGES.saru_open, IMAGES.saru_close, IMAGES.saru_open_l,]

class Saru {
  constructor() {
    this.w = CONFIG.BLOCK_W * 4;
    this.h = CONFIG.BLOCK_H * 6;
    this.vx= CONFIG.BLOCK_W;
    this.reset();
  }
  reset() {//初期化
    this.saru_t = saruType[0][0];
    this.saru_x = CONFIG.SCREEN_W/2 - this.w/2;
    this.saru_y = ROPE.y - ROPE.h;
    this.dir_r = true;
    this.appleTime = false;
  }
  setAppleTime(appleTime) { this.appleTime = appleTime; } //アップルタイムの活性 or 非活性
  checkAppleTime() { return this.appleTime; } //アップルタイム中かどうか true or false
  // toOver(){}
}

export default Saru;