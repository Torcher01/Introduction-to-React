const GAME_TYPES = [
  { type: 'cats', text: 'Котики' },
  { type: 'flowers', text: 'Цветочки' },
  { type: 'cars', text: 'Машины' },
];

const AppRoute = {
  Initial: 'initial',
  Game: 'game',
  Results: 'results',
};

const TIMEOUT = 900;

const RANDOMIZED = false;

export {AppRoute, GAME_TYPES, TIMEOUT, RANDOMIZED}