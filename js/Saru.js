import { Images, Config, Rope } from './index.js';
const IMAGES = new Images;
const CONFIG = new Config;
const ROPE = new Rope;
const BLOCK_W = CONFIG.BLOCK_W;
const BLOCK_H = CONFIG.BLOCK_H;

const IMG_SARU = [ //images[ right ][ open ][ type ] ・・・ images[ 0~1 ][ 0~1 ][ 0~3 ]
  [//左向き
    [//閉
      [IMAGES.saru_close_l,IMAGES.saru_close_s_l,IMAGES.saru_close_d_l,IMAGES.saru_close_apple_l]// [ 普通, 叫び, ダウン, アップルタイム ]
    ],
    [//開
      [IMAGES.saru_open_l,IMAGES.saru_open_s_l,IMAGES.saru_open_d_l,IMAGES.saru_open_apple_l]// [ 普通, 叫び, ダウン, アップルタイム ]
    ]
  ],
  [//右向き
    [//閉
      [IMAGES.saru_close,IMAGES.saru_close_s,IMAGES.saru_close_d,IMAGES.saru_close_apple]// [ 普通, 叫び, ダウン, アップルタイム ]
    ],
    [//開
      [IMAGES.saru_open,IMAGES.saru_open_s,IMAGES.saru_open_d,IMAGES.saru_open_apple]// [ 普通, 叫び, ダウン, アップルタイム ]
    ]
  ]
]
class Saru {
  constructor() {
    this.w = CONFIG.BLOCK_W * 4;
    this.h = CONFIG.BLOCK_H * 6;
    this.vx= CONFIG.BLOCK_W;
    this.reset();
  }
  reset() {//初期化
    this.x = CONFIG.SCREEN_W/2 - this.w/2;
    this.y = ROPE.y - ROPE.h;
    this.right = 1;// 0:左向き, 1:右向き
    this.open  = 1;// 0:閉じポーズ, 1:開きポーズ
    this.type  = 0;// 0:普通, 1:叫び, 2:ダウン, 3:アップルタイム
    this.appleTime = 0;// 0:false, 1:true
  }
  setAppleTime(appleTime) {//アップルタイムのON,OFF
    this.appleTime = appleTime;
    this.type = 3;
  }
  checkAppleTime() { return this.appleTime; } //アップルタイム中かどうか true or false

  draw( ctx ){
    ctx.drawImage( IMG_SARU[ right ][ open ][ type ], this.x*BLOCK_W, this.y*BLOCK_H, this.w, this.h );
  }
  // toOver(){}
}

export default Saru;