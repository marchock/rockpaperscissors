import GameTemplate from '../game-template';
import { store } from '../../../components/dataStore/dataStore';

class GamePlayerScoreboard extends GameTemplate {

  constructor(ele, isPlayer1) {
    super(ele, {
      name: 'game-player-scoreboard',
      element: 'div',
      className: 'game-player__score'
    });

    this.score = null;
    this.player =  isPlayer1 ? 'player1' : 'player2';
    this.maximumGamePoints = null;
    store.game$.subscribe(this);
  }

  next(data) {
    this.maximumPointsUpdate(data);
    this.scoreUpdate(data);
  }

  scoreUpdate(data) {
    if (data === undefined || data[this.player].score === this.score) return;
    this.score = data[this.player].score;
    this.update();
  }

  maximumPointsUpdate(data) {
    if (data === undefined || data.maximumGamePoints === this.maximumGamePoints) return;
    this.maximumGamePoints = data.maximumGamePoints;
    this.create();
  }

  /* Creates scoreboard
   * @param {number} num
   */
  create() {
    this.$ele.innerHTML = '';
    let span = null;
    for (let i = 0; i < this.maximumGamePoints; i += 1) {
      span = document.createElement('span');
      this.$ele.appendChild(span);
    }
  }

  checkScore() {
    return this.maximumGamePoints <= this.score;
  }

  /* Updates a player's scoreboard
   * @param {number} num
   * @return {void}
   */
  update() {
    let spanElements = this.$ele.querySelectorAll('span');

    Array.from(spanElements).forEach((span, index) => {
      if (index < this.score) span.setAttribute('class', 'highlight');
    });
  }

  reset() {
    this.$ele.innerHTML = '';
    this.score = null;
    this.maximumGamePoints = null;
  }
}

export default GamePlayerScoreboard;
