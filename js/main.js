import { Assets, SceneManager, Obj } from './index.js';

/* 設定 */

//画面
const FIELD_COL = 10;//列数
const FIELD_ROW = 20;//行数
const BLOCK_W = 108;//1マス分のブロックサイズ（横）
const BLOCK_H = 96; //1マス分のブロックサイズ（縦）
const SCREEN_W = BLOCK_W * FIELD_COL;//スクリーンサイズ（横）
const SCREEN_H = BLOCK_H * FIELD_ROW;//スクリーンサイズ（縦）

// インスタンス
const ASSETS = new Assets;//画像や音素材データ
const SCENE_MANAGER = new SceneManager;//シーン管理
new Obj(BLOCK_W, BLOCK_H, SCREEN_H);//ドロップアイテムのベースオブジェクト

//サウンド
const BGM = ASSETS.bgm_01;//プレイ時のBGM
BGM.loop = true;//ループさせる
ASSETS.se_unti.volume = 0.3;  //ヴォリューム調整
ASSETS.se_banana.volume = 0.3;//ヴォリューム調整

//システム設定
const GAME_SPEED = 1000 / 60; // FPS
const REPOP_TIME = 1000; // アイテムのリポップ間隔(ms)
const DROP_SPEED = 400; // 落下速度(ms)

//ロープ
const ROPE_W = SCREEN_W; // 長さ
const ROPE_H = SCREEN_W / 50; // 厚み
let rope_x;
let rope_y;

//フラグ
let OVER;
let LOOP_STOP;
let STAGE_CLEAR;
let APPLE_TIME = false;
let MAX_BANANA = 10; // クリア目標数
let CURRENT_BANANA;
let MAX_LIFE;
let CURRENT_LIFE;

//ボタン要素
const START_BTN = document.getElementById("start-btn");
const YES_BTN = document.getElementById("yes-btn");
const NO_BTN = document.getElementById("no-btn");
const RESTART_BTN = document.getElementById("restart-btn");
//ボタンのクリック処理
START_BTN.addEventListener("click", SCENE_MANAGER.setScene("play"));

//オブジェクトのタイプ名
let OBJ_TYPES = ["banana", "apple", "unti"];
//バナナ獲得時のエフェクト用要素
let BNN_EF = document.getElementById('bnn-ef');

//スタート画面をセット
SCENE_MANAGER.setScene("start");