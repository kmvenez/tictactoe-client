
const api = require('./api')
const ui = require('./ui')

const indexGame = function (event) {
  event.preventDefault()
  api.indexGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const newGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  indexGame: indexGame,
  newGame: newGame
}
