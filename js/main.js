import { canvas, ctx } from './index.js';
import { Sounds, Config, CollisionManager, Over, Clear } from './index.js';
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
// 操作パネル
let keyPanels = {
  left: document.getElementById('left-btn'),
  right: document.getElementById('right-btn')
}
// 全てのボタン
let buttons = document.querySelectorAll('button');
// 全てのボタン共通の処理
buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.add('pressed');
  });
  button.addEventListener('mouseup', () => {
    SOUNDS.se('click');
    button.classList.remove('pressed'); // クリック解除時にクラスを削除
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('pressed'); // ボタン外にカーソルが出たときにクラスを削除
  });
});
// 個別のボタン
let btns = {
  start: document.getElementById("title-btn"),
  yes: document.getElementById("yes-btn"),
  no: document.getElementById("no-btn"),
  retry: document.getElementById("retry-btn")
}
// 個別のボタンのイベント処理
let events = [
  btns.start.addEventListener("click", () => {
    setTimeout(() => {
      setScene(1);//説明画面へ
      setTimeout(init, 3000);//初期化→プレイ画面へ
    }, 1000)
  }),
  btns.yes.addEventListener("click", () => {
    setTimeout(init, 3000);//初期化→プレイ画面へ
  }),
  btns.no.addEventListener("click", () => {
    setTimeout(() => setScene(0), 2000);//タイトル画面へ
  }),//タイトル画面へ
  btns.retry.addEventListener("click", () => {
    setTimeout(init, 2000);//初期化→プレイ画面へ
  })
]
// インスタンス
const SOUNDS = new Sounds;
const CONFIG = new Config;
const COLLISION_MANAGER = new CollisionManager(SARU, OBJ_MANAGER);
const OVER = new Over;
const CLEAR = new Clear;
// キャンバスのサイズ
canvas.width = CONFIG.SCREEN_W;
canvas.height = CONFIG.SCREEN_H;

// メインループ
let lastTime = 0;//最終計測時間
let deltaTime = 0;//最終計測からの経過時間
export function gameLoop(timestamp) {
  if (GAME_STATE.toOver) {
    SOUNDS.stopBGM();
    toOver();//ゲームオーバーに向かう間の処理へ
    return;//ループを抜ける
  }
  if (GAME_STATE.toClear) {
    toClear();//ゲームクリアに向かう間の処理へ
    SOUNDS.stopBGM();
    return;//ループを抜ける
  }
  // FPSを安定させる
  if (!lastTime) lastTime = timestamp;
  deltaTime = timestamp - lastTime;
  if (deltaTime >= CONFIG.GAME_SPEED) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//画面のクリア
    update();//更新
    draw();//描画
    lastTime = timestamp;
  }
  requestAnimationFrame(gameLoop);
}

function update() {
  OBJ_MANAGER.updateAllObjects();//オブジェクトの配列から削除フラグのものを削除して配列を更新
  if (GAME_STATE.state !== 1 && !GAME_STATE.over && !GAME_STATE.clear) COLLISION_MANAGER.checkCollisions();//当たり判定のチェックと事後処理への分岐
  if (GAME_STATE.over) ROPE.update();//ロープ落下のアニメーション
  SARU.update(GAME_STATE.state);//サルのタイプを更新、サル落下のアニメーション
}
function draw() {
  ROPE.draw();
  SARU.draw();
  OBJ_MANAGER.drawAllObjects();
  EFFECTS.drawScorePopups();
  EFFECTS.drawAppleTimePopups();
  HEADER_UI.drawAll(GAME_STATE.state, GAME_STATE.currentLife, GAME_STATE.score, GAME_STATE.countBananas, GAME_STATE.maxBananas);//( iconIndex, newLife, newScore, countBananas )
}
function init() {//初期化関数
  SOUNDS.startBGM();//プレイ時のBGM開始（ループ再生）
  GAME_STATE.reset();
  ROPE.reset();
  SARU.reset();
  OBJ_MANAGER.reset();
  OVER.reset();
  CLEAR.reset();
  setScene(2);//プレイ画面へ
  OBJ_MANAGER.startPop(CONFIG.POP_INTERVAL);//オートポップとオート移動開始、範囲外の移動は削除
  keyPanels.left.classList.remove('leave-l');//逃げていたパネルを元に戻す
  keyPanels.right.classList.remove('leave-r');//逃げていたパネルを元に戻す
  requestAnimationFrame(gameLoop);//ゲームループ開始
}
function toOver() {//ゲームオーバー移行処理
  GAME_STATE.toOver = false;
  GAME_STATE.over = true;
  gameLoop();
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
  SOUNDS.se('falling');
  setTimeout(cleanup, 3000);
}
function cleanup() {
  OBJ_MANAGER.stopPop();//オブジェクトの自動ポップの停止と全オブジェクトの削除
  setScene(3);//ゲームオーバーへ画面の切り替え
  OVER.startOver();//ゲームオーバーシーン内の処理開始
}
function runawayPanel() {
  keyPanels.left.classList.add('leave-l');
  keyPanels.right.classList.add('leave-r');
}

function toClear() {//ゲームクリア移行処理
  GAME_STATE.toClear = false;
  GAME_STATE.clear = true;
  SOUNDS.se('clear');
  OBJ_MANAGER.stopPop();//オブジェクトのポップの停止と全オブジェクトの削除

  setTimeout(() => {
    setScene(4);//ゲームクリアへ
    CLEAR.startClear();//ゲームクリアシーン内の処理開始
  }, 3000)
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
