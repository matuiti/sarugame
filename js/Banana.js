import { Obj } from './index.js';
class Banana extends Obj {
  constructor() {
    super("banana");
  }
  draw(ctx){
    super.draw(ctx);
  }
}
export default Banana;