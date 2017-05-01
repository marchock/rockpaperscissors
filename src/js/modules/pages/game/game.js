import html from './game.html';
import GamePlayer from './game-player/game-player';
import GameSettings from './game-settings/game-settings';
import GameQuitButton from './game-quit-button/game-quit-button';
import GameButtons from './game-buttons/game-buttons';
import GamePopUpText from './game-popup-text/game-popup-text';

import {store} from '../../components/dataStore/dataStore';


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
    store.clearTextMessage();

    if (store.isGameOver()) {
      this.gameButtons.disable(true);
    } else {
      store.updatePlayer('player1', {handSign: ''});
      store.updatePlayer('player2', {handSign: ''});
      this.timer();
    }
  }

  /* Identifies which player won or if it's a draw.
   * @param {string} p1
   * @param {string} p2
   * @return {void}
   */
  pointWon() {
    store.updatePlayer('player1', null);
    store.updatePlayer('player2', null);
    store.whichPlayerWonPoint();

    this.delay = setTimeout(() => {
      this.nextRound();
    }, 2000);
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
