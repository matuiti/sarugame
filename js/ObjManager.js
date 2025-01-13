class ObjManager {
  constructor() {
    this.objects = [];
    this.objTypes = ["Banana", "Apple", "Unti"]; // ドロップオブジェクトのクラス
    this.probabilities = [0.7, 0.1, 0.2];        // banana, apple, unti の出現確率
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
    }
  }

  #addObject() {
    const objClass = this.#getRandomClass();
    const newObj = new objClass();
    this.objects.push(newObj);
  }

  #getRandomClass() {
    let sum = 0;
    let r = Math.random();
    for (let i = 0; i < this.probabilities.length; i++) {
      sum += this.probabilities[i];
      if (r <= sum) {
        return this.objTypes[i];
      }
    }
  }

  reset() {
    this.objects.splice(0); // 配列をクリア
  }
}

export default ObjManager;
