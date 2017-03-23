import StartView from '../../../../../src/js/modules/hand-game/start-view/start-view';

describe('HandGame - StartView', () => {
  let startView = null;

  beforeEach(function() {
    startView = new StartView({});
  });

  it('should exist', () => {
    expect(StartView).to.exist;
	});

  describe('# this.settings', () => {
    it('should be an object', () => {
      expect(startView.settings).to.be.an('object');
    });
  });
});
