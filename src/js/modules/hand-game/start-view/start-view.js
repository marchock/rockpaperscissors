import html from './start-view.html';
import { settings } from '../hand-game-settings';

/* Loads start-view.html into the DOM
 * @Class
 */
class StartView {

  /* Creates a start view
   * @param: {object} ele
   */
  constructor(ele) {
    /* A reference to an element
     * @object
     */
    this.$ele = ele;

    /* A copy of start-view.html
     * @object
     */
    this.html = html;

    /* Reference for hand-game-settings.js
     * @object
     */
    this.settings = settings;
  }

  /* Injects start-view.html into the DOM
   * @param {object} ref
   * @return void
   */
  loadView(ref) {
    /* Reference for handGame class
     * @Object
     */
    this._handGame = ref;

    /* Injects HTML into an element
     * @object
     */
    this.$ele.innerHTML = this.html;

    this.setupFormEvent();
    this.updateForm();
  }

  /* Gets game settings and applies to the start view form
   * @return void
   */
  updateForm() {
    let inputs = this.$ele.querySelectorAll('input');

    Array.from(inputs).forEach(function (input) {

      input.checked = false;
      if (settings.getGameType() === input.value) input.checked = true;
      if (settings.getVerses() === input.value) input.checked = true;
      if (settings.getBestOf() === Number(input.value)) input.checked = true;
    });
  }

  /* Assigns a submit event to a form and updates game settings
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

  /* Updates game settings and uses reference to load game view
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
