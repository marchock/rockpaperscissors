import html from './game-view.html';
import { settings } from '../hand-game-settings';
import { getHandSigns } from '../hand-game-data';
import Player from './player';
import GameController from './game-controller';
import GameButtons from './game-buttons';

/* Loads game-view.html into the DOM
 * @Class
 */
class GameView {

  /* Creates a game view
   * @param: {object} ele - DOMElement
   */
  constructor(ele) {
    /* A reference to hand-game element
     * @object
     */
    this.$ele = ele;

    /* a copy of game-view.html
     * @object
     */
    this.html = html;
  }

  /* Injects game-view.html into the DOM
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

    /* Injects HTML into an element
     * @object
     */
    this.$ele.innerHTML = this.html;

    /* Creates an instance of Player()
     * @object
     */
    this.player1 = new Player(
      getHandSigns(), 'player1', 'computer', this.$ele, settings
    );

    /* Creates an instance of Player()
     * @object
     */
    this.player2 = new Player(
      getHandSigns(), 'player2', this.settings.getVerses(), this.$ele, settings
    );

    /* Creates an instance of GameButtons()
     * @object
     */
    this.gameButtons = new GameButtons(this.$ele, getHandSigns(), this);

    /* Creates an instance of GameController()
     * @object
     */
    this.gameController = new GameController(this.$ele, this);

    this.setupQuitButton(this.$ele.querySelector('.quit-button'));
  }


  /* This method is triggered from the "GameController" to get the player hand sign
   * @return {void}
   */
  getHandSignFromPlayers() {
    /* Gets a hand sign from player 1
     * @string
     */
    let p1 = this.player1.getHandSign();

    /* Gets a hand sign from player 2
     * @string
     */
    let p2 = this.player2.getHandSign();

    /* ## GameController()
     *
     */
    this.gameController.winner(p1, p2);
  }

  /* Quit game and return to start view
   * @return {void}
   */
  quitGame() {
    this.gameController.reset();
    this._handGame.loadStartView();
  }

  /* Applies a click event to the quit button and ends a game
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
