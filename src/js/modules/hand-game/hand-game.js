import StartView from './start-view/start-view';
import GameView from './game-view/game-view';

/* Initiates and loads the start and game view into the DOM.
 * @Class
 */
class HandGame {

  /* Creates a HandGame
   */
  constructor() {
    /* A reference to a hand-game element
     * @object
     */
    this.$ele = this.getElementHandGame('hand-game');

    /* An instance of StartView()
     * @object
     */
    this.startView = new StartView(this.$ele);

    /* An instance of GameView()
     * @object
     */
    this.gameView = new GameView(this.$ele);

    this.loadStartView();
  }

  /* Injects start view into the DOM
   * @return {void}
   */
  loadStartView() {
    this.startView.loadView(this);
  }

  /* Injects game view into the DOM
   * @return {void}
   */
  loadGameView() {
    this.gameView.loadView(this);
  }

  /* Returns a DIV element with an ID "hand-game"
   * @param {string} id
   * @return {object}
   */
  getElementHandGame(id) {
    if (document.getElementById(id)) {
      return document.getElementById(id);
    } else {
      // Testing requires a element to be created and returned
      let div = document.createElement('div');
      div.setAttribute('id', id);
      return div;
    }
  }
}

export default HandGame;
