import html from './game.html';
import GamePlayer from './game-player/game-player';
import GameSettings from './game-settings/game-settings';
import GameQuitButton from './game-quit-button/game-quit-button';
import GameButtons from './game-buttons/game-buttons';
import GamePopUpText from './game-popup-text/game-popup-text';
import { getGameData } from './game-data';


class Game {
  constructor(ele) {
    ele.innerHTML = html;
    this.$game = ele.querySelector('.game');

    this.player1 = new GamePlayer(this.$game);
    this.player2 = new GamePlayer(this.$game);
    this.gameButtons = new GameButtons(this.$game, this);
    this.settings = new GameSettings(this.$game, this);
    this.popUpText = new GamePopUpText(this.$game, this);

    new GameQuitButton(this.$game, this);
  }


  start(settings) {
    this.gameButtons.init(settings);
    this.player1.init(settings);
    this.player2.init(settings);
    this.timer();
  }


  /* Counts up to three
   * @return {void}
   */
  timer() {
    clearTimeout(this.gameTimer);
    this.gameTimer = setTimeout(() => {
      if (this.popUpText.gameCounter()) {
        this.timer();
      } else {
        // Remove all child elements
        this.popUpText.clear();
        // Disable game buttons
        this.gameButtons.disable(true);
        this.pointWon();
      }
    }, 1000);
  }

  /* Identifies if there is another round to play or player has won
   * @return {void}
   */
  nextRound() {
    if (this.settings.settings.opponent === 'player') this.gameButtons.disable(false);

    this.popUpText.clear();

    if (this.gameOver()) {
      this.gameButtons.disable(true);
    } else {
      this.player1.handsign.clear();
      this.player2.handsign.clear();
      this.timer();
    }
  }

  gameOver() {
    return this.player1.isAWinner() || this.player2.isAWinner();
  }

  /* Identifies which player won or if it's a draw.
   * @param {string} p1
   * @param {string} p2
   * @return {void}
   */
  pointWon() {
    let p1 = this.player1.handsign.get(this.settings);
    let p2 = this.player2.handsign.get(this.settings);

    /* Receives which player won and how the player won
     * @object
     */
    let point = null

    // if player2 did not select a hand sign then player2 will automatically lose.
    if (!p2) {
      point = {
        wonBy: 'player1',
        message: `${p1} beats nothing selected`
      };

    } else {
      // Does player1 handsign beat player2 handsign
      point = this.searchOutcomes(p1, p2, 'player1');

      // if player one did not win then
      // Does player2 handsign beat player1 handsign
      if (!point) point = this.searchOutcomes(p2, p1, 'player2');
    }

    // if a point was won
    if (point) {
      this[point.wonBy].pointWon(point);
      this.popUpText.update(point.message);

    } else {
      this.popUpText.update('Draw');
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
  searchOutcomes(handsign1, handsign2, wonBy) {
    /* Get all outcomes for the game
     * @object
     */
    let outcomes = getGameData(this.settings.settings.gameType);
    let point = outcomes[handsign1].find((obj) => obj.beats === handsign2);

    if (point) {
      return {
        wonBy,
        message: `${handsign1} ${point.how} ${point.beats}`
      };
    }
  }

  reset() {
    clearTimeout(this.gameTimer);
    this.player1.reset();
    this.player2.reset();
    this.gameButtons.reset();
    this.settings.showForm();
    this.popUpText.reset();
  }
}


export default Game;
