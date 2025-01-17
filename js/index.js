import Images from './Images.js';
import Sounds from './Sounds.js';
import Config from './Config.js';
import HeaderUI from './HeaderUI.js';
import GameState from './GameState.js';
import ObjManager from './ObjManager.js';
import Obj from './Obj.js';
import Banana from './Banana.js';
import Apple from './Apple.js';
import Unti from './Unti.js';
import Rope from './Rope.js';
import Saru from './Saru.js';
import Input from './Input.js';
import CollisionManager from './CollisionManager.js';

const HEADER_UI = new HeaderUI;
const GAME_STATE = new GameState;
const ROPE = new Rope;
const SARU = new Saru;
const OBJ_MANAGER = new ObjManager;
const INPUT = new Input;

export { Images, Sounds, Config, Obj, Banana, Apple, Unti, CollisionManager };
export { GAME_STATE, ROPE, SARU, OBJ_MANAGER, INPUT, HEADER_UI };
