class Config {
  constructor() {
    // モード
    this.gameMode = 0; // 0:easy, 1:hard
    // システム
    this.GAME_SPEED = 1000 / 30; // FPS
    this.POP_INTERVAL = 700; // アイテムのリポップ間隔(ms)
    this.FALLING_INTERVAL = 400; // 落下速度(ms)
    this.PROBABILITIES = [0.6, 0.1, 0.3];// banana,apple,untiの出現確率
    // フィールド
    this.FIELD_COL = 10; // 列数
    this.FIELD_ROW = 20; // 行数
    this.BLOCK_W = 108; // 1マス分のブロックサイズ（横）
    this.BLOCK_H = 96; // 1マス分のブロックサイズ（縦）
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズ（横）
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズ（縦）
    this.RIGHT_END = 6;//プレイ画面の右端
    this.LEFT_END = 0;//プレイ画面の左端
    this.START_Y = 8;//サルとロープの初期位置(y)
  }
  
  reset(){
    this.setMode(this.gameMode);
    this.CURRENT_BANANAS = 0;
    this.CURRENT_LIFE = this.MAX_LIFE;
    this.REMAINING_APPLE_TIME = this.INIT_REMAINING_APPLE_TIME; // アップルタイムの残り時間(s)
  }

  setMode(num) { // 0:easy, 1:hard
    if (num === 0) {
      this.POP_INTERVAL = 700;
      this.FALLING_INTERVAL = 400;
      this.PROBABILITIES = [0.6, 0.1, 0.3];
      this.MAX_BANANAS = 10;
      return;
    } else if (num === 1) {
      this.POP_INTERVAL = 700;
      this.FALLING_INTERVAL = 100;
      this.PROBABILITIES = [0.6, 0.1, 0.3];
      this.MAX_BANANAS = 55;
      return;
    }
  }
}

export default Config;
