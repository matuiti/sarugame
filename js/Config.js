class Config {
  constructor() {
    // システム
    this.GAME_SPEED = 1000 / 60; // FPS
    this.REPOP_TIME = 1000; // アイテムのリポップ間隔(ms)
    this.DROP_SPEED = 400; // 落下速度(ms)

    // フィールド
    this.FIELD_COL = 10; // 列数
    this.FIELD_ROW = 20; // 行数
    this.BLOCK_W = 108; // 1マス分のブロックサイズ（横）
    this.BLOCK_H = 96; // 1マス分のブロックサイズ（縦）
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズ（横）
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズ（縦）

    // 得点
    this.SCORE_BANANA = 100;
    this.SCORE_APPLE  = 300;
  }

  // システム設定のgetメソッド
  getGameSpeed() {
    return this.GAME_SPEED;
  }
  getRepopTime() {
    return this.REPOP_TIME;
  }
  getDropSpeed() {
    return this.DROP_SPEED;
  }

  // フィールド設定のgetメソッド
  getFieldCol() {
    return this.FIELD_COL;
  }
  getFieldRow() {
    return this.FIELD_ROW;
  }
  getBlockW() {
    return this.BLOCK_W;
  }
  getBlockH() {
    return this.BLOCK_H;
  }
  getScreenW() {
    return this.SCREEN_W;
  }
  getScreenH() {
    return this.SCREEN_H;
  }

  // システム設定のsetメソッド
  setGameSpeed(value) {
    this.GAME_SPEED = value;
  }
  setRepopTime(value) {
    this.REPOP_TIME = value;
  }
  setDropSpeed(value) {
    this.DROP_SPEED = value;
  }

  // フィールド設定のsetメソッド
  setFieldCol(value) {
    this.FIELD_COL = value;
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズの再計算
  }

  setFieldRow(value) {
    this.FIELD_ROW = value;
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズの再計算
  }

  setBlockW(value) {
    this.BLOCK_W = value;
    this.SCREEN_W = this.BLOCK_W * this.FIELD_COL; // スクリーンサイズの再計算
  }

  setBlockH(value) {
    this.BLOCK_H = value;
    this.SCREEN_H = this.BLOCK_H * this.FIELD_ROW; // スクリーンサイズの再計算
  }
}

export default Config;
