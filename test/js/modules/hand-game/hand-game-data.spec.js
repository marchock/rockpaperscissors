import { getGameData, getOutcomes } from '../../../../src/js/modules/hand-game/hand-game-data';

describe('Hand Game Data', () => {

  describe('getGameData()', () => {
    it('should return an object', () => {
      expect(getGameData()).to.be.an('object');
    });
  });

  describe('getOutcomes()', () => {
    it('should return an array', () => {
      expect(getOutcomes().length).to.equal(3);
    });
  });
});
