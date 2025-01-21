
import Images from './Images.js';
import Config from './Config.js';
import Sounds from './Sounds.js';
import Effects from './Effects.js';
import Saru from './Saru.js';
import HeaderUI from './HeaderUI.js';
import GameState from './GameState.js';
import ObjManager from './ObjManager.js';
import Obj from './Obj.js';
import Banana from './Banana.js';
import Apple from './Apple.js';
import Unti from './Unti.js';
import Rope from './Rope.js';
import Input from './Input.js';
import CollisionManager from './CollisionManager.js';
import { gameLoop } from './main.js'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const HEADER_UI = new HeaderUI(ctx);
const GAME_STATE = new GameState;

const ROPE = new Rope(ctx);
const SARU = new Saru(ctx);
const OBJ_MANAGER = new ObjManager(ctx);
const INPUT = new Input;

export { canvas, ctx, gameLoop };
export { Images, Sounds, Config, Obj, Banana, Apple, Unti, CollisionManager, Effects };
export { GAME_STATE, ROPE, SARU, OBJ_MANAGER, INPUT, HEADER_UI };
