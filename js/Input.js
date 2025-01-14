//----------------ゲーム操作の処理-------------------------------------------------------
// スマホ
let turn = false;
let tapCount = 0;
// let saruDash_l   =false;
// let saruDash_l_t =false;
// let saruDash_r   =false;
// let saruDash_r_t =false;

let board_l = document.getElementById("left");
let board_r = document.getElementById("right");
board_l.addEventListener("touchstart", touchLeft, { passive: false }, { once: true });
board_r.addEventListener("touchstart", touchRight, { passive: false }, { once: true });

/* タップ操作の処理 */
function touchLeft(e) {
  e.preventDefault();
  if (over) return;
  // bgm.currentTime = 0;
  // bgm.play();
  if ((saru_x <= 0) || hit) return;/*移動制限*/
  // se_move.currentTime = 0;
  // se_move.play();
  ctxPlay.clearRect(saru_x, saru_y, SARU_W, SARU_H);
  dir_r = false;
  saru_x -= SARU_SPEED;

  // シングルタップの場合
  if (!tapCount) {
    ++tapCount;
    if (appleTime) {
      if ((saru_t === saruType[0][3]) || (saru_t === saruType[2][3])) saru_t = saruType[3][3];
      else saru_t = saruType[2][3];
    } else {
      if ((saru_t === saruType[0][0]) || (saru_t === saruType[2][0])) saru_t = saruType[3][0];
      else saru_t = saruType[2][0];
    }

    // 350ミリ秒だけ、タップ回数を維持
    setTimeout(function () {
      tapCount = 0;
    }, 147);

    // ダブルタップの場合
  }
  // else {
  //   hit = true;
  //   saru_x += BLOCK_W * 3;
  //   setTimeout(dashL, 500);
  //   function dashL() {
  //     se_dash.currentTime = 0;
  //     se_dash.play();
  //     saruDash_l = setInterval(function () {
  //       if (saru_x >= 0) {
  //         saru_t = saruType[5][1];
  //         saru_x -= SARU_SPEED;
  //         if (saru_x <= 0) {
  //           saru_x = 0;
  //           clearInterval(saruDash_l);
  //           saruDash_l_t = setInterval(function () {
  //             saru_t = saruType[4][1];
  //             saru_x += SARU_SPEED;
  //             if (saru_x >= (SCREEN_W - SARU_W)) {
  //               saru_x = SCREEN_W - SARU_W;
  //               turn = true;
  //             }
  //           }, 30)
  //         }
  //       }
  //     }, 30)
  //   }

  //   tapCount = 0;

  // }

  gameLoop();
}
function touchRight(e) {
  e.preventDefault();
  if (over) return;
  // bgm.currentTime = 0;
  // bgm.play();
  if ((saru_x >= (SCREEN_W - SARU_W)) || hit) return;/*移動制限*/
  // se_move.currentTime = 0;
  // se_move.play();
  ctxPlay.clearRect(saru_x, saru_y, SARU_W, SARU_H);
  dir_r = true;
  saru_x += SARU_SPEED;

  // シングルタップの場合
  if (!tapCount) {

    // タップ回数を増加
    ++tapCount;

    if (appleTime) {
      if ((saru_t === saruType[0][3]) || (saru_t === saruType[2][3])) saru_t = saruType[1][3];
      else saru_t = saruType[0][3];
    } else {
      if ((saru_t === saruType[0][0]) || (saru_t === saruType[2][0])) saru_t = saruType[1][0];
      else saru_t = saruType[0][0];
    }

    // 350ミリ秒だけ、タップ回数を維持
    setTimeout(function () {
      tapCount = 0;
    }, 147);

    // ダブルタップの場合
  }
  // else {
  // 	hit=true;
  // 	saru_x-=BLOCK_W*3;
  // 	setTimeout(dashR,500);
  // 	function dashR()
  // 	{
  // 		se_dash.currentTime = 0;
  // 		se_dash.play();
  // 		saruDash_r = setInterval(function()
  // 		{
  // 			if(saru_x <= ( SCREEN_W - SARU_W ))
  // 			{
  // 				saru_t  =saruType[4][1];
  // 				saru_x += SARU_SPEED;
  // 				if(saru_x >= ( SCREEN_W - SARU_W ))
  // 				{
  // 					saru_x = SCREEN_W - SARU_W;
  // 					clearInterval(saruDash_r);
  // 					saruDash_r_t = setInterval(function()
  // 					{
  // 						saru_t=saruType[5][1];
  // 						saru_x -= SARU_SPEED;
  // 						if(saru_x <= 0)
  // 						{
  // 							saru_x=0;
  // 							turn=true;
  // 						}
  // 					},30)
  // 				}
  // 			}
  // 		},30)
  // 	}
  // 	tapCount = 0 ;
  // }

  gameLoop();
}

//PC
//キーボードが押された時の処理
document.onkeydown = function (e) {
  if (over) return;
  // bgm.currentTime = 0;
  // bgm.play();
  if (e.keyCode == 37) {
    if ((saru_x <= 0) || hit) return;/*移動制限*/
    // se_move.currentTime = 0;
    // se_move.play();
    ctxPlay.clearRect(saru_x, saru_y, SARU_W, SARU_H);
    dir_r = false;
    saru_x -= SARU_SPEED;
    if (appleTime) {
      if ((saru_t === saruType[0][3]) || (saru_t === saruType[2][3])) saru_t = saruType[3][3];
      else saru_t = saruType[2][3];
    } else {
      if ((saru_t === saruType[0][0]) || (saru_t === saruType[2][0])) saru_t = saruType[3][0];
      else saru_t = saruType[2][0];
    }
    gameLoop();
  } else if (e.keyCode == 39) {
    if ((saru_x >= (SCREEN_W - SARU_W)) || hit) return;/*移動制限*/
    // se_move.currentTime = 0;
    // se_move.play();
    ctxPlay.clearRect(saru_x, saru_y, SARU_W, SARU_H);
    dir_r = true;
    saru_x += SARU_SPEED;
    if (appleTime) {
      if ((saru_t === saruType[0][3]) || (saru_t === saruType[2][3])) saru_t = saruType[1][3];
      else saru_t = saruType[0][3];
    } else {
      if ((saru_t === saruType[0][0]) || (saru_t === saruType[2][0])) saru_t = saruType[1][0];
      else saru_t = saruType[0][0];
    }
    gameLoop();
  }
}
//----------------↑操作処理↑ココまで-------------------------------------------------------