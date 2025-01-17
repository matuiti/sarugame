import { GAME_STATE } from "./index.js";
// 衝突判定を管理するクラス
class CollisionManager {
  constructor(saru, objManager) {
    this.saru = saru; // プレイヤーキャラクター（サル）の参照を保持
    this.objManager = objManager; // オブジェクトマネージャーの参照を保持
    this.reset();
  }
  reset() { this.skipCheck = false; }

  //判定をスキップさせる
  setSkipCheck(){ this.skipCheck = true; }

  // 衝突判定をチェックするメソッド
  checkCollisions() {
    if(this.skipCheck)return;

    const hitboxes = this.saru.getCurrentHitbox(); // 現在のプレイヤーのヒットボックスを取得
    const playerHitbox = this.saru.open === 1 ? hitboxes[1] : hitboxes[0]; // プレイヤーの状態に応じて適切なヒットボックスを選択
    const objects = this.objManager.getCurrentObjects(); // 現在のオブジェクトを取得

    // すべてのオブジェクトに対して衝突判定を行う
    for (const object of objects) {
      if (this.checkCollision(playerHitbox, object)) {
        this.handleCollision(object); // 衝突が検出された場合、適切な処理を行う
      }
    }
  }

  // プレイヤーヒットボックスとオブジェクトの衝突判定を行うメソッド
  checkCollision(playerHitbox, object) {
    for (let y = 0; y < playerHitbox.length; y++) {
      for (let x = 0; x < playerHitbox[y].length; x++) {
        if (playerHitbox[y][x] === 1) { // ヒットボックスがアクティブな部分を確認
          const hitboxX = this.saru.x + x; // ヒットボックスのX座標を計算
          const hitboxY = this.saru.y + y; // ヒットボックスのY座標を計算
          if (hitboxX === object.x && hitboxY === object.y) { // ヒットボックスとオブジェクトの位置が一致するか確認
            return true; // 衝突が検出された場合、trueを返す
          }
        }
      }
    }
    return false; // 衝突が検出されなかった場合、falseを返す
  }

  // 衝突が検出された場合の処理を行うメソッド
  handleCollision(object) {
    const state = GAME_STATE.state; // 現在のゲーム状態を取得
    switch (object.type) {
      case "banana":
        object.erase = true; // 衝突したオブジェクトを消去
        GAME_STATE.hitBanana(); // バナナがヒットした際の処理を呼び出す
        break;
      case "apple":
        object.erase = true; // 衝突したオブジェクトを消去
        GAME_STATE.hitApple(); // リンゴがヒットした際の処理を呼び出す
        break;
      case "unti":
        if (state !== 3) { // アップルタイム中は当たらない
          object.erase = true; // 衝突したオブジェクトを消去
          GAME_STATE.hitUnti(); // うんちがヒットした際の処理を呼び出す
        }
        break;
    }
  }
}

export default CollisionManager;