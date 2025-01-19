class Images {
  constructor() {
    //ヘッダー
    this.icons = this.loadImages('icon',4);
    this.lifes = this.loadImages('life',6);
    this.num_now = this.loadImages('num_now',10);
    this.num_max = this.loadImages('num_max',10);
    this.num_score = this.loadImages('num_score',10);
    this.score_title = this.loadImage("images/score_title@2x.png");
    this.count_panel = this.loadImage("images/count_panel@2x.png");
    //ロープ
    this.rope = this.loadImage("images/rope@2x.png");
    // サル（右向き）
    this.saru_open = this.loadImage("images/saru_01@2x.png");
    this.saru_open_s = this.loadImage("images/saru_01_shout@2x.png");
    this.saru_open_d = this.loadImage("images/saru_01_down@2x.png");
    this.saru_open_apple = this.loadImage("images/saru_01_apple@2x.png");
    this.saru_close = this.loadImage("images/saru_02@2x.png");
    this.saru_close_s = this.loadImage("images/saru_02_shout@2x.png");
    this.saru_close_d = this.loadImage("images/saru_02_down@2x.png");
    this.saru_close_apple = this.loadImage("images/saru_02_apple@2x.png");
    // サル（左向き）
    this.saru_open_l = this.loadImage("images/saru_01_l@2x.png");
    this.saru_open_s_l = this.loadImage("images/saru_01_shout_l@2x.png");
    this.saru_open_d_l = this.loadImage("images/saru_01_down_l@2x.png");
    this.saru_open_apple_l = this.loadImage("images/saru_01_apple_l@2x.png");
    this.saru_close_l = this.loadImage("images/saru_02_l@2x.png");
    this.saru_close_s_l = this.loadImage("images/saru_02_shout_l@2x.png");
    this.saru_close_d_l = this.loadImage("images/saru_02_down_l@2x.png");
    this.saru_close_apple_l = this.loadImage("images/saru_02_apple_l@2x.png");

    // オブジェクト
    this.banana = this.loadImage("images/item_banana@2x.png");
    this.apple = this.loadImage("images/item_apple@2x.png");
    this.unti = this.loadImage("images/item_unti@2x.png");

    // さるガール
    // this.saru_girl = this.loadImage("images/saru_girl@2x.png");
    // this.saru_girl_l = this.loadImage("images/saru_girl_l@2x.png");
    // this.saru_girl_gif = this.loadImage("images/saru_girl.gif");
  }

  loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }
  loadImages(baseName, count) {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(this.loadImage(`images/${baseName}_${i}@2x.png`));
    }
    return images;
  }
}

export default Images;