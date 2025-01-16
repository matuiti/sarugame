import { GAME_STATE } from "./index.js";
class CollisionManager {
  constructor(saru, objManager) {
    this.saru = saru;
    this.objManager = objManager;
  }

  checkCollisions() {
    const hitboxes = this.saru.getCurrentHitbox();
    const playerHitbox = this.saru.open === 1 ? hitboxes[1] : hitboxes[0];
    const objects = this.objManager.getCurrentObjects();

    for (const object of objects) {
      if (this.checkCollision(playerHitbox, object)) {
        object.erase = true;
        if(object.type === "banana"){GAME_STATE.hitBanana();}
        if(object.type === "apple" ){GAME_STATE.hitApple ();}
        if(object.type === "unti"  ){GAME_STATE.hitUnti  ();}
        return;
      }
    }
  }

  checkCollision(playerHitbox, object) {
    for (let y = 0; y < playerHitbox.length; y++) {
      for (let x = 0; x < playerHitbox[y].length; x++) {
        if (playerHitbox[y][x] === 1) {
          const hitboxX = this.saru.x + x;
          const hitboxY = this.saru.y + y;
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
