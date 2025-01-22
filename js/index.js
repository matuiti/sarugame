import { gameLoop } from './main.js';
import Images from './Images.js';
import Config from './Config.js';
import Sounds from './Sounds.js';
import HeaderUI from './HeaderUI.js';
import GameState from './GameState.js';
import Effects from './Effects.js';
import Saru from './Saru.js';
import Rope from './Rope.js';
import { Obj, Banana, Apple, Unti } from './Obj.js';
import ObjManager from './ObjManager.js';
import CollisionManager from './CollisionManager.js';
import Input from './Input.js';
import Over from './Over.js';
import Clear from './Clear.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

const HEADER_UI = new HeaderUI(ctx);
const GAME_STATE = new GameState();
const EFFECTS = new Effects(ctx);
const SARU = new Saru(ctx);
const ROPE = new Rope(ctx);
const OBJ_MANAGER = new ObjManager(ctx);
const INPUT = new Input(gameLoop);

export { canvas, ctx };//main.jsで利用
export { Images, Sounds, Config, Obj, Banana, Apple, Unti, CollisionManager, Over, Clear };//各自newして利用
export { GAME_STATE, ROPE, SARU, OBJ_MANAGER, INPUT, HEADER_UI, EFFECTS };//1つのインスタンスを参照
