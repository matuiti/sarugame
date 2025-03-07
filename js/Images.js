class Images {
  constructor() {//画像を事前読み込み
    //ヘッダー
    this.icons = this.loadImages2x('icon', 4);// 0:普通, 1:叫び, 2:ダウン, 3:appleTime
    this.lifes = this.loadImages2x('life', 6);// ライフ0~5
    this.num_now = this.loadImages2x('num_now', 10);// バナナ数の数値0~9
    this.num_max = this.loadImages2x('num_max', 10);// クリア目標数の数値0~9
    this.num_score = this.loadImages2x('num_score', 10);// スコア数値0~9
    this.score_title = this.loadImage("images/score_title@2x.png");// 「SCORE:」
    this.count_panel = this.loadImage("images/count_panel@2x.png");// バナナ数と目標数が載る背景パネル
    //結果画面
    this.num_result = this.loadImages2x('num_result', 10);
    //エフェクト
    this.num_get = this.loadImages('num_get', 10);//頭上の加点エフェクト数値
    this.appleTime = this.loadImage('images/appletime@2x.png');//アップルタイム発動時の頭上の「AppleTime」
    //ロープ
    this.rope = this.loadImage("images/rope@2x.png");
    // サル
    // open: 腕開きポーズ, close: 腕と閉じポーズ, s: 叫び, d: ダウン, apple: アップルタイム
    // 右向き
    this.saru_open = this.loadImage("images/saru_01@2x.png");
    this.saru_open_s = this.loadImage("images/saru_01_shout@2x.png");
    this.saru_open_d = this.loadImage("images/saru_01_down@2x.png");
    this.saru_open_apple = this.loadImage("images/saru_01_apple@2x.png");
    this.saru_close = this.loadImage("images/saru_02@2x.png");
    this.saru_close_s = this.loadImage("images/saru_02_shout@2x.png");
    this.saru_close_d = this.loadImage("images/saru_02_down@2x.png");
    this.saru_close_apple = this.loadImage("images/saru_02_apple@2x.png");
    // 左向き
    this.saru_open_l = this.loadImage("images/saru_01_l@2x.png");
    this.saru_open_s_l = this.loadImage("images/saru_01_shout_l@2x.png");
    this.saru_open_d_l = this.loadImage("images/saru_01_down_l@2x.png");
    this.saru_open_apple_l = this.loadImage("images/saru_01_apple_l@2x.png");
    this.saru_close_l = this.loadImage("images/saru_02_l@2x.png");
    this.saru_close_s_l = this.loadImage("images/saru_02_shout_l@2x.png");
    this.saru_close_d_l = this.loadImage("images/saru_02_down_l@2x.png");
    this.saru_close_apple_l = this.loadImage("images/saru_02_apple_l@2x.png");
    // オブジェクト
    this.items = this.loadImages2x('item', 3); // 0:バナナ, 1:リンゴ, 2:うんち
  }

  loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }
  loadImages(baseName, count) {//読み込み画像のファイル名+ナンバリングを一括処理して返す（配列）
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(this.loadImage(`images/${baseName}_${i}.png`));
    }
    return images;
  }
  loadImages2x(baseName, count) {//読み込み画像のファイル名+ナンバリングを一括処理して返す（配列）※2倍画像用
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(this.loadImage(`images/${baseName}_${i}@2x.png`));
    }
    return images;
  }
}

export default Images;