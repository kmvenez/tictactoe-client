const store = require('../store')

const onNewGameFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

const onNewGameSuccess = function (response) {
  store.games = response.games
  console.log(store)
  $('#response').text('Time to party.')
  $('#new-game').hide()
  $('#changePassword').hide()
  $('#game').show()
  $('.box').text('').css('background', 'white')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
