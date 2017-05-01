import * as _ from 'lodash';


class Observable {

  constructor() {
    this.observers = [];
  }

  next(data) {
    this.observers.forEach(obs => obs.next(data));
  }

  subscribe(obs) {
    this.observers.push(obs)
  }

  unsubscribe(obs) {
    _.remove(this.observers, el => el === obs);
  }
}


export default Observable;
