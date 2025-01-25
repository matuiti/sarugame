import { Banana, Apple, Unti } from './index.js';
import { CONFIG } from './index.js';

class ObjManager {
  constructor(ctx) {// index.jsでnewされて、ctxを受け取る
    this.ctx = ctx;
    this.objects = [];
    this.objTypes = [Banana, Apple, Unti]; // ドロップオブジェクトのクラス
    this.probabilities = CONFIG.PROBABILITIES; // banana,apple,untiの出現率
    this.intervalId = null;
  }

  reset() {//配列を空に
    this.objects.splice(0);
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
    const objClass = this.getRandomObjType();
    const newObj = new objClass();
    this.objects.push(newObj);
    newObj.startAutoMove(CONFIG.FALLING_INTERVAL); // オブジェクトの自動移動開始
  }

  getRandomClass() {// return Banana || Apple || Unti
    let sum = 0;
    let r = Math.random();
    for (let i = 0; i < CONFIG.PROBABILITIES.length; i++) {
      sum += CONFIG.PROBABILITIES[i];
      if (r <= sum) {
        return this.objTypes[i];
      }
    }
  }

  getCurrentObjects() {
    return this.objects;
  }

  updateAllObjects() {//objects[]を、削除フラグがtrueのものを除き更新
    this.objects = this.objects.filter(obj => !obj.erase);
  }

  drawAllObjects() {
    this.objects.forEach(obj => {
      obj.draw(this.ctx);
    });
  }
}

export default ObjManager;


