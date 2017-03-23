import { getGameData, getHandSigns } from '../../../../src/js/modules/hand-game/hand-game-data';

describe('HandGame - Data', () => {

  describe('# getGameData()', () => {
    it('should return an object', () => {
      expect(getGameData()).to.be.an('object');
    });
  });

  describe('# getHandSigns()', () => {
    it('should return an array', () => {
      expect(getHandSigns().length).to.equal(3);
    });
  });
});
