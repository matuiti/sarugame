import { canvas, ctx } from './index.js';
import { Sounds, Config, CollisionManager } from './index.js';
import { GAME_STATE, ROPE, SARU, OBJ_MANAGER, HEADER_UI, EFFECTS } from './index.js';

// シーン管理
let scene = 0;//0:タイトル, 1:説明, 2:プレイ, 3:ゲームオーバー, 4:クリア
let scenes = [//シーン要素
  document.getElementById("title"),
  document.getElementById("desc"),
  document.getElementById("play"),
  document.getElementById("over"),
  document.getElementById("clear")
]
let keyPanel = {//操作パネル要素
  left: document.getElementById('left-btn'),
  right: document.getElementById('right-btn')
}
let btns = {//ボタン要素
  start: document.getElementById("title-btn"),
  yes: document.getElementById("yes-btn"),
  no: document.getElementById("no-btn"),
  restart: document.getElementById("restart-btn")
}
let events = [//ボタンのイベント
  btns.start.addEventListener("click", () => {
    setScene(1);//説明へ
    setTimeout(init,3000);//少し待ってからプレイ画面へ
  }),
  btns.yes.addEventListener("click", () => init()),//初期化→プレイへ
  btns.no.addEventListener("click", () => setScene(0)),//タイトルへ
  btns.restart.addEventListener("click", () => init())//初期化→プレイへ
]


// インスタンス
const SOUNDS = new Sounds; //サウンドデータ
const CONFIG = new Config; //設定
const COLLISION_MANAGER = new CollisionManager(SARU, OBJ_MANAGER);

canvas.width = CONFIG.SCREEN_W;
canvas.height = CONFIG.SCREEN_H;

let lastTime = 0;//最終計測
let deltaTime = 0;//最終計測からの経過時間
export function gameLoop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  deltaTime = timestamp - lastTime;
  if (deltaTime >= CONFIG.GAME_SPEED) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//画面のクリア
    update();
    draw();
    lastTime = timestamp;
  }

  if (GAME_STATE.toOver) {
    SOUNDS.stopBGM();
    toOver();
    return;//ループを抜ける
  }
  if (GAME_STATE.clear) {
    SOUNDS.stopBGM();
    toClear();
    return;//ループを抜ける
  }

  requestAnimationFrame(gameLoop);
}

function update() {
  let state = GAME_STATE.state;
  OBJ_MANAGER.updateAllObjects();//objects[]を更新
  if (state !== 1 && !GAME_STATE.over) COLLISION_MANAGER.checkCollisions();//hit中とダウン中以外は、当たり判定のチェックをして事後処理の分岐
  ROPE.update();
  SARU.update(state);
  HEADER_UI.drawAll(state, GAME_STATE.currentLife, GAME_STATE.score, GAME_STATE.currentBananas, GAME_STATE.maxBananas);//(iconIndex, newLife, newScore, currentBananas)
}

function draw() {
  ROPE.draw();
  SARU.draw();
  OBJ_MANAGER.drawAllObjects();
  EFFECTS.drawScorePopups();
  EFFECTS.drawAppleTimePopups();
}

function init() {//初期化関数
  SOUNDS.startBGM();//プレイ時のBGM開始（ループ再生）
  GAME_STATE.reset();
  ROPE.reset();
  SARU.reset();
  OBJ_MANAGER.reset();
  COLLISION_MANAGER.reset();
  setScene(2);//プレイ画面へ
  OBJ_MANAGER.startPop(CONFIG.POP_INTERVAL);//オートポップとオート移動開始、範囲外の移動は削除
  keyPanel.left.classList.remove('leave-l');//逃げていたパネルを元に戻す
  keyPanel.right.classList.remove('leave-r');//逃げていたパネルを元に戻す
  requestAnimationFrame(gameLoop);//ゲームループ開始
}
function toOver() {//ゲームオーバー移行処理
  // debugger
  GAME_STATE.toOver = false;
  GAME_STATE.over = true;
  COLLISION_MANAGER.setSkipCheck();
  downAnim1();
}
function downAnim1() {
  runawayPanel();
  ROPE.fall();
  SARU.jump();
  SOUNDS.se('scream');
  setTimeout(downAnim2, 600);
}
function downAnim2() {
  SARU.fall();
  setTimeout(cleanup, 2000);
}
function cleanup() {
  OBJ_MANAGER.stopPop();//オブジェクトのポップの停止と全オブジェクトの削除
  setScene(3);//ゲームオーバーへ


}
function runawayPanel() {
  keyPanel.left.classList.add('leave-l');
  keyPanel.right.classList.add('leave-r');
}

function toClear() {//ゲームクリア移行処理
  OBJ_MANAGER.stopPop();//オブジェクトのポップの停止と全オブジェクトの削除
  setScene(4);//ゲームクリアへ
}
function resetScene() {//全シーンを非表示
  Object.values(scenes).forEach(el => {
    el.style.display = 'none';
  });
}
function showScene(num) {//指定のシーンを表示
  scenes[num].style.display = 'flex';
}
function setScene(num) {//シーンをセット
  resetScene();
  if (num <= 4 && num >= 0) {
    scene = num;
    showScene(scene);
  } else {//不正な値ならタイトルへ
    scene = 0;
    showScene(scene);
  }
}
