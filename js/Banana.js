import { Sounds, Obj } from './index.js';
import { GAME_STATE, SARU } from './index.js';

// const bnnEf = document.getElementById('bnn-ef');// バナナ獲得時のポイント演出用要素

class Banana extends Obj {
  constructor() {
    super("banana");
  }
  // getBanana() {
  //   GAME_STATE.addBanana();
  //   switch (SARU.x) {
  //     case 0: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef1');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef1');
  //       }, 800);
  //       break;
  //     case 1: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef2');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef2');
  //       }, 800);
  //       break;
  //     case 2: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef3');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef3');
  //       }, 800);
  //       break;
  //     case 3: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef4');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef4');
  //       }, 800);
  //       break;
  //     case 4: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef5');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef5');
  //       }, 800);
  //       break;
  //     case 5: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef6');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef6');
  //       }, 800);
  //       break;
  //     case 6: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef7');
  //       setTimeout(function () {
  //         bnnEf.classList.remove('bnn-ef7');
  //       }, 800);
  //       break;
  //   }
  //   setTimeout(function () {
  //     bnnEf.classList.add('none');
  //   }, 500);
  //   Sounds.setBanana();
  // }

  draw(ctx){
    super.draw(ctx);
  }

}

export default Banana;