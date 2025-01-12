import { Sounds, GameState } from './index.js'

class Banana extends Obj {
  constructor() {
    super("banana");
    this.bnnEf = document.getElementById('bnn-ef');// バナナ獲得時のポイント演出用要素
  }
  update() {
    if (this.checkHit()) {
      this.getBanana();
    }
  }
  getBanana() {
    GameState.updateBanana();
    switch (saru_x) {
      case 0: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef1');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef1');
        }, 800);
        break;
      case 1: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef2');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef2');
        }, 800);
        break;
      case 2: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef3');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef3');
        }, 800);
        break;
      case 3: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef4');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef4');
        }, 800);
        break;
      case 4: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef5');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef5');
        }, 800);
        break;
      case 5: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef6');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef6');
        }, 800);
        break;
      case 6: this.bnnEf.classList.remove('none'); this.bnnEf.classList.add('bnn-ef7');
        setTimeout(function () {
          this.bnnEf.classList.remove('bnn-ef7');
        }, 800);
        break;
    }
    setTimeout(function () {
      this.bnnEf.classList.add('none');
    }, 500);
    Sounds.setBanana();

  }
}

export default Banana;