//**********サウンド**********//
const bgm_01 = new Audio('sound/bgm_01.mp3');
const se_move = new Audio('sound/move_02.mp3');
const se_dash = new Audio('sound/dash.mp3');
const se_scream = new Audio('sound/down.mp3');
const se_banana = new Audio('sound/banana.mp3');
const se_apple = new Audio('sound/apple.mp3');
const se_appletime = new Audio('sound/mahounosutekki.mp3');
const se_unti = new Audio('sound/unti_01.mp3');

//**********画像**********//
//ハート
let heart_00 = new Image();/*ハートを置く所*/
heart_00.src = "images/heart_00@2x.png";
let heart = new Image();/*ハート*/
heart.src = "images/heart@2x.png";
//サルアイコン
let icon_01 = new Image();/*サルアイコン01*/
icon_01.src = "images/icon_01@2x.png";
let icon_02 = new Image();/*サルアイコン02*/
icon_02.src = "images/icon_02@2x.png";
let icon_03 = new Image();/*サルアイコン03*/
icon_03.src = "images/icon_03@2x.png";
let icon_04 = new Image();/*サルアイコン04*/
icon_04.src = "images/icon_04@2x.png";

//ロープ
let rope = new Image();/*ロープ*/
rope.src = "images/rope@2x.png";
//サル（右向き）
let saru_open = new Image();/*平常心*/
saru_open.src = "images/saru_01@2x.png";
let saru_open_s = new Image();/*叫び*/
saru_open_s.src = "images/saru_01_shout@2x.png";
let saru_open_d = new Image();/*ダウン時*/
saru_open_d.src = "images/saru_01_down@2x.png";
let saru_open_apple = new Image();/*アップルタイム変身時*/
saru_open_apple.src = "images/saru_01_apple@2x.png";
let saru_close = new Image();/*平常心*/
saru_close.src = "images/saru_02@2x.png";
let saru_close_s = new Image();/*叫び*/
saru_close_s.src = "images/saru_02_shout@2x.png";
let saru_close_d = new Image();/*ダウン時*/
saru_close_d.src = "images/saru_02_down@2x.png";
let saru_close_apple = new Image();/*アップルタイム変身時*/
saru_close_apple.src = "images/saru_02_apple@2x.png";
//サル（左向き）
let saru_open_l = new Image();/*平常心*/
saru_open_l.src = "images/saru_01_l@2x.png";
let saru_open_s_l = new Image();/*叫び*/
saru_open_s_l.src = "images/saru_01_shout_l@2x.png";
let saru_open_d_l = new Image();/*ダウン時*/
saru_open_d_l.src = "images/saru_01_down_l@2x.png";
let saru_open_apple_l = new Image();/*アップルタイム変身時*/
saru_open_apple_l.src = "images/saru_01_apple_l@2x.png";
let saru_close_l = new Image();/*平常心*/
saru_close_l.src = "images/saru_02_l@2x.png";
let saru_close_s_l = new Image();/*叫び*/
saru_close_s_l.src = "images/saru_02_shout_l@2x.png";
let saru_close_d_l = new Image();/*ダウン時*/
saru_close_d_l.src = "images/saru_02_down_l@2x.png";
let saru_close_apple_l = new Image();/*アップルタイム変身時*/
saru_close_apple_l.src = "images/saru_02_apple_l@2x.png";
//オブジェクト
let banana = new Image();/*バナナ*/
banana.src = "images/item_banana@2x.png";
let apple = new Image();/*リンゴ*/
apple.src = "images/item_apple@2x.png";
let unti = new Image();/*うんち*/
unti.src = "images/item_unti@2x.png";
//さるガール
let saru_girl = new Image();  /*右向き*/
saru_girl.src = "images/saru_girl@2x.png";
let saru_girl_l = new Image();  /*左向き*/
saru_girl_l.src = "images/saru_girl_l@2x.png";
//さるガール（GIF）
let saru_girl_gif = new Image();/*ダンシング*/
saru_girl_gif.src = "images/saru_girl.gif";
