import GameTemplate from '../game-template';

class GamePlayerName extends GameTemplate {

  constructor(ele) {
    super(ele, {
      name: 'game-player-name',
      element: 'div',
      className: 'game-player__name'
    });

    this.isPlayer1 = ele.classList.contains('player-1');
  }

  init(name) {
    this.player = this.isPlayer1 ? 'computer' : name;
    this.update(this.player);
  }

  update(name) {
    this.$ele.innerHTML = `<span>${name}</span>`;
  }

  isAWinner() {
    this.update(`${this.player} wins!!!`);
  }

  reset() {
    this.$ele.innerHTML = '';
    this.player = '';
  }
}

export default GamePlayerName;
