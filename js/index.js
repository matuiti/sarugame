// ハブファイル
import { gameLoop } from './main.js';//メインループ
import Images from './Images.js';//画像
import Config from './Config.js';//共通設定
import Sounds from './Sounds.js';//サウンド
import HeaderUI from './HeaderUI.js';//ヘッダーUI
import GameState from './GameState.js';//状態管理
import Effects from './Effects.js';//エフェクト
import Saru from './Saru.js';//サル
import Rope from './Rope.js';//ロープ
import { Obj, Banana, Apple, Unti } from './Obj.js';//落下してくるオブジェクト
import ObjManager from './ObjManager.js';//オブジェクトの管理
import CollisionManager from './CollisionManager.js';//衝突管理
import Input from './Input.js';//入力操作
import Over from './Over.js';//ゲームオーバー
import Clear from './Clear.js';//ゲームクリア

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

const CONFIG = new Config;
const HEADER_UI = new HeaderUI(ctx);
const GAME_STATE = new GameState();
const EFFECTS = new Effects(ctx);
const SARU = new Saru(ctx);
const ROPE = new Rope(ctx);
const OBJ_MANAGER = new ObjManager(ctx);
const INPUT = new Input(gameLoop);

export { canvas, ctx };//main.jsで利用
export { Images, Sounds, Obj, Banana, Apple, Unti, CollisionManager, Over, Clear };//各自newして利用
export { CONFIG, GAME_STATE, ROPE, SARU, OBJ_MANAGER, INPUT, HEADER_UI, EFFECTS };//1つのインスタンスを参照
