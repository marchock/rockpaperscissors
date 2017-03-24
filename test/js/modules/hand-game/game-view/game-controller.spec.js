import GameController from '../../../../../src/js/modules/hand-game/game-view/game-controller';

describe('HandGame - GameView - GameController', () => {

  let div = document.createElement('div');
  div.setAttribute('id', 'hand-game');

  let ref = {
    settings: {
      getBestOf: () => {
        return 5;
      }
    }
  }

  const gameController = new GameController(div, ref);

  it('should exist', () => {
    expect(GameController).to.exist;
	});

  describe('# this._gameView', () => {
    it('should be a type "Object"', () => {
      expect(gameController._gameView).to.be.an('object');
    });
  });

  describe('# this.gameCounter', () => {
    it('should be a type "Array"', () => {
      expect(gameController.gameCounter.length).to.equal(4);
    });
  });

  describe('# this.counter', () => {
    it('should be a type "Number"', () => {
      expect(gameController.counter).to.equal(0);
    });
  });

  describe('# this.score', () => {
    it('should be a type "Object"', () => {
      expect(gameController.score).to.be.an('object');
    });
  });

  describe('# this.scoreToWin()', () => {
    it('should return a type "Number"', () => {
      expect(gameController.scoreToWin(5)).to.equal(3);
    });

    it('should return 3 if game is best of 5"', () => {
      expect(gameController.scoreToWin(5)).to.equal(3);
    });
  });

  describe('# this.searchOutcomes()', () => {

    it('should return a type "Object" if a winner is found', () => {
      let result = gameController.searchOutcomes('rock', 'scissors', 'p1');
      expect(result).to.be.an('object');
    });

    it('should return "null" if a winner is not found', () => {
      let result = gameController.searchOutcomes('rock', 'paper', 'p1');
      expect(result).to.be.an('null');
    });
  });



});
