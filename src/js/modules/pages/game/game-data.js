import HandGameData from '../../../../model/hand-game.json';

/* Returns "default" or "variation" game data
 * @return: object
 */
export const getGameData = (gameType) => {
  return HandGameData.handGame[gameType];
}

/* Returns an array of string. example: ['rock', 'paper', 'scissors']
 * @return: array
 */
export const getHandSigns = (gameType) => {
  let outcomes = HandGameData.handGame[gameType];
  return Object.keys(outcomes);
}


/* Returns an array of string. example: ['rock', 'paper', 'scissors']
 * @return: array
 */
export const getRandomHandSign = (settings) => {
  const handSigns = getHandSigns(settings.gameType);
  return handSigns[getRandomNumber(handSigns.length)];
}

/* Gets a random number in between 0 to handSigns.length
 * @return {number}
 */
const getRandomNumber = (max) => {
  return Math.floor((Math.random() * max));
}
