import html from './start-view.html';
import { settings } from '../hand-game-settings';

/* Loads start-veiw.html into the DOM
 * @Class
 */
class StartView {

  /* Create a start view
   * @param: {object} ele
   */
  constructor(ele) {
    /* A reference to an element
     * @object
     */
    this.$ele = ele;

    /* a copy of start-view.html
     * @object
     */
    this.html = html;

    /* Reference for hand-game-settings.js
     * @object
     */
    this.settings = settings;
  }

  /* inject start-view.html into the DOM
   * @param {object} ref
   * @return void
   */
  loadView(ref) {
    /* Reference for handGame class
     * @Object
     */
    this._handGame = ref;

    /* Injecting HTML into an element
     * @object
     */
    this.$ele.innerHTML = this.html;

    this.setupFormEvent();
  }

  /* Setup form submit event to update game settings
   * @return void
   */
  setupFormEvent() {
    let form = this.$ele.querySelector('form');
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      // Get all radio inputs
      let inputs = this.$ele.querySelectorAll('input');
      // Add all checked inputs to array
      let checked = [];

      // Search for radio inputs checked
      Array.from(inputs).forEach(function (input) {
        if (input.checked) {
          // Add checked input to array
          checked.push(input)
        }
      });
      this.updateSettings(checked);
    })
  }

  /* Update game settings and then use reference to load game view
   * @param {array} checked
   * @return void
   */
  updateSettings(checked) {
    this.settings.setGameType(checked[0].value);
    this.settings.setBestOf(Number(checked[2].value));
    this.settings.setVerses(checked[1].value);
    this._handGame.loadGameView();
  }
}

export default StartView;
