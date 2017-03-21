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


/* Hand Game Settings
 *
 * keep track of the game settings
 */
class HandGameSettings {

  constructor() {

    /* @Private game_type: set property to 'default'
     * @Param: Object
     * @Param: String
     *
     * Set which game to play "default" or "variation"
     */
    game_type.set(this, 'default');

    /* @Private best_of: set property to 1
     * @Param: Object
     * @Param: Number
     *
     * Set the number of attempts to win a game 1, 3, 5.
     */
    best_of.set(this, 1);

    /* @Private verses: set property to 'player'
     * @Param: Object
     * @Param: String
     *
     * Set which opponent the computer should face. "player" or "computer"
     */
    verses.set(this, 'player');
  }

  /* getGameType()
   * @return: String
   *
   * return "default" or "variation"
   */
  getGameType() {
    return game_type.get(this);
  }

  /* setGameType()
   * @return: void()
   *
   * sets "default" or "variation"
   */
  setGameType(string) {
    if (typeof string === 'string') {
      game_type.set(this, string);
    } else {
      console.error('setGameType(@param) @param is not a String');
    }

  }

  /* getBestOf()
   * @return: Number
   *
   * return 1, 3, or 5
   */
  getBestOf() {
    return best_of.get(this);
  }

  /* setBestOf()
   * @return: void()
   *
   * sets 1, 3, or 5
   */
  setBestOf(number) {
    if (typeof number === 'number') {
      best_of.set(this, number);
    } else {
      console.error('setBestOf(@param) @param is not a Number');
    }
  }

  /* getVerses()
   * @return: String
   *
   * return "player" or "computer"
   */
  getVerses() {
    return verses.get(this);
  }

  /* setVerses()
   * @return: void()
   *
   * sets "player" or "computer"
   */
  setVerses(string) {
    if (typeof string === 'string') {
      verses.set(this, string);
    } else {
      console.error('setVerses(@param) @param is not a String');
    }
  }
}

// Singleton pattern
export let settings = new HandGameSettings();
