class CollisionManager {
  constructor(player, objManager) {
    this.player = player;
    this.objManager = objManager;
  }

  checkCollisions() {
    const playerHitbox = this.player.getCurrentHitbox();
    const objects = this.objManager.getCurrentObjects();

    for (const object of objects) {
      if (this.checkCollision(playerHitbox, object)) {
        console.log(`Collision with object: ${object.constructor.name}`);
        // ここでコリジョン処理を行う（例：オブジェクトの削除、スコアの更新など）
      }
    }
  }

  checkCollision(playerHitbox, object) {
    for (let y = 0; y < playerHitbox.length; y++) {
      for (let x = 0; x < playerHitbox[y].length; x++) {
        if (playerHitbox[y][x] === 1) {
          const hitboxX = this.player.x + x;
          const hitboxY = this.player.y + y;
          if (hitboxX === object.x && hitboxY === object.y) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

export default CollisionManager;
