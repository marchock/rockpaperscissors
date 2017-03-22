import html from './start-view.html';
import { settings } from '../hand-game-settings';

class StartView {

  constructor(ele) {
    this.$ele = ele;
    this.html = html;
    this.settings = settings;
  }

  loadView(ref) {
    this._handGame = ref;

    this.$ele.innerHTML = this.html;

    this.$ele.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();

      let inputs = this.$ele.querySelectorAll('input');
      let checked = [];

      Array.from(inputs).forEach(function (input) {
        if (input.checked) {
          checked.push(input)
        }
      });

      this.updateSettings(checked);
    })
  }

  updateSettings(checked) {
    this.settings.setGameType(checked[0].value);
    this.settings.setBestOf(Number(checked[2].value));
    this.settings.setVerses(checked[1].value);

    this._handGame.loadGameView();
  }
}

export default StartView;
