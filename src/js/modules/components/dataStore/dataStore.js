import * as _ from 'lodash';
import Observable from '../observable/observable';
import { getHandSigns, getRandomHandSign, getGameData } from '../../pages/game/game-data';

class DataStore {

  constructor() {

    this.game = {
      handSigns: [],
      settings: {},
      player1: {
        name: 'computer',
        handSign: '',
        score: 0
      },
      player2: {
        name: '',
        handSign: '',
        score: 0
      },
      maximumGamePoints: 0,
      point: {}
    };

    this.obserable = new Observable();

    this.game$ = {
      subscribe: obs => {
        this.obserable.subscribe(obs);
        obs.next(this.lessons);
      },

      unsubscribe: obs => this.obserable.unsubscribe(obs)
    };

  }

  initializeSettings(data) {
    this.game.settings = _.cloneDeep(data);
    this.game.handSigns = _.cloneDeep(getHandSigns(this.game.settings.gameType));
    this.game.player2.name = this.game.settings.opponent;
    this.game.maximumGamePoints = Math.round(this.game.settings.bestOf / 2);
    this.broadcast();
  }

  whichPlayerWonPoint() {
    let point = {
      wonBy: null,
      message: 'Draw'
    };
    let p1 = this.game.player1.handSign;
    let p2 = this.game.player2.handSign;

    // if player2 did not select a hand sign then player2 will automatically lose.
    if (!p2) {
      point.wonBy = 'player1';
      point.message = `${p1} beats nothing selected`;

    } else {
      // Does player1 handsign beat player2 handsign
      point = this.searchOutcomes(p1, p2, 'player1') || point;

      // if player one did not win then
      // Does player2 handsign beat player1 handsign
      if (!point.wonBy) point = this.searchOutcomes(p2, p1, 'player2') || point;
    }

    this.game.point = point;
    if (point.wonBy) this.game[point.wonBy].score += 1;
    this.broadcast();
  }

  searchOutcomes(handsign1, handsign2, wonBy) {
    /* Get all outcomes for the game
     * @object
     */
    let outcomes = getGameData(this.game.settings.gameType);
    let point = outcomes[handsign1].find((obj) => obj.beats === handsign2);

    if (point) {
      return {
        wonBy,
        message: `${handsign1} ${point.how} ${point.beats}`
      };
    }
  }


  updatePlayer(player, obj) {

    if (player === 'player1') {
      if (!obj) {
        obj = { handSign: getRandomHandSign(this.game.settings) };
      }
    }

    if (player === 'player2') {
      if (this.game.settings.opponent === 'computer') {
        if (!obj) {
          obj = { handSign: getRandomHandSign(this.game.settings) };
        }
      }
    }

    let newPlayer = Object.assign(this.game[player], obj);
    this.game[player] = newPlayer;

    this.broadcast();
  }

  isGameOver() {
    let gameOver = false;
    if (this.game.maximumGamePoints <= this.game.player1.score ) {
      gameOver = true;
      this.game.player1.name = `${this.game.player1.name} is a winner!!!`;
      this.game.player1.handSign = 'winner';
    }
    if (this.game.maximumGamePoints <= this.game.player2.score ) {
      gameOver = true;
      this.game.player2.name = `${this.game.player2.name} is a winner!!!`;
      this.game.player2.handSign = 'winner';
    }
    this.broadcast();

    return gameOver
  }

  clearTextMessage() {
    this.game.point = {
      message: ''
    };

  }

  reset() {
    this.game.handSigns = [];
    this.game.player1.score = 0;
    this.game.player2.score = 0;
    this.game.player1.name = 'computer';
    this.game.player2.name = '';
    this.game.player1.handSign = '';
    this.game.player2.handSign = '';
    this.game.maximumGamePoints = 0;
    this.game.point = {};
    this.broadcast();
  }


  broadcast() {
    console.log('broadcast', this.game)
    this.obserable.next(_.cloneDeep(this.game));
  }
}

export let store = new DataStore();
