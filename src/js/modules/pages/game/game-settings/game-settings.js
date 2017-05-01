
import GameTemplate from '../game-template';
import html from './game-settings.html';
import {store} from '../../../components/dataStore/dataStore';

class GameSettings extends GameTemplate {

  constructor(ele, ref) {
    super(ele, {
      name: 'game-settings',
      element: 'div',
      html: html,
      className: 'game-settings show'
    });

    this._game = ref;

    this.settings = {
      gameType: 'default',
      opponent: 'player',
      bestOf: 1
    }

    store.initializeSettings(this.settings);


    this.updateForm();
    this.setupFormEvent();
  }

  /* Gets game settings and applies to the start view form
   * @return void
   */
  updateForm() {
    let inputs = this.$ele.querySelectorAll('input');

    Array.from(inputs).forEach((input) => {
      input.checked = false;
      if (this.settings.gameType === input.value) input.checked = true;
      if (this.settings.opponent === input.value) input.checked = true;
      if (this.settings.bestOf === Number(input.value)) input.checked = true;
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
        // if input is checked add to array
        if (input.checked) checked.push(input.value)
      });

      this.updateSettings(checked);
    })
  }

  /* Updates game settings and uses reference to load game view
   * @param {array} checked - destructuring array [gameType, opponent, bestOf]
   * @return void
   */
  updateSettings([gameType, opponent, bestOf]) {
    this.settings = {
      gameType,
      opponent,
      bestOf
    }
    store.initializeSettings(this.settings);
    this.hideForm();
  }

  hideForm() {
    this.$ele.setAttribute('class', 'game-settings');
    setTimeout(() => {
      this.$ele.setAttribute('class', 'game-settings hide');
      this._game.start(this.settings);
    }, 500);
  }

  showForm() {
    this.$ele.setAttribute('class', 'game-settings');
    setTimeout(() => {
      this.$ele.setAttribute('class', 'game-settings show');
    }, 50);
  }
}

export default GameSettings;
