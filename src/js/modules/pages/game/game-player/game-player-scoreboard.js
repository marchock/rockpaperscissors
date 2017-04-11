import GameTemplate from '../game-template';

class GamePlayerScoreboard extends GameTemplate {

  constructor(ele) {
    super(ele, {
      name: 'game-player-scoreboard',
      element: 'div',
      className: 'game-player__score'
    });

    this.score = 0;
    this.maximumGamePoints = 1;
  }

  /* Creates scoreboard
   * @param {number} num
   */
  create(points) {
    this.maximumGamePoints = Math.round(points / 2);
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
  update(callback) {
    this.score += 1;
    let spanElements = this.$ele.querySelectorAll('span');

    Array.from(spanElements).forEach((span, index) => {
      if (index < this.score) span.setAttribute('class', 'highlight');
    });

    if (spanElements.length === this.score) callback();
  }

  reset() {
    this.$ele.innerHTML = '';
    this.score = 0;
  }
}

export default GamePlayerScoreboard;
