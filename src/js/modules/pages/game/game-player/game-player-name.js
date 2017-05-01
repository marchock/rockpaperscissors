import GameTemplate from '../game-template';
import { store } from '../../../components/dataStore/dataStore';
import * as _ from 'lodash';

class GamePlayerName extends GameTemplate {

  constructor(ele) {
    super(ele, {
      name: 'game-player-name',
      element: 'div',
      className: 'game-player__name'
    });
    store.game$.subscribe(this);
    this.isPlayer1 = ele.classList.contains('player-1');
    this.player = '';
  }

  next(data) {
    let player = this.isPlayer1 ? 'player1' : 'player2';
    if (data === undefined || _.isEqual(data[player], this.player)) return;
    this.player = data[player];
    this.update();
  }

  update() {
    this.$ele.innerHTML = `<span>${this.player.name}</span>`;
  }

  isAWinner() {
    this.update(`${this.player.name} wins!!!`);
  }

  reset() {
    this.$ele.innerHTML = '';
    this.player = '';
  }
}

export default GamePlayerName;
