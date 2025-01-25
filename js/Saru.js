import { Images,Sounds } from './index.js';
import { CONFIG } from './index.js';


const IMAGES = new Images;
const SOUNDS = new Sounds;

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
  constructor(ctx) {
    this.ctx = ctx;
    this.BLOCK_W = CONFIG.BLOCK_W;
    this.BLOCK_H = CONFIG.BLOCK_H;
    this.FIELD_COL = CONFIG.FIELD_COL;
    this.w = 4;//Saruの幅（ブロック数）
    this.h = 6;//Saruの高さ（ブロック数）
    this.blockW = this.BLOCK_W * this.w;//Saruの幅（描画用）
    this.blockH = this.BLOCK_H * this.h;//Saruの高さ（描画用）
    this.vx = 1;//歩幅（ブロック数）
    this.reset();
  }

  reset() {
    this.x = (this.FIELD_COL / 2) - (this.w / 2);//左右中央
    this.y = CONFIG.START_Y;
    this.right = 1; // 0:左向き, 1:右向き
    this.open = 1; // 0:閉じポーズ, 1:開きポーズ
    this.type = 0; // 0:普通, 1:叫び, 2:ダウン, 3:アップルタイム
    this.isJumping = false;
    this.isFalling = false;
  }

  getCurrentHitbox() {
    return HITBOXS;
  }

  move(toRight) {
    SOUNDS.se('move');
    this.right = toRight ? 1 : 0;
    this.open = 1 - this.open; // 元の値を反転
    this.x += toRight ? this.vx : -this.vx;
  }

  setType(state) {
    this.type = state;
  }

  draw() {
    if(this.type === 3){//appleTimeのサルは少し大きめに描画（他のサルタイプと揃えるため）
      this.ctx.drawImage(IMG_SARU[this.right][this.open][this.type], this.x * this.BLOCK_W - 32, this.y * this.BLOCK_H -30, this.blockW * 1.15, this.blockH * 1.112);
      return;
    }
    this.ctx.drawImage(IMG_SARU[this.right][this.open][this.type], this.x * this.BLOCK_W, this.y * this.BLOCK_H, this.blockW, this.blockH);
  }

  jump() { this.isJumping = true; }//animation起動のフラグを立てる
  fall() { this.isFalling = true; }//animation起動のフラグを立てる

  update(state) {
    this.type = state;
    if (this.isJumping && this.y > 2) {//やられ時のジャンプアニメーション
      this.y -= 1;
    } else { this.isJumping = false; }
    if (this.isFalling && this.y < (CONFIG.FIELD_ROW + this.h + 1)) {//やられ時の落下アニメーション
      this.y += 1;
    } else {
      this.isFalling = false;
    }
  }


}

export default Saru;
