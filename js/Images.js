class Images {
  constructor() {
    //ヘッダー
    this.icon_0 = this.loadImage("images/icon_0@2x.png");
    this.icon_1 = this.loadImage("images/icon_1@2x.png");
    this.icon_2 = this.loadImage("images/icon_2@2x.png");
    this.icon_3 = this.loadImage("images/icon_3@2x.png");
    this.life_1 = this.loadImage("images/life_1@2x.png");
    this.life_2 = this.loadImage("images/life_2@2x.png");
    this.life_3 = this.loadImage("images/life_3@2x.png");
    this.life_4 = this.loadImage("images/life_4@2x.png");
    this.life_5 = this.loadImage("images/life_5@2x.png");
    this.num_now_0 = this.loadImage("images/num_now_0@2x.png");
    this.num_now_1 = this.loadImage("images/num_now_1@2x.png");
    this.num_now_2 = this.loadImage("images/num_now_2@2x.png");
    this.num_now_3 = this.loadImage("images/num_now_3@2x.png");
    this.num_now_4 = this.loadImage("images/num_now_4@2x.png");
    this.num_now_5 = this.loadImage("images/num_now_5@2x.png");
    this.num_now_6 = this.loadImage("images/num_now_6@2x.png");
    this.num_now_7 = this.loadImage("images/num_now_7@2x.png");
    this.num_now_8 = this.loadImage("images/num_now_8@2x.png");
    this.num_now_9 = this.loadImage("images/num_now_9@2x.png");
    this.num_max_0 = this.loadImage("images/num_max_0@2x.png");
    this.num_max_1 = this.loadImage("images/num_max_1@2x.png");
    this.num_max_2 = this.loadImage("images/num_max_2@2x.png");
    this.num_max_3 = this.loadImage("images/num_max_3@2x.png");
    this.num_max_4 = this.loadImage("images/num_max_4@2x.png");
    this.num_max_5 = this.loadImage("images/num_max_5@2x.png");
    this.num_max_6 = this.loadImage("images/num_max_6@2x.png");
    this.num_max_7 = this.loadImage("images/num_max_7@2x.png");
    this.num_max_8 = this.loadImage("images/num_max_8@2x.png");
    this.num_max_9 = this.loadImage("images/num_max_9@2x.png");
    this.num_score_0 = this.loadImage("images/num_score_0@2x.png");
    this.num_score_1 = this.loadImage("images/num_score_1@2x.png");
    this.num_score_2 = this.loadImage("images/num_score_2@2x.png");
    this.num_score_3 = this.loadImage("images/num_score_3@2x.png");
    this.num_score_4 = this.loadImage("images/num_score_4@2x.png");
    this.num_score_5 = this.loadImage("images/num_score_5@2x.png");
    this.num_score_6 = this.loadImage("images/num_score_6@2x.png");
    this.num_score_7 = this.loadImage("images/num_score_7@2x.png");
    this.num_score_8 = this.loadImage("images/num_score_8@2x.png");
    this.num_score_9 = this.loadImage("images/num_score_9@2x.png");
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
    let img = new Image();
    img.src = src;
    return img;
  }
}

export default Images;