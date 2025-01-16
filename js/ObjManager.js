import { Config, Banana, Apple, Unti } from './index.js';
const CONFIG = new Config;
class ObjManager {
  constructor() {
    this.objects = [];
    this.objTypes = [Banana, Apple, Unti]; // ドロップオブジェクトのクラス
    this.probabilities =CONFIG.PROBABILITIES; // banana,apple,untiの出現率
    this.intervalId = null;
  }

  startPop(interval) {
    this.intervalId = setInterval(() => {
      this.#addObject();
    }, interval);
  }

  stopPop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.reset();
    }
  }

  #addObject() {
    const objClass = this.#getRandomClass();
    const newObj = new objClass();
    this.objects.push(newObj);
    newObj.startAutoMove(CONFIG.FALLING_SPEED); // オブジェクトの自動移動開始
  }

  #getRandomClass() {//return Banana || Apple || Unti
    let sum = 0;
    let r = Math.random();
    for (let i = 0; i < this.probabilities.length; i++) {
      sum += this.probabilities[i];
      if (r <= sum) {
        return this.objTypes[i];
      }
    }
  }
  getCurrentObjects(){
    return this.objects;
  }

  reset() {//配列を空に
    this.objects.splice(0);
  }

  updateAllObjects() {//objects[]を削除フラグがfalseのものだけで作成更新
    this.objects = this.objects.filter(obj => !obj.erase);
  }

  drawAllObjects(ctx) {
    this.objects.forEach(obj => {
      obj.draw(ctx);
    });
  }
}

export default ObjManager;


