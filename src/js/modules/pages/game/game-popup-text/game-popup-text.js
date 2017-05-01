import GameTemplate from '../game-template';
import Count from './game-count';
import { store } from '../../../components/dataStore/dataStore';
import * as _ from 'lodash';


/* Create game buttons to select hand signs
 * @Class
 */
class GamePopUpText extends GameTemplate {

  /* Create GameButtons
   * @param: {object} ele - DOMElement
   */
  constructor(ele) {
    super(ele, {
      name: 'game-popup-text',
      element: 'div',
      className: 'game-popup-text'
    });

    this.point = {};
    this.count = new Count();
    store.game$.subscribe(this);
  }

  /* Count
   * @return {string}
   */
  gameCounter() {
    let count = this.count.next().value;
    this.update(count);
    return count;
  }

  next(data) {
    if (data === undefined || _.isEqual(data.point, this.point)) return;
    this.point = data.point;
    this.update(this.point.message)
  }

  /* Remove all child elements
   * @return {void}
   */
  clear() {
    this.$ele.innerHTML = '';
  }

  /* Updates element with a new value
   * @param {string}
   * @return {void}
   */
  update(message) {
    this.clear();
    let h3 = document.createElement('h3');
    let text = document.createTextNode(message);
    h3.appendChild(text);
    this.$ele.appendChild(h3);
  }

  reset() {
    this.clear();
    this.count.next(true);
    this.point = {};
  }
}

 export default GamePopUpText;
