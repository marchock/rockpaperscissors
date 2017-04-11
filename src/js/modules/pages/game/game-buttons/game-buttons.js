import GameTemplate from '../game-template';
import { getHandSigns } from '../game-data';
import gameImages from '../game-images';
//import icons from './icons';

/* Create game buttons for a user to select a hand sign
 * @Class
 */
class GameButtons extends GameTemplate {

  /* Create GameButtons
   * @param: {object} ele - DOMElement
   * @param: {object} ref
   */
  constructor(ele, { player2 }) {
    super(ele, {
      name: 'game-buttons',
      element: 'div',
      className: 'game-buttons'
    });

    this.player2 = player2;
  }

  /* Create GameButtons
   * @param: {object} settings - { gameType, opponent }
   */
  init({ gameType, opponent }) {
    this.removeButtons();
    this.disableAllButtons = opponent === 'computer' ? true : false;
    this.disable(this.disableAllButtons);

    this.handSigns = getHandSigns(gameType);

    for (let handSign of this.handSigns) {
      let element = this.createButton(handSign, this.handSigns.length);
      this.$ele.appendChild(element);
    }
  }

  /* - If "computer" is selected as an opponent, buttons are locked.
   * - Buttons are locked to a player when a game is under initial count.
   * @return {void}
   */
  disable(isDisabled) {
    this.disableAllButtons = isDisabled;
    let classname = isDisabled ? 'disabled' : ''
    this.$ele.setAttribute('class', `game-buttons ${classname}`);
  }

  /* Removes child elements
   */
  removeButtons() {
    this.$ele.innerHTML = '';
  }

  /* Reset class to initial state
   */
  reset() {
    this.removeButtons();
    this.disable(false);
  }

  /* Creates a button element and registers a click event
   * @param {string} handSign
   * @param {object} index
   * @return {object}
   */
  createButton(handSign, index) {
    let div = document.createElement("div");
    div.setAttribute('style', `width: ${100 / index}%;`);
    div.innerHTML = `
      <p>
        <img src="${gameImages[handSign]}">
        <span>${handSign}</span>
      </p>
    `;

    if (!this.disableAllButtons) {
      div.addEventListener('click', (function() {
        // block click if buttons disabled
        if (this.disableAllButtons) return;
        // Player method registered to every game button
        this.player2.handsign.update(handSign);
      }).bind(this), false);
    }
    return div;
  }
}
 export default GameButtons;
