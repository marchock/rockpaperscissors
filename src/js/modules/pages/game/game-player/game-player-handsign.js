import { getRandomHandSign } from '../game-data';
import gameImages from '../game-images';


class GamePlayerHandsign {

  constructor(ele) {
    this.$ele = ele;
    this.handsign = '';
  }

  init(player) {
    this.nameOfPlayer = player;
  }

  isAWinner() {
    this.$ele.style.backgroundSize = '60%';
    this.update('winner');
  }

  update(outcome) {
    this.handsign = outcome;
    this.$ele.style.backgroundImage = `url('${gameImages[outcome]}')`;
  }

  clear() {
    this.handsign = '';
    this.$ele.style.backgroundImage = '';
  }

  get(settings) {
    return this[this.nameOfPlayer](settings);
  }

  computer(settings) {
    let handsign = getRandomHandSign(settings);
    this.update(handsign);
    return handsign;
  }

  player() {
    let handsign = this.handsign;
    this.handsign = '';
    return handsign;
  }

  reset() {
    this.clear();
    this.$ele.style.backgroundSize = '';
  }
}

export default GamePlayerHandsign;
