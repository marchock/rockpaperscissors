import Player from '../../../../../src/js/modules/hand-game/game-view/player';
import { settings } from '../../../../../src/js/modules/hand-game/hand-game-settings';

let div = document.createElement('div');
div.setAttribute('class', 'game-view');
div.innerHTML = `
  <div class="game-view">
   <div class="quit-button">
     <p>Quit Game</p>
     <p>X</p>
   </div>
   <div class="hand-sign player1">
     <div class="score"></div>
     <div class="player-name"></div>
   </div>
   <div class="hand-sign player2">
     <div class="score"></div>
     <div class="player-name"></div>
   </div>
   <div class="game-counter"></div>
   <div class="game-buttons"></div>
  </div>
`;

describe('HandGame - GameView - Player', () => {
  const player = new Player(
    ['rock', 'paper', 'scissors'],
    'player1',
    'computer',
    div,
    settings
  );

  it('should exist', () => {
    expect(Player).to.exist;
  });


  describe('# this.handSigns', () => {
    it('should be a type "Array" with a length of 3', () => {
      expect(player.handSigns.length).to.equal(3);
    });
  });

  describe('# this.player', () => {
    it('should be a type "String"', () => {
      expect(player.player).to.be.a('string');
    });

    it('should return one of the following [player1, player2]', () => {
      expect(player.player).to.be.oneOf(['player1', 'player2']);
    });
  });

  describe('# this.playerType', () => {
    it('should be a type "String"', () => {
      expect(player.playerType).to.be.a('string');
    });

    it('should return one of the following [player, computer]', () => {
      expect(player.playerType).to.be.oneOf(['player', 'computer']);
    });
  });

  describe('# this.savedHandSign', () => {
    it('should be a type "String"', () => {
      expect(player.savedHandSign).to.be.a('string');
    });
  });

  describe('# player.getHandSign()', () => {
    it('should return a random handsign. Type "String"', () => {
      expect(player.getHandSign()).to.be.a('string');
    });

    it('should return one of the following [rock, paper, scissors]', () => {
      expect(player.getHandSign()).to.be.oneOf(['rock', 'paper', 'scissors']);
    });
  });

  describe('# player.getRandomNumber()', () => {
    it('should return a random number between 0 to 2', () => {
      expect(player.getRandomNumber()).to.be.oneOf([0, 1, 2]);
    });
  });
});
