
const onNewGameFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

const onNewGameSuccess = function (response) {
  $('#response').text('Time to party.')
  $('#new-game').hide()
  $('#changePassword').hide()
  $('#game').show()
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
