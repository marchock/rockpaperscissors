import gameImages from '../game-images';
import { store } from '../../../components/dataStore/dataStore';

class GamePlayerHandsign {

  constructor(ele, isPlayer1) {
    this.$ele = ele;
    this.handsign = '';
    this.player =  isPlayer1 ? 'player1' : 'player2';
    store.game$.subscribe(this);
  }

  next(data) {
    if (data === undefined || data[this.player].handSign === this.handSign) return;

    this.handSign = data[this.player].handSign;
    if (this.handSign === '') {
      this.clear();
    } else {
      this.update(this.handSign);
    }
  }

  init(player) {
    this.nameOfPlayer = player;
  }

  update(outcome) {
    this.handsign = outcome;
    this.$ele.style.backgroundImage = `url('${gameImages[outcome]}')`;
  }

  clear() {
    this.handsign = '';
    this.$ele.style.backgroundImage = '';
  }

  reset() {
    this.clear();
    this.$ele.style.backgroundSize = '';
  }
}

export default GamePlayerHandsign;
