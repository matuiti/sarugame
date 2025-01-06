class Banana extends Obj {
  constructor(){
    this.t = "banana";
  }

  update(){
    if (this.checkHit()) {
      this.getBanana();
    }
  }

  getBanana() {
    count_b++;
    switch (saru_x) {
      case 0: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef1');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef1');
        }, 800);
        break;
      case 108: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef2');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef2');
        }, 800);
        break;
      case 216: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef3');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef3');
        }, 800);
        break;
      case 324: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef4');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef4');
        }, 800);
        break;
      case 432: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef5');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef5');
        }, 800);
        break;
      case 540: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef6');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef6');
        }, 800);
        break;
      case 648: bnnEf.classList.remove('none'); bnnEf.classList.add('bnn-ef7');
        setTimeout(function () {
          bnnEf.classList.remove('bnn-ef7');
        }, 800);
        break;
    }
    setTimeout(function () {
      bnnEf.classList.add('none');
    }, 500);
    se_banana.currentTime = 0;
    se_banana.play();

    if (count_b === maxBanana) stageClear = true;
  }

}