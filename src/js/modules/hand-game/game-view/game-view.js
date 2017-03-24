import html from './game-view.html';
import { settings } from '../hand-game-settings';
import { getHandSigns } from '../hand-game-data';
import Player from './player';
import GameController from './game-controller';
import GameButtons from './game-buttons';

/* Loads game-veiw.html into the DOM
 * @Class
 */
class GameView {

  /* Create a game view
   * @param: {object} ele - DOMElement
   */
  constructor(ele) {
    /* A reference to an element
     * @object
     */
    this.$ele = ele;

    /* a copy of game-view.html
     * @object
     */
    this.html = html;
  }

  /* inject game-view.html into the DOM
   * @param {object} ref
   * @return {void}
   */
  loadView(ref) {
    /* Reference for HandGame class
     * @Object
     */
    this._handGame = ref;

    /* Reference for hand-game-settings.js
     * @object
     */
    this.settings = settings;

    /* Injecting HTML into an element
     * @object
     */
    this.$ele.innerHTML = this.html;

    /* Creating an instance of Player()
     * @object
     */
    this.player1 = new Player(
      getHandSigns(), 'player1', 'computer', this.$ele, settings
    );

    /* Creating an instance of Player()
     * @object
     */
    this.player2 = new Player(
      getHandSigns(), 'player2', this.settings.getVerses(), this.$ele, settings
    );

    /* Creating an instance of GameButtons()
     * @object
     */
    this.gameButtons = new GameButtons(this.$ele, getHandSigns(), this);

    /* Creating an instance of GameController()
     * @object
     */
    this.gameController = new GameController(this.$ele, this);

    this.setupQuitButton(this.$ele.querySelector('.quit-button'));
  }


  /* This method is triggered from the "GameController" to get the player outcomes
   * @return {void}
   */
  getOutcomeFromPlayers() {
    /* Get outcome form player 1
     * @string
     */
    let p1 = this.player1.getHandSign();

    /* Get outcome form player 2
     * @string
     */
    let p2 = this.player2.getHandSign();

    this.gameController.winner(p1, p2);
  }

  /* Quit game and return to start view
   * @return {void}
   */
  quitGame() {
    this.gameController.reset();
    this._handGame.loadStartView();
  }

  /* Apply a click event to button to quit game
   * @param {object} ele - DOMElement
   * @return {void}
   */
  setupQuitButton(ele) {
    ele.addEventListener('click', (function() {
      this.quitGame();
    }).bind(this), false);
  }
}

export default GameView;
