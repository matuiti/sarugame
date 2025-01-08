class Assets {
  constructor() {
    // サウンド
    this.bgm_01 = new Audio('sound/bgm_01.mp3');
    this.se_move = new Audio('sound/move_02.mp3');
    this.se_scream = new Audio('sound/dawn.mp3');
    this.se_banana = new Audio('sound/banana.mp3');
    this.se_apple = new Audio('sound/apple.mp3');
    this.se_appletime = new Audio('sound/mahounosutekki.mp3');
    this.se_unti = new Audio('sound/unti_01.mp3');

    // 画像
    this.heart_00 = this.loadImage("images/heart_00@2x.png");
    this.heart = this.loadImage("images/heart@2x.png");
    this.icon_01 = this.loadImage("images/icon_01@2x.png");
    this.icon_02 = this.loadImage("images/icon_02@2x.png");
    this.icon_03 = this.loadImage("images/icon_03@2x.png");
    this.icon_04 = this.loadImage("images/icon_04@2x.png");
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
    this.saru_girl = this.loadImage("images/saru_girl@2x.png");
    this.saru_girl_l = this.loadImage("images/saru_girl_l@2x.png");
    this.saru_girl_gif = this.loadImage("images/saru_girl.gif");
  }

  loadImage(src) {
    let img = new Image();
    img.src = src;
    return img;
  }
}

export default Assets;