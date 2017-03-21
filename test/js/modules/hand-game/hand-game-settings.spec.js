import { settings } from '../../../../src/js/modules/hand-game/hand-game-settings';

describe('Hand Game Settings', () => {

  it('should exist', () => {
    expect(settings).to.exist;
  });

  describe('# getGameType', () => {
    it('should return a property as type "String"', () => {
      expect(settings.getGameType()).that.is.a('string');
    });

    it('should return a property "default" or "variation"', () => {
      expect(settings.getGameType()).to.be.oneOf(['default', 'variation']);
    });
  });

  describe('# getBestOf', () => {
    it('should return a property as type "Number"', () => {
      expect(settings.getBestOf()).to.be.above(0);
    });

    it('should return a property "1, 3 or 5"', () => {
      expect(settings.getBestOf()).to.be.oneOf([1, 3, 5]);
    });
  });

  describe('# getVerses', () => {
    it('should return a property as type "String"', () => {
      expect(settings.getVerses()).that.is.a('string');
    });

    it('should return a property "default" or "variation"', () => {
      expect(settings.getVerses()).to.be.oneOf(['player', 'computer']);
    });
  });
});
