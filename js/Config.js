class Config {
  constructor() {
    // システム
    this.GAME_SPEED = 1000 / 30; // FPS
    this.POP_INTERVAL = 500; // アイテムのリポップ間隔(ms)
    this.FALLING_INTERVAL = 300; // 落下速度(ms)
    this.PROBABILITIES = [0.5, 0.2, 0.3];// banana,apple,untiの出現確率
    // フィールド
    this.FIELD_COL = 10; // 列数
    this.FIELD_ROW = 20; // 行数
    this.BLOCK_W = 108; // 1マス分のブロックサイズ（横）
    this.BLOCK_H = 96; // 1マス分のブロックサイズ（縦）
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズ（横）
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズ（縦）
    // this.HEADER_H = 235;
    this.RIGHT_END = 6;//プレイ画面の右端
    this.LEFT_END = 0;//プレイ画面の左端
    this.START_Y = 8;//サルとロープの初期位置(y)
  }
}

export default Config;
