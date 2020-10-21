const store = require('../store')

// This runs if a new game failed.
const onNewGameFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

// This runs if a new game was successful.
const onNewGameSuccess = function (response) {
  store.games = response.games
  console.log(store)
  $('#response').text('Time to party.  Will you be...tic-tac-toast?')
  $('#new-game').hide()
  $('#changePassword').hide()
  $('#game').show().css('background', '#c04df9')
  $('.box').text('')
  $('#start-over').show()
  $('#sign-out').show()
  $('#count-games').show()
  $('#scorecard').show()
}

// This runs if counting the games played failed.
const onCountGamesFailure = function (error) {
  store.game = error.game
  $('#count-games').text(error, 'Uhoh! Try again.')
}

// This runs if counting the game was successful.
const onCountGamesSuccess = function (response) {
  store.games = response.games
  const gamesAmount = store.games.length
  $('#count-games').text('You played ' + gamesAmount + ' games.')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onCountGamesSuccess,
  onCountGamesFailure
}
