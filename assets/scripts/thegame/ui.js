const store = require('../store')

// This runs if a new game failed.
const onNewGameFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

// This runs if a new game was successful.
const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#new-game').hide()
  $('#changePassword').hide()
  $('#start-over').show()
  $('#sign-out').show()
  $('#count-games').show()
  $('#response').text('Time to party.  Will you be...tic-tac-toast?')
  $('#game').show().css('background', '#c04df9')
  $('.box').text('')
  $('.gotClicked').prop('disabled', false)
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

// This runs if clicking a box works.
const onBoxClickSuccess = (response) => {
  store.game = response.game 
  $('#response').text('Player ' + store.player + ' Turn')
}

// This runs if clicking a box fails.
const onBoxClickFailure = (response) => {
  $('#response').text('Something went wrong, try again')
} 

// This runs if updating game data works.
const onUpdateSuccess = (response) => {
  store.game = response.game 
}

// This runs if updating game data fails.
const onUpdateFailure = (response) => {
  $('#response').text('Something went wrong, try again')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onCountGamesSuccess,
  onCountGamesFailure,
  onBoxClickSuccess,
  onBoxClickFailure,
  onUpdateSuccess,
  onUpdateFailure
}
