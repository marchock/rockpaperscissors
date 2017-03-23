import HandGameData from '../../../model/hand-game.json';
import { settings } from './hand-game-settings';

/* Return "default" or "variation" game data
 * @return: object
 */
export const getGameData = () => {
  return HandGameData.handGame[settings.getGameType()];
}

/* Return an array of handSigns example: ['rock', 'paper', 'scissors']
 * @return: array
 */
export const getHandSigns = () => {
  let outcomes = HandGameData.handGame[settings.getGameType()];
  let handSigns = [];

  Object.keys(outcomes).forEach(key => {
      handSigns.push(key);
  });

  return handSigns;
}
