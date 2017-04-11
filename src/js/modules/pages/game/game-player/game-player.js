import GameTemplate from '../game-template';
import html from './game-player.html';
import GamePlayerScoreboard from './game-player-scoreboard';
import GamePlayerName from './game-player-name';
import GamePlayerHandsign from './game-player-handsign';

class GamePlayer extends GameTemplate {

  constructor(ele) {
    super(ele, {
      name: 'game-player',
      element: 'div',
      html: html
    });

    this.scoreboard = new GamePlayerScoreboard(this.$ele);
    this.name = new GamePlayerName(this.$ele);
    this.handsign = new GamePlayerHandsign(this.$ele);
  }

  init({ bestOf, opponent }) {
    this.scoreboard.create(bestOf);
    this.name.init(opponent);
    this.handsign.init(this.name.player);
  }

  isAWinner() {
    return this.scoreboard.checkScore();
  }

  pointWon() {
    this.scoreboard.update(() => {
      this.winner();
    });
  }

  winner() {
    setTimeout(() => {
      this.handsign.isAWinner();
      this.name.isAWinner();
    }, 2000);
  }

  reset() {
    this.scoreboard.reset();
    this.name.reset();
    this.handsign.reset();
  }
}

export default GamePlayer;
