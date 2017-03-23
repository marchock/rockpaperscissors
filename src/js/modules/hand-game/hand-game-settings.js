// DEV-NOTES:
// - ES6 does not support private properties
// - Using WeakMap() to create a private properties

// supporting links for WeakMap()
// http://davidvujic.blogspot.co.uk/2015/03/what-wait-really-oh-no-a-post-about-es6-classes-and-privacy.html
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

// Installing pollyfill to support ie9 and ie10
// https://babeljs.io/docs/usage/polyfill/

let game_type = new WeakMap();
let best_of = new WeakMap();
let verses = new WeakMap();


 /* Game Settings
  * @Class
  */
class HandGameSettings {

  constructor() {

    /* Set a game type to "default" or "variation"
     * @param {object} this
     * @param {string} 'default'
     */
    game_type.set(this, 'default');

     /* Set a number of attempts to win a game 1, 3, 5
      * @param {object} this
      * @param {number} 1
      */
    best_of.set(this, 1);

     /* Set an opponent the computer should face. "player" or "computer"
      * @param {object} this
      * @param {string} 'player'
      */
    verses.set(this, 'player');
  }

  /* return a game type "default" or "variation"
   * @return {string}
   */
  getGameType() {
    return game_type.get(this);
  }

  /* sets a game type to "default" or "variation"
   * @param {string} gameType
   * @return {void}
   */
  setGameType(gameType) {
    if (typeof gameType === 'string') {
      game_type.set(this, gameType);
    } else {
      console.error('setGameType(@param) @param is not a String');
    }
  }

  /* return a number of attempts to win a game 1, 3 or 5
   * @return {number}
   */
  getBestOf() {
    return best_of.get(this);
  }

  /* set a number of attempts to win a game 1, 3 or 5
   * @param {number} number
   * @return {void}
   */
  setBestOf(number) {
    if (typeof number === 'number') {
      best_of.set(this, number);
    } else {
      console.error('setBestOf(@param) @param is not a Number');
    }
  }

  /* return an opponent the computer should face. "compurter" or "player"
   * @return {string}
   */
  getVerses() {
    return verses.get(this);
  }

  /* set an opponent the computer should face. "compurter" or "player"
   * @param {string} opponent
   * @return {void}
   */
  setVerses(opponent) {
    if (typeof opponent === 'string') {
      verses.set(this, opponent);
    } else {
      console.error('setVerses(@param) @param is not a String');
    }
  }
}

// Singleton pattern
export let settings = new HandGameSettings();
