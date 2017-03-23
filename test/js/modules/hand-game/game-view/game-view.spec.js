import GameView from '../../../../../src/js/modules/hand-game/game-view/game-view';
import Player from '../../../../../src/js/modules/hand-game/game-view/player';
import GameButtons from '../../../../../src/js/modules/hand-game/game-view/game-buttons';
import GameController from '../../../../../src/js/modules/hand-game/game-view/game-controller';
// import HandGame from '../../../../../src/js/modules/hand-game/hand-game';

describe('HandGame - GameView', () => {
  const gameView = new GameView();
  let div = document.createElement('div');
  div.setAttribute('id', 'hand-game');
  gameView.$ele = div;
  gameView.loadView({});


  it('should exist', () => {
    expect(GameView).to.exist;
	});

  describe('# this.settings', () => {
    it('should be an object', () => {
      expect(gameView.settings).to.be.an('object');
    });
  });

  describe('# this.player1', () => {
    it('should be an instance of Player()', () => {
      expect(gameView.player1).to.be.an.instanceof(Player);
    });
  });

  describe('# this.player2', () => {
    it('should be an instance of Player()', () => {
      expect(gameView.player2).to.be.an.instanceof(Player);
    });
  });

  describe('# this.gameButtons', () => {
    it('should be an instance of GameButtons()', () => {
      expect(gameView.gameButtons).to.be.an.instanceof(GameButtons);
    });
  });

  describe('# this.gameController', () => {
    it('should be an instance of GameController()', () => {
      expect(gameView.gameController).to.be.an.instanceof(GameController);
    });
  });
});
