import { Sounds, GameState, Obj } from './index.js'
import SARU from './Saru.js';

class Apple extends Obj {
  constructor() {
    super("apple");
  }
  getApple(){
    GameState.addApple();//スコア加算
    SARU.setAppleTime(1);//アップルタイム起動
  }

  draw(ctx) {
    super.draw(ctx);
  }

}

export default Apple;