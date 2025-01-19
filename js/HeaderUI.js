import { Images } from './index.js';
import { GAME_STATE } from './index.js';

const IMAGES = new Images();
const IMG = {
  icon: IMAGES.icons,
  life: IMAGES.lifes,
  num_now: IMAGES.num_now,
  num_max: IMAGES.num_max,
  num_score: IMAGES.num_score
};

class HeaderUI {
  constructor() {
    this.iconElement = document.getElementById('icon');
    this.scoreElements = document.querySelectorAll('.box-num-score .num-score img');
    this.lifeElement = document.querySelector('.box-life .life');
    this.bananaNowElements = document.querySelectorAll('.box-num-now .num-now');
    this.bananaMaxElements = document.querySelectorAll('.box-num-max .num-max');
  }

  init(iconIndex, newLife, newScore, currentBananas, maxBananas) {
    this.update(iconIndex, newLife, newScore, currentBananas);
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
