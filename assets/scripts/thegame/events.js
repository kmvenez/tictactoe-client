
const api = require('./api')
const ui = require('./ui')

// This is the function to run when creating a game.
const indexGame = function (event) {
  event.preventDefault()
  api.indexGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// This is the function to run when creating a refreshed game.
const newGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// This is the function to run when updating the game data.
const updateGame = function (event) {
  event.preventDefault()
  api.updateGame()
}

// This is the function to run for counting amount of games played.
const countGames = function (event) {
  event.preventDefault()
  api.countGames()
    .then(ui.onCountGamesSuccess)
    .catch(ui.onCountGamesFailure)
}

module.exports = {
  indexGame: indexGame,
  newGame: newGame,
  updateGame: updateGame,
  countGames: countGames
}
