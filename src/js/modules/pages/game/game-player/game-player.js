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

    const isPlayer1 = this.$ele.classList.contains('player-1');
    this.scoreboard = new GamePlayerScoreboard(this.$ele, isPlayer1);
    this.name = new GamePlayerName(this.$ele);
    this.handsign = new GamePlayerHandsign(this.$ele, isPlayer1);
  }

  reset() {
    this.scoreboard.reset();
    this.name.reset();
    this.handsign.reset();
  }
}

export default GamePlayer;
