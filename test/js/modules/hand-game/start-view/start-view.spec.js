import StartView from '../../../../../src/js/modules/hand-game/start-view/start-view';
import html from '../../../../../src/js/modules/hand-game/start-view/start-view.html';

describe('HandGame - StartView', () => {
  let div = document.createElement('div');
  div.setAttribute('id', 'hand-game');
  let startView = new StartView(div);
  startView.html = html;
  startView.loadView({});

  it('should exist', () => {
    expect(StartView).to.exist;
	});

  describe('# this.settings', () => {
    it('should be an object', () => {
      expect(startView.settings).to.be.an('object');
    });
  });

  describe('# Form', () => {
    it('should have 7 radio input fields', () => {
      let inputs = startView.$ele.querySelectorAll('input');
      expect(inputs.length).to.equal(7);
    });
  });
});
