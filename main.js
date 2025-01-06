/* 設定 */

//FPS
let gameSpeed = 1000 / 60;
//アイテムのリポップ間隔(ms)
let repopTime = 1000;
//落下速度(ms)
let dropSpeed = 400;

//BGM（プレイ時）
let bgm = bgm_01;/*BGM初期値*/
bgm.loop = true;
//ヴォリューム調整
se_unti.volume = 0.3;
se_banana.volume = 0.3;

/*min~maxの乱数獲得関数*/
function rand(min, max) { return Math.floor(Math.random() * ((max + 1) - min) + min) }

//フィールドサイズ
const FIELD_COL = 10;
const FIELD_ROW = 20;

//ブロック一つのサイズ
const BLOCK_W = 108;
const BLOCK_H = 96;

//スクリーンサイズ
const SCREEN_W = BLOCK_W * FIELD_COL;
const SCREEN_H = BLOCK_H * FIELD_ROW;

//ロープの設定
const ROPE_W = SCREEN_W;     /*長さ   */
const ROPE_H = SCREEN_W / 50;/*厚み   */
let rope_x; /*x座標*/
let rope_y; /*y座標*/

//フラグ
let over;
let loopStop;
let stageClear;
//バナナ数
let maxBanana = 10;/*ステージクリア目標数*/
let currentBanana;
//ライフ
let maxLife = 5;
let currentLife;

//オブジェクト共通
//-----------------------落ちてくるオブジェクトの設定---------
let objType = [banana, apple, unti];
let bnnEf = document.getElementById('bnn-ef');/*バナナ取得時のエフェクト専用要素*/
let appleTime = false;

  const BTN_START = document.getElementById("start-button");
  const BTN_RESTART = document.getElementById("restart-button");

  // 初期シーンの表示
  // sceneChange('start', scenes);
  // スタートボタンのクリック処理
  BTN_START.addEventListener("click", function () {
    sceneChange('play', scenes);
    startGame();
  });
  // リスタートボタンのクリック処理（ゲームオーバー画面）
  BTN_RESTART.addEventListener("click", function () {
    sceneChange('play', scenes);
    startGame();
  });

// ゲームプレイ関数
function startGame() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 600 - 60; // ヘッダーの高さを引いた分の高さ

  let score = 0;
  let over = false;

  // 初期化処理
  init(ctx);

  // ゲームループ
  function gameLoop(timestamp) {
    if (over) return;

    // ゲームの更新と描画
    updateGame();
    drawGame(ctx, score);

    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);

  // アクションボタンのイベントリスナー
  const actionButton = document.getElementById('action-button');
  actionButton.addEventListener('click', handleActionButton);

  function handleActionButton() {
    // ボタンが押されたときの処理をここに記述
    console.log('アクションボタンが押されました');
  }

  function init(ctx) {
    // ゲームの初期化処理をここに記述
  }

  function updateGame() {
    // ゲームの更新処理をここに記述
  }

  function drawGame(ctx, score) {
    // キャンバスのクリア
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // ゲームの描画処理をここに記述
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`スコア: ${score}`, 10, 30);
  }
}
