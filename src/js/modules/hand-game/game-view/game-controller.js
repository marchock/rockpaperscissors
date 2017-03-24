import { getGameData } from '../hand-game-data';

/* Game controller
 * @Class
 */
class GameController {

  /* Create a game controller
   * @param: {object} ele - DOMElement
   * @param: {object} ref
   */
  constructor(ele, ref) {

    /* A reference to the gameView
     * @object
     */
    this._gameView = ref;

    /* A reference to the game-counter element
     * @object
     */
    this.$eleGameCounter = ele.querySelector('.game-counter');

    /* Each array value will be injected into the game-counter element one at a time
     * @array
     */
    this.gameCounter = ['Ready', 'One', 'Two', 'Three'];

    /* To be used with this.gameCounter
     * @number
     */
    this.counter = 0;

    /* To keep track of players scores and how players won a point
     * @object
     */
    this.score = {
      p1: 0,
      p2: 0,
      scoreToWin: this.scoreToWin(this._gameView.settings.getBestOf()),
      winner: []
    }

    this.timer();
  }

  /* Returns the amount of points a player must win, to win a game best out of 1, 3 or 5.
   * @param {number} num
   * @return {number}
   */
  scoreToWin(num) {
    return Math.round(num / 2);
  }

  /* Identifies which player won or a draw.
   * @param {string} p1
   * @param {string} p2
   * @return {void}
   */
  winner(p1, p2) {

    /* Will recieve which player won and how the player won
     * @object
     */
    let winner = null

    // if player2 did not select a hand sign then player2 will automatically lose.
    if (!p2) {
      winner = {
        player: 'p1',
        message: `${p1} beats nothing selected`
      };

    } else {
      // Does player1 handsign beat player2 handsign
      winner = this.searchOutcomes(p1, p2, 'p1');

      if (!winner) {
        // Does player2 handsign beat player1 handsign
        winner = this.searchOutcomes(p2, p1, 'p2');
      }
    }

    if (winner) {
      this.score[winner.player] += 1;
      this.score.winner.push(winner);
      this.updateH3Element(winner.message);
    } else {
      this.updateH3Element('Draw');
    }

    this.delay = setTimeout(() => {
      this.nextRound();
    }, 2000);
  }

  /* Searches outcomes to find which player won
   * @param {string} handsign1
   * @param {string} handsign2
   * @param {string} player
   * @return {obect}
   */
  searchOutcomes(handsign1, handsign2, player) {
    /* Get all outcomes for the game
     * @object
     */
    let outcomes = getGameData();
    let winner = null;

    outcomes[handsign1].map((obj) => {
      if (obj.beats === handsign2) {
        winner = {
          player: player,
          message: `${handsign1} ${obj.how} ${obj.beats}`
        };
      }
    });
    return winner;
  }

  /* Identifies if there is another round to play or player has won
   * @return {void}
   */
  nextRound() {
    this.enableGameButtons();
    // Remove all child elements
    this.$eleGameCounter.innerHTML = '';
    if (this.score.scoreToWin === this.score.p1 ||
        this.score.scoreToWin === this.score.p2) {

      this.disableGameButtons();

    } else {
      this.timer();
    }

    this._gameView.player1.updateScoreBoard(this.score.p1);
    this._gameView.player2.updateScoreBoard(this.score.p2);
  }

  /* Disables game buttons if player is playing
   * @return {void}
   */
  disableGameButtons() {
    if (this._gameView.settings.getVerses() === 'player') {
      this._gameView.gameButtons.lockButtons();
    }
  }

  /* enables game buttons if player is playing
   * @return {void}
   */
  enableGameButtons() {
    if (this._gameView.settings.getVerses() === 'player') {
      this._gameView.gameButtons.unlockButtons();
    }
  }

  /* Counts up to three
   * @return {void}
   */
  timer() {
    clearTimeout(this.gameTimer);
    this.gameTimer = setTimeout(() => {
      if (this.counter <= 3) {
        // Remove all child elements
        this.$eleGameCounter.innerHTML = '';
        this.updateH3Element(this.gameCounter[this.counter]);
        this.counter += 1;
        this.timer();
      } else {
        // Reset counter for the next round
        this.counter = 0;
        // Remove all child elements
        this.$eleGameCounter.innerHTML = '';
        // Disable game buttons
        this.disableGameButtons();

        this._gameView.getHandSignFromPlayers();
      }
    }, 1000);
  }

  /* Append child with new value
   * @param {string}
   * @return {void}
   */
  updateH3Element(string) {
    let h3 = document.createElement('h3');
    let text = document.createTextNode(string);
    h3.appendChild(text);
    this.$eleGameCounter.appendChild(h3);
  }

  /* Reset
   * @return {void}
   */
  reset() {
    clearTimeout(this.gameTimer);
    clearTimeout(this.delay);
  }
}

export default GameController;
