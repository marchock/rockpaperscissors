import icons from './icons';

/* Create game buttons
 * @Class
 */
class GameButtons {

  /* Create a game buttons
   * @param: {object} ele - DOMElement
   * @param: {array} handSigns
   * @param: {object} ref
   */
  constructor(ele, handSigns, ref) {

    /* Reference for GameView class
     * @Object
     */
    this._gameView = ref;

    /* A reference to an element
     * @object
     */
    this.$container = ele.querySelector('.game-buttons');

    // if opponent is "computer" then lock buttons
    if (this._gameView.settings.getVerses() === 'computer') {
      this.$container.setAttribute('class', 'game-buttons lock');
    }

    /* Bind "this" to method
     * @method
     */
    this.onClickOutcome = this.onClickOutcome.bind(this);

    this.setupGameButtons(handSigns);
    this.disable = false;
  }

  /* this method is called by an event click attached to game buttons
   * @param {string} handSign
   * @return {void}
   */
  onClickOutcome(handSign) {
    if (this.disable) return;
    this._gameView.player2.saveHandSign(handSign);
  }

  /* Create game button for each hand sign in the array
   * @param {array} handSigns
   * @return {void}
   */
  setupGameButtons(handSigns) {
    // delete all child elements
    this.$container.innerHTML = '';
    handSigns.map((string) => {
      this.$container.appendChild(this.createButton(string, handSigns.length))
    });
  }

  /* Lock buttons if computer is an opponent or when a player's time is up to
   * to select a hand sign.
   * @return {void}
   */
  lockButtons() {
    this.disable = true;
    this.$container.setAttribute('class', 'game-buttons lock');
  }

  /* Unlock buttons when another round is ready.
   * @return {void}
   */
  unlockButtons() {
    this.disable = false;
    this.$container.setAttribute('class', 'game-buttons');
  }

  /* Create a button
   * @return {object}
   */
  createButton(string, index) {
    let styles = `width: ${100 / index}%;`;
    let div = document.createElement("div");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let img = document.createElement("img");
    let text = document.createTextNode(string);

    img.src = icons[string];
    span.appendChild(text);
    p.appendChild(img);
    p.appendChild(span);
    div.appendChild(p);
    div.setAttribute('style', styles);

    if (this._gameView.settings.getVerses() === 'player') {
      div.addEventListener('click', (function() {
        this.onClickOutcome(string);
      }).bind(this), false);
    }

    return div;
  }
}

 export default GameButtons;
