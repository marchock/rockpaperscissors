require('../css/main.scss');
import "babel-polyfill";

import Game from './modules/pages/game/game';
let app = document.getElementById('app');
new Game(app);
