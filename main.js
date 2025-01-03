  // 要素の取得
  const scenes = {
    start: document.getElementById("start"),
    play: document.getElementById("play"),
    clear: document.getElementById("clear"),
    over: document.getElementById("over")
  };

  const BTN_START = document.getElementById("start-button");
  const BTN_RESTART = document.getElementById("restart-button");

  // 初期シーンの表示
  sceneChange('start', scenes);
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


// シーン変更関数
function sceneChange(scene, scenes) {
  // 全てのシーンを非表示にする
  Object.values(scenes).forEach(el => {
    el.style.display = 'none';
  });
  // 指定されたシーンのみを表示
  if (scenes[scene]) {
    scenes[scene].style.display = 'flex';
  } else {
    console.error("未知のシーンです: " + scene);
  }
}
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
