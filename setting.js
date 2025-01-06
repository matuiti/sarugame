//FPS
let gameSpeed = 1000 / 60;
//アイテムのリポップ間隔(ms)
let repopTime = 1000;
//落下速度(ms)
let dropSpeed = 400;
//BGM（プレイ時）
let bgm_01 = document.getElementById("bgm_01");   /*BGM01*/
let bgm = bgm_01;/*BGM初期値*/
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
let objType = [item_01, item_02, item_03];
let bnnEf = document.getElementById('bnn-ef');/*バナナ取得時のエフェクト専用要素*/
let appleTime = false;