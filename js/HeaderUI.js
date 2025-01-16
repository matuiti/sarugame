import { Images } from './index.js'
import { GAME_STATE } from './index.js'
const IMAGES = new Images;
const IMG = {
  icon: [IMAGES.icon_0, IMAGES.icon_1, IMAGES.icon_2, IMAGES.icon_3],
  life: [0, IMAGES.life_1, IMAGES.life_2, IMAGES.life_3, IMAGES.life_4, IMAGES.life_5],
  num_now: [IMAGES.num_now_0, IMAGES.num_now_1, IMAGES.num_now_2, IMAGES.num_now_3, IMAGES.num_now_4, IMAGES.num_now_5, IMAGES.num_now_6, IMAGES.num_now_7, IMAGES.num_now_8, IMAGES.num_now_9],
  num_max: [IMAGES.num_max_0, IMAGES.num_max_1, IMAGES.num_max_2, IMAGES.num_max_3, IMAGES.num_max_4, IMAGES.num_max_5, IMAGES.num_max_6, IMAGES.num_max_7, IMAGES.num_max_8, IMAGES.num_max_9],
  num_score: [IMAGES.num_score_0, IMAGES.num_score_1, IMAGES.num_score_2, IMAGES.num_score_3, IMAGES.num_score_4, IMAGES.num_score_5, IMAGES.num_score_6, IMAGES.num_score_7, IMAGES.num_score_8, IMAGES.num_score_9],
  score_title: IMAGES.score_title,
  count_panel: IMAGES.count_panel
}
class HeaderUI {
  constructor() {
    this.reset();
  }
  reset() {
    this.icon_type = 0; //0:通常, 1:叫び, 2:ダウン, 3:appleTime
  }
}