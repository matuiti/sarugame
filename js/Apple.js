import { Sounds, Obj } from './index.js';
import { GAME_STATE, SARU } from './index.js';

class Apple extends Obj {
  constructor() {
    super("apple");
  }
  getApple(){
    GAME_STATE.addApple();//スコア加算
    SARU.setAppleTime(1);//アップルタイム起動
  }

  draw(ctx) {
    super.draw(ctx);
  }

}

export default Apple;