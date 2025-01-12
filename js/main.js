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
SCENE_MANAGER.setScene("start");

if (SCENE_MANAGER.getScene() === "play") {
  init();
}

function init() {
  // メインのBGMを再生開始
  // SOUNDS.setBGM();
  GAME_STATE.reset();
  ROPE.reset();
  OBJ_MANAGER.reset();

  // ループの開始
  // ドロップオブジェクトのループも開始
  // 以下、仮置き
  // loop1 = setInterval(gameLoop, gameSpeed);
}