class ObjManager {
  constructor() {
    this.objects = [];
    this.objTypes = ["Banana", "Apple", "Unti"];     /* ドロップオブジェクトのクラス */
    this.probabilities = [0.1, 0.3, 0.6];       /* objTypesそれぞれの出現確率 */
  }

  addObject() {
    const objClass = this.getRandomClass();
    const newObj = new objClass();
    this.objects.push(newObj);
  }

  getRandomClass() {
    let sum = 0;
    let r = Math.random();
    for (let i = 0; i < this.probabilities.length; i++) {
      sum += this.probabilities[i];
      if (r <= sum) {
        return this.objTypes[i];
      }
    }
  }

  updateObjects() {
    this.objects = this.objects.filter(obj => !obj.erase);
    this.objects.forEach(obj => obj.update());
  }

  drawObjects() {
    this.objects.forEach(obj => obj.draw());
  }

  moveObjects() {
    this.objects.forEach(obj => obj.move());
  }

  reset(){
    this.objects.splice(0);/*配列をクリア*/

  }
}

export default ObjManager;