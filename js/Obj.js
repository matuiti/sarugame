class Obj {
  constructor(BLOCK_W,BLOCK_H,SCREEN_H) {
    this.BLOCK_W  = BLOCK_W;
    this.BLOCK_H  = BLOCK_H;
    this.SCREEN_H = SCREEN_H;
    
    this.t; /*種類*/
    this.x = (this.rand(0, 10) - 1) * this.BLOCK_W;
    this.y = 0;
    this.vy = this.BLOCK_H;/*移動距離*/
    this.w = this.BLOCK_W;
    this.h = this.BLOCK_H;
    this.erase = false;
  }


  
  update() {
    if (over) { return; }
    if (this.y >= this.SCREEN_H) {
      this.erase = true;/*画面外は削除*/
      return;
    }
  }

  draw() {

  }

  moveObj() {
    this.y += this.vy;
  }

  checkHit() {
    if (
      ((this.y >= 627 && this.y <= 1248) &&
        (((this.x === 0 || this.x === 108 || this.x === 324) && saru_x === 0) ||
          ((this.x === 648 || this.x === 864 || this.x === 972) && saru_x === 648) ||
          ((this.x === 108 || this.x === 432) && saru_x === 108) ||
          ((this.x === 540 || this.x === 864) && saru_x === 540) ||
          ((this.x === 324 || this.x === 648) && saru_x === 324) ||
          ((this.x === 216 || this.x === 432 || this.x === 540) && (saru_x === 216 && dir_r)) ||
          ((this.x === 432 || this.x === 648 || this.x === 756) && (saru_x === 432 && dir_r)) ||
          ((this.x === 216 || this.x === 324 || this.x === 540) && (saru_x === 216 && !dir_r)) ||
          ((this.x === 432 || this.x === 540 || this.x === 756) && (saru_x === 432 && !dir_r))))
      ||
      ((this.y >= 960 && this.y <= 1248) &&
        ((this.x >= 0 && this.x <= 324 && saru_x === 0) ||
          (this.x >= 108 && this.x <= 432 && saru_x === 108) ||
          (this.x >= 216 && this.x <= 540 && saru_x === 216) ||
          (this.x >= 324 && this.x <= 648 && saru_x === 324) ||
          (this.x >= 432 && this.x <= 756 && saru_x === 432) ||
          (this.x >= 540 && this.x <= 864 && saru_x === 540) ||
          (this.x >= 648 && this.x <= 972 && saru_x === 648) ||
          (this.x >= 756 && this.x <= 1080 && saru_x === 756)))
    ) {
      this.erase = true;
      return true;
    }
  }

  /*min~maxの乱数獲得関数*/
  rand(min, max) { return Math.floor(Math.random() * ((max + 1) - min) + min) }

}

export default Obj;
