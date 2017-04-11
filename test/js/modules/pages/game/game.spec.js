import "babel-polyfill";
import Game from '../../../../../src/js/modules/pages/game/game';
//import html from '../../../../../../src/js/modules/pages/game/game.html';

let app = document.createElement('div');

let settings = {
  gameType: 'default',
  opponent: 'player',
  bestOf: 1
};

describe('Game', () => {
  let game = null;

  beforeEach(function() {
    game = new Game(app);
  });

  it('should have two players "player 1 and player 2"', () => {
    expect(game.player1.$ele.classList.contains('player-1')).to.be.true;
    expect(game.player2.$ele.classList.contains('player-2')).to.be.true;
  });

  describe('#Player 1', () => {
    beforeEach(function() {
      game = new Game(app);
      game.start(settings);
    });

    it('should have name "computer"', () => {
      expect(game.player1.name.player).to.equal('computer');
    });

    describe('##Scoreboard', () => {
      beforeEach(function() {
        game = new Game(app);
      });

      it('should display 1 dot if game is set to best of 1', () => {
        settings.bestOf = 1;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(1);
      });


      it('should display 2 dot if game is set to best of 3', () => {
        settings.bestOf = 3;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(2);
      });

      it('should display 3 dot if game is set to best of 5', () => {
        settings.bestOf = 5;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(3);
      });
    });

  });

  describe('#Player 2', () => {
    beforeEach(function() {
      game = new Game(app);
    });

    it('should have a name "computer" if "computer Vs computer""', () => {
      settings.opponent = 'computer';
      game.start(settings);
      expect(game.player2.name.player).to.be.oneOf(['computer', 'player']);
    });

    it('should have a name "player" if "computer Vs player""', () => {
      game.start(settings);
      expect(game.player2.name.player).to.be.oneOf(['computer', 'player']);
    });


    describe('##Scoreboard', () => {
      beforeEach(function() {
        game = new Game(app);
      });

      it('should display 1 dot if game is set to best of 1', () => {
        settings.bestOf = 1;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(1);
      });


      it('should display 2 dot if game is set to best of 3', () => {
        settings.bestOf = 3;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(2);
      });

      it('should display 3 dot if game is set to best of 5', () => {
        settings.bestOf = 5;
        game.start(settings);
        let spanTags = game.player1.scoreboard.$ele.querySelectorAll('span');
        expect(spanTags.length).to.equal(3);
      });
    });
  });



  describe('#Buttons', () => {
    beforeEach(function() {
      game = new Game(app);
    });

    it('should have three buttons if "Rock Paper Scissors" Selected', () => {
      game.start(settings);
      let buttons = game.gameButtons.$ele.querySelectorAll('div');
      expect(game.gameButtons.handSigns).to.eql(['rock', 'paper', 'scissors']);
      expect(buttons.length).to.equal(3);
    });


    it('should have five buttons if "Rock Paper Scissors Lizard Spock" Selected', () => {
      //let s = Object.assign({}, settings);
      settings.gameType = 'variation';
      game.start(settings);
      let buttons = game.gameButtons.$ele.querySelectorAll('div');
      expect(game.gameButtons.handSigns).to.eql(['rock', 'paper', 'scissors', 'lizard', 'spock']);
      expect(buttons.length).to.equal(5);
    });
  });


});
