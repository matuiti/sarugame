import { Obj } from './index.js';
class Apple extends Obj {
  constructor() {
    super("apple");
  }
  draw(ctx) {
    super.draw(ctx);
  }
}
export default Apple;