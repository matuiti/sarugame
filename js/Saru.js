import { Images, Config } from './index.js';
import { ROPE } from './index.js';

const IMAGES = new Images;
const CONFIG = new Config;
const BLOCK_W = CONFIG.BLOCK_W;
const BLOCK_H = CONFIG.BLOCK_H;
const FIELD_COL = CONFIG.FIELD_COL;

const HITBOXS = [//HITBOXS[0:閉, 1:開][ y ][ x ]
  [//閉じポーズ
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  [//開きポーズ
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ]
]

const IMG_SARU = [// IMG_SARU[ this.right ][ this.open ][ this.type ]・・・IMG_SARU[0-1][0-1][0-3]
  [// 左向き
    // 閉じポーズ
    [IMAGES.saru_close_l, IMAGES.saru_close_s_l, IMAGES.saru_close_d_l, IMAGES.saru_close_apple_l],
    // 開きポーズ
    [IMAGES.saru_open_l, IMAGES.saru_open_s_l, IMAGES.saru_open_d_l, IMAGES.saru_open_apple_l]
  ],
  [// 右向き
    // 閉じポーズ
    [IMAGES.saru_close, IMAGES.saru_close_s, IMAGES.saru_close_d, IMAGES.saru_close_apple],
    // 開きポーズ
    [IMAGES.saru_open, IMAGES.saru_open_s, IMAGES.saru_open_d, IMAGES.saru_open_apple]
  ]
];

class Saru {
  constructor() {
    this.w = 4;//ブロック数
    this.h = 6;//ブロック数
    this.blockW = BLOCK_W * this.w;//描画用のサイズ
    this.blockH = BLOCK_H * this.h;//描画用のサイズ
    this.vx = 1;//歩幅
    this.reset();
  }

  reset() {
    this.x = (FIELD_COL / 2) - (this.w / 2);//ステージ中央へ
    this.y = ROPE.y - ROPE.h;//ロープに合わせる
    this.right = 1; // 0:左向き, 1:右向き
    this.open = 1; // 0:閉じポーズ, 1:開きポーズ
    this.type = 0; // 0:普通, 1:叫び, 2:ダウン, 3:アップルタイム
    this.appleTime = 0; // 0:false, 1:true
  }

  setAppleTime(appleTime) {
    this.appleTime = appleTime;
    this.type = 3;
  }

  checkAppleTime() {
    return this.appleTime; // アップルタイム中かどうか true or false
  }

  getCurrentHitbox(){

  }

  move(toRight) {
    this.right = toRight ? 1 : 0;
    this.open = 1 - this.open; // 元の値を反転
    this.x += toRight ? this.vx : -this.vx;
    console.log(this.open);
  }

  draw(ctx) {
    ctx.drawImage(IMG_SARU[this.right][this.open][this.type], this.x * BLOCK_W, this.y, this.blockW, this.blockH);
  }
}

export default Saru;
