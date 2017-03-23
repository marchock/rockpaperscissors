import HandGameData from '../../../model/hand-game.json';
import { settings } from './hand-game-settings';

/* Return "default" or "variation" game data
 * @return: object
 */
export const getGameData = () => {
  return HandGameData.handGame[settings.getGameType()];
}

/* Return an array of string values example: ['rock', 'paper', 'scissors']
 * @return: array
 */
export const getOutcomes = () => {
  let outcomes = HandGameData.handGame[settings.getGameType()];
  let outcomesString = [];

  Object.keys(outcomes).forEach(key => {
      outcomesString.push(key);
  });

  return outcomesString;
}
