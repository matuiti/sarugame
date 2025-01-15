import { Images, Sounds, Config } from './index.js';
import { GAME_STATE, ROPE, SARU, OBJ_MANAGER, COLLISION_MANAGER, INPUT } from './index.js';

// シーン管理
let scene = 0;//0:タイトル, 1:プレイ, 2:ゲームオーバー, 3:クリア
let scenes = [//シーン要素
  document.getElementById("title"),
  document.getElementById("play"),
  document.getElementById("over"),
  document.getElementById("clear")
]
let btns = {//ボタン要素
  start: document.getElementById("start-btn"),
  yes: document.getElementById("yes-btn"),
  no: document.getElementById("no-btn"),
  restart: document.getElementById("restart-btn")
}
let events = [//ボタンのイベント
  btns.start.addEventListener("click", () => init()),//初期化→プレイへ
  btns.yes.addEventListener("click", () => init()),//初期化→プレイへ
  btns.no.addEventListener("click", () => setScene(0)),//タイトルへ
  btns.restart.addEventListener("click", () => init())//初期化→プレイへ
]
// インスタンス
const IMAGES = new Images; //画像データ
const SOUNDS = new Sounds; //サウンドデータ
const CONFIG = new Config; //設定

// canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width  = CONFIG.SCREEN_W;
canvas.height = CONFIG.SCREEN_H;

let lastTime = 0;//最終計測
let deltaTime = 0;//最終計測からの経過時間
export function gameLoop(timestamp) {
  if (GAME_STATE.over) {
    toOver();
    return;//ループを抜ける
  }
  if (GAME_STATE.clear) {
    toClear();
    return;//ループを抜ける
  }
  
  if (!lastTime) lastTime = timestamp;
  deltaTime = timestamp - lastTime;
  if (deltaTime >= CONFIG.GAME_SPEED) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//画面のクリア
    update();
    draw();
    lastTime = timestamp;
  }

  requestAnimationFrame(gameLoop);
}

function update() {
  OBJ_MANAGER.updateAllObjects();//objects[]を削除フラグがfalseのものだけで作成更新

  //checkHit
}

function draw() {
  ROPE.draw(ctx);
  SARU.draw(ctx);
  OBJ_MANAGER.drawAllObjects(ctx);
}

function init() {//初期化関数
  SOUNDS.setBGM();//プレイ時のBGM開始（ループ再生）
  GAME_STATE.reset();
  ROPE.reset();
  SARU.reset();
  OBJ_MANAGER.reset();
  setScene(1);//プレイ画面へ
  OBJ_MANAGER.startPop(CONFIG.POP_INTERVAL);//オートポップとオート移動開始、範囲外の移動は削除
  requestAnimationFrame(gameLoop);//ゲームループ開始
}
function toOver() {//ゲームオーバー移行処理
  // サルを操作不能にする
  // 当たり判定チェックを停止
  // やられアニメーションを起動（サル・ロープ）
  // SARU.toOver();
  // ROPE.toOver();

  OBJ_MANAGER.stopPop();//オブジェクトのポップの停止と全オブジェクトの削除
  setScene(2);//ゲームオーバーへ
}
function toClear() {//ゲームクリア移行処理
  OBJ_MANAGER.stopPop();//オブジェクトのポップの停止と全オブジェクトの削除
  setScene(3);//ゲームクリアへ
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
  if (num <= 3 && num >= 0) {
    scene = num;
    showScene(scene);
  } else {//不正な値ならタイトルへ
    scene = 0;
    showScene(scene);
  }
}
