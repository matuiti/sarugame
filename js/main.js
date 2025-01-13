import { Images, Sounds, Config, GameState, SceneManager, ObjManager, Obj, Rope } from './index.js';

// インスタンス
const IMAGES = new Images; //画像データ
const SOUNDS = new Sounds; //サウンドデータ
const CONFIG = new Config; //設定
const GAME_STATE = new GameState;   //ゲームの状態管理
const SCENE_MANAGER = new SceneManager;//シーン管理
const OBJ_MANAGER = new ObjManager;//オブジェクトの制御
const ROPE = new Rope;        //ロープ
new Obj; //ドロップアイテムの親クラス

//初期表示
// SCENE_MANAGER.setScene("start");

if (SCENE_MANAGER.getScene() === "play") {
  init();
}

function init() {
  // メインのBGMを再生開始
  // SOUNDS.setBGM();
  GAME_STATE.reset();
  ROPE.reset();
  OBJ_MANAGER.reset();


  // オブジェクトのポップ開始
  OBJ_MANAGER.startPop(CONFIG.POP_INTERVAL);

  // ゲームループの開始
  // requestAnimationFrame(gameLoop);
}






let lastTime = 0;//最終計測
let deltaTime = 0;//最終計測からの経過時間
function gameLoop(timestamp) {
  if (GAME_STATE.over) {
    over();
    return;// ゲームループ終了
  }

  // 設定FPSで処理を実行
  if (!lastTime) lastTime = timestamp;
  deltaTime = timestamp - lastTime;
  if (deltaTime >= CONFIG.GAME_SPEED) {
    update();
    draw();
    lastTime = timestamp;
  }

  // requestAnimationFrame(gameLoop);
}

function update() {
  //checkHit
  //

}

function draw() {
}

function over() {
  // サルを操作不能にする
  // 当たり判定チェックを停止
  // やられアニメーションを起動（サル・ロープ）

  OBJ_MANAGER.stopPop();
  SCENE_MANAGER.setScene("over");
}
