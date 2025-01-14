import { Sounds, GameState, Obj, Saru } from './index.js'

class Apple extends Obj {
  constructor() {
    super("apple");
  }
  getApple(){
    GameState.addApple();//スコア加算
    Saru.setAppleTime(1);//アップルタイム起動
  }

  draw(ctx) {
    super.draw(ctx);
  }

}

export default Apple;