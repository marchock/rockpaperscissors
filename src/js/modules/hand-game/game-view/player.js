import icons from './icons';

 /* Tracks a player's game progress
  * @Class
  */
class Player {
  /* Create a player
   * @param: {array} outcomes - specified outcomes [rock, paper, scissors]
   * @param: {string} player
   * @param: {string} playerType
   * @param: {object} ele - DOMElement
   * @param: {object} settings
   */
  constructor(handSigns, player, playerType, ele, settings) {

    /* a list of handSigns example: ['rock', 'paper', 'scissors']
     * @array
     */
    this.handSigns = handSigns;

    /* player 1 or player 2
     * @string
     */
    this.player = player;

    /* Type of player "computer" or "player"
     * @string
     */
    this.playerType = playerType;

    /* Saves a player's hand sign 'rock', 'paper', 'scissors'
     * @string
     */
    this.savedHandSign = '';

    /* A reference to an element
     * @object
     */
    this.$ele = ele.querySelector(`.${player}`);

    /* A reference to an element
     * @object
     */
    this.$score = this.$ele.querySelector('.score');

    /* A reference to an element
     * @object
     */
    this.$playerName = this.$ele.querySelector('.player-name');

    this.updatePlayerName(this.playerType);
    this.createScoreBoard(Math.round(settings.getBestOf() / 2))
  }

  /* update element with player name
   * @param {string}
   * @return {void}
   */
  updatePlayerName(name) {
    this.$playerName.innerHTML = `<span>${name}</span>`;
  }

  /* Create scoreboard
   * @param {number} num
   * @return {void}
   */
  createScoreBoard(num) {
    let span = null;

    for (let i = 0; i < num; i += 1) {
      span = document.createElement('span');
      this.$score.appendChild(span);
    }
  }

  /* Update a player's scoreboard
   * @param {number} num
   * @return {void}
   */
  updateScoreBoard(num) {
    let spanElements = this.$score.querySelectorAll('span');

    for (let i = 0; i < num; i += 1) {
      spanElements[i].setAttribute('class', 'highlight');
    }

    if (spanElements.length > num) {
      this.removeIcon();
    } else if (spanElements.length === num) {
      // player has won a game
      this.$ele.style.backgroundSize = '60%';
      this.updateElement('winner');
      this.updatePlayerName(`${this.playerType} wins!!!`)
    }
  }

  /* Returns a hand sign from a player
   * @return {string}
   */
  getHandSign() {
    let string = ''
    switch (this.playerType) {
    case 'computer':
      string = this.handSigns[this.getRandomNumber()];
      this.updateElement(string);
      break;

    case 'player':
      string = this.savedHandSign;
      this.savedHandSign = '';
      break;
    }
    return string;
  }

  /* Save an outcome from a player not a computer
   * @param {string}
   * @return {void}
   */
  saveHandSign(handSign) {
    this.savedHandSign = handSign;
    this.updateElement(handSign);
  }

  /* Get a random number inbetween 0 to handSigns.length
   * @return {number}
   */
  getRandomNumber() {
    return Math.floor((Math.random() * this.handSigns.length));
  }

  /* Remove background image from player element
   * @return {void}
   */
  removeIcon() {
    this.$ele.style.backgroundImage = '';
  }

  /* Update element with background image
   * @param {string} outcome
   * @return {void}
   */
  updateElement(outcome) {
    this.$ele.style.backgroundImage = `url('${icons[outcome]}')`;
  }
}

export default Player;
