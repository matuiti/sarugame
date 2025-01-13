import { Sounds, GameState, Obj } from './index.js'

class Apple extends Obj {
  constructor() {
    super("apple");
    this.appleTime = false;
  }
  draw(ctx) {
    super.draw(ctx);
  }

  isAppleTime(){return this.appleTime;}
  setAppleTime( appleTime ){return this.appleTime = appleTime;}//アップルタイムを活性化or非活性化
}

export default Apple;