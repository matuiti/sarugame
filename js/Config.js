class Config {
  constructor() {
    // システム
    this.GAME_SPEED = 1000 / 30; // FPS
    this.POP_INTERVAL = 3000; // アイテムのリポップ間隔(ms)
    this.FALLING_SPEED = 400; // 落下速度(ms)
    // フィールド
    this.FIELD_COL = 10; // 列数
    this.FIELD_ROW = 20; // 行数
    this.BLOCK_W = 108; // 1マス分のブロックサイズ（横）
    this.BLOCK_H = 96; // 1マス分のブロックサイズ（縦）
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズ（横）
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズ（縦）
  }
}

export default Config;
