import { Images } from './index.js';
import { GAME_STATE } from './index.js';

const IMAGES = new Images();
const IMG = {
  icon: [IMAGES.icon_0, IMAGES.icon_1, IMAGES.icon_2, IMAGES.icon_3],
  life: [null, IMAGES.life_1, IMAGES.life_2, IMAGES.life_3, IMAGES.life_4, IMAGES.life_5], // nullは無効な値
  num_now: [IMAGES.num_now_0, IMAGES.num_now_1, IMAGES.num_now_2, IMAGES.num_now_3, IMAGES.num_now_4, IMAGES.num_now_5, IMAGES.num_now_6, IMAGES.num_now_7, IMAGES.num_now_8, IMAGES.num_now_9],
  num_max: [IMAGES.num_max_0, IMAGES.num_max_1, IMAGES.num_max_2, IMAGES.num_max_3, IMAGES.num_max_4, IMAGES.num_max_5, IMAGES.num_max_6, IMAGES.num_max_7, IMAGES.num_max_8, IMAGES.num_max_9],
  num_score: [IMAGES.num_score_0, IMAGES.num_score_1, IMAGES.num_score_2, IMAGES.num_score_3, IMAGES.num_score_4, IMAGES.num_score_5, IMAGES.num_score_6, IMAGES.num_score_7, IMAGES.num_score_8, IMAGES.num_score_9]
};

class HeaderUI {
  constructor() {
    this.iconElement = document.getElementById('icon');
    this.scoreElements = document.querySelectorAll('.box-num-score .num-score');
    this.lifeElement = document.querySelector('.box-life .life');
    this.bananaNowElements = document.querySelectorAll('.box-num-now .num-now');
    this.bananaMaxElements = document.querySelectorAll('.box-num-max .num-max');
  }

  init(iconIndex, newLife, newScore, currentBananas, maxBananas) {
    this.#updateIcon(iconIndex);
    this.#updateLife(newLife);
    this.#updateScore(newScore);
    this.#updateBananas(currentBananas);
    this.#setMaxBananas(maxBananas);
  }

  update(iconIndex, newLife, newScore, currentBananas) {
    this.#updateIcon(iconIndex);
    this.#updateLife(newLife);
    this.#updateScore(newScore);
    this.#updateBananas(currentBananas);
  }

  #updateIcon(iconIndex) {
    this.iconElement.src = IMG.icon[iconIndex].src;
  }

  #updateLife(newLife) {
    this.lifeElement.src = IMG.life[newLife] ? IMG.life[newLife].src : '';
  }

  #updateScore(newScore) {
    const scoreStr = String(newScore).padStart(this.scoreElements.length, '0');
    this.scoreElements.forEach((element, index) => {
      element.src = IMG.num_score[parseInt(scoreStr[index], 10)].src;
    });
  }

  #updateBananas(currentBananas) {
    const currentStr = String(currentBananas).padStart(this.bananaNowElements.length, '0');
    this.bananaNowElements.forEach((element, index) => {
      element.src = IMG.num_now[parseInt(currentStr[index], 10)].src;
    });
  }

  #setMaxBananas(maxBananas) {
    const maxStr = String(maxBananas).padStart(this.bananaMaxElements.length, '0');
    this.bananaMaxElements.forEach((element, index) => {
      element.src = IMG.num_max[parseInt(maxStr[index], 10)].src;
    });
  }
}

export default HeaderUI;
