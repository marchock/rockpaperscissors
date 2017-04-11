import GameTemplate from '../game-template';
import html from './game-quit-button.html';

class GameQuitButton extends GameTemplate {

  constructor(ele, ref) {
    super(ele, {
      name: 'game-quit-button',
      element: 'div',
      html: html,
      className: 'game-quit-button'
    });

    this._game = ref;
    this.settings = ref.settings;
    this.setupQuitButton(this.$ele);
  }

  /* Applies a click event to the quit button and ends a game
   * @param {object} ele - DOMElement
   * @return {void}
   */
  setupQuitButton(ele) {
    ele.addEventListener('click', (function() {
      this._game.reset();
    }).bind(this), false);
  }
}

export default GameQuitButton
