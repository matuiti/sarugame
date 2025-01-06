class Obj {
  constructor(t) {
    this.t = t; /*種類*/
    this.x = (rand(0, 10) - 1) * BLOCK_W;
    this.y = 0;
    this.vy = BLOCK_H;/*移動距離*/
    this.w = BLOCK_W;
    this.h = BLOCK_H;
    this.erase = false;
  }
  update() {
    if (over) { return; }
    if (this.y >= SCREEN_H) {
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
}