import GameTemplate from '../game-template';
import gameImages from '../game-images';
import {store} from '../../../components/dataStore/dataStore';
import * as _ from 'lodash';

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
    this.handSigns = null;

    store.game$.subscribe(this);
  }

  /* Create GameButtons
   * @param: {object} settings - { gameType, opponent }
   */
  next(data) {

    if (data === undefined || _.isEqual(data.handSigns, this.handSign)) return;

    this.handSign = data.handSigns;

    if (this.handSign.length < 1) {
      return;
    }

    this.removeButtons();

    this.disableAllButtons = data.settings.opponent === 'computer' ? true : false;
    this.disable(this.disableAllButtons);

    for (let handSign of this.handSign) {
      let element = this.createButton(handSign, this.handSign.length);
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
    //this.handSigns = null;
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
        //this.player2.handsign.update(handSign);

        store.updatePlayer('player2', { handSign });
      }).bind(this), false);
    }
    return div;
  }
}
 export default GameButtons;
