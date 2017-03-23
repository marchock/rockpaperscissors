import StartView from '../../../../../src/js/modules/hand-game/start-view/start-view';

describe('Game StartView', () => {
  let $ele = null;
  let startView = null;

  beforeEach(function() {
    $ele = document.getElementById('hand-game');
    startView = new StartView($ele);
  });

  it('should exist', () => {
    expect(StartView).to.exist;
	});

  describe('this.html', () => {
    it('should be an object', () => {
      setTimeout(() => {
        expect(startView.html).to.be.an('object');
      }, 100);
    });
  });

  describe('this.$ele', () => {
    it('should be an object', () => {
      setTimeout(() => {
        expect(startView.$ele).to.be.an('object');
      }, 100);
    });
  });

  describe('this.settings', () => {
    it('should be an object', () => {
      setTimeout(() => {
        expect(startView.settings).to.be.an('object');
      }, 100);
    });
  });
});
