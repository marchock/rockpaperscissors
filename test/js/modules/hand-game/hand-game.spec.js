import HandGame from '../../../../src/js/modules/hand-game/hand-game';
import StartView from '../../../../src/js/modules/hand-game/start-view/start-view';
import GameView from '../../../../src/js/modules/hand-game/game-view/game-view';

describe('HandGame', () => {
  let handGame = new HandGame();

  it('should exist', () => {
    expect(HandGame).to.exist;
  });

  describe('this.startView', () => {
    it('should be an instance of StartView()', () => {
      expect(handGame.startView).to.be.an.instanceof(StartView);
    });
  });

  describe('this.gameView', () => {
    it('should be an instance of GameView()', () => {
      expect(handGame.gameView).to.be.an.instanceof(GameView);
    });
  });
});
