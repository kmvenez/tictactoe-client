const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// this is the game board logic.

let currentPlayer = 'X'

const status = {
  moves: 0,
  isOver: false,
  winner: ''
}

const gameStatus = function (array, index) {
  const gamecells = array
  gamecells[index] = currentPlayer

  if (status.moves >= 5) {
    for (let i = 0; i <= gamecells.length; i++) {
      if (gamecells[0] === gamecells[1] && gamecells[1] === gamecells[2] && gamecells[0] !== '') {
        status.winner = gamecells[0]
        status.isOver = true
        return status
      } else if (gamecells[3] === gamecells[4] && gamecells[3] === gamecells[5] && gamecells[3] !== '') {
        status.winner = gamecells[3]
        status.isOver = true
        return status
      } else if (gamecells[6] === gamecells[7] && gamecells[7] === gamecells[8] && gamecells[6] !== '') {
        status.winner = gamecells[6]
        status.isOver = true
        return status
      } else if (gamecells[0] === gamecells[3] && gamecells[3] === gamecells[6] && gamecells[0] !== '') {
        status.winner = gamecells[0]
        status.isOver = true
        return status
      } else if (gamecells[1] === gamecells[4] && gamecells[1] === gamecells[7] && gamecells[1] !== '') {
        status.winner = gamecells[1]
        status.isOver = true
        return status
      } else if (gamecells[2] === gamecells[5] && gamecells[2] === gamecells[8] && gamecells[2] !== '') {
        status.winner = gamecells[2]
        status.isOver = true
        return status
      } else if (gamecells[0] === gamecells[4] && gamecells[0] === gamecells[8] && gamecells[0] !== '') {
        status.winner = gamecells[0]
        status.isOver = true
        return status
      } else if (gamecells[2] === gamecells[4] && gamecells[4] === gamecells[6] && gamecells[2] !== '') {
        status.winner = gamecells[2]
        status.isOver = true
        return status
      } else {
        if (status.moves === 9) {
          status.winner = 'Tie'
          status.isOver = true
          return status
        } else {
          return status
        }
      }
    }
  }
}

const onBoxClick = (event) => {
  const box = $(event.target) 
  $(box).prop('disabled', true)
  $(box).addClass('gotClicked')
  box.text(currentPlayer)

  status.moves++

  gameStatus(store.game.cells, box.data('cell-index'))
  if (status.isOver === true) {
    $('.box').prop('disabled', true)
    $('.box').addClass('gotClicked')
    if (status.winner === 'X') {
      $('#response').text('X has WON!')
    } else if (status.winner === 'O') {
      $('#response').text('O has WON!')
    } else if (status.moves === 9) {
      (status.isOver = true)
      $('#response').text('Better luck next time - its a tie!')
    }
    return status
  }
  api.updateGame(box.data('cell-index'), currentPlayer, status.isOver)
    .then(ui.onUpdateSuccess)
    .then(currentPlayer = currentPlayer === 'O' ? 'X' : 'O')
    .catch(ui.error)
}

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
}

// This is the function to run when updating the game data.
const updateGame = function (event) {
  event.preventDefault()
  api.updateGame(boxIndex, currentPlayer, isOver)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// This is the function to run for counting amount of games played.
const countGames = function (event) {
  event.preventDefault()
  api.countGames()
    .then(ui.onCountGamesSuccess)
    .catch(ui.onCountGamesFailure)
}

// This is the functionality/interactivity for the game itself.

module.exports = {
  indexGame: indexGame,
  newGame: newGame,
  updateGame: updateGame,
  countGames: countGames,
  gameStatus: gameStatus,
  onBoxClick: onBoxClick
}
