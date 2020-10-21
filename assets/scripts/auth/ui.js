'use strict'

const store = require('../store')

// This runs when sign up was successful.
const onSignUpSuccess = function (response) {
  $('#response').text('Welcome, ' + response.user.email)
  $('#signUp').trigger('reset')
  $('signUp').show()
  $('signUp').hide()
  $('#scorecard').hide()
}

// This runs if sign up failed.
const onSignUpFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

// This runs if sign up was successful.
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response').text('Welcome, ' + response.user.email)
  $('#signIn').trigger('reset')
  $('#changePassword').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('.btn-group').hide()
  $('#new-game').show()
  $('#scorecard').hide()
}

// This runs if sign up failed.
const onSignInFailure = function () {
  $('#signUp').text('Uhoh! Try again.')
}

// This runs if change password was successful.
const onChangePasswordSuccess = function () {
  $('#changePassword').text('Success - password updated.')
}

// This runs if change password failed.
const onChangePasswordFailure = function (error) {
  $('#response').text(error, 'Oh no, try again.')
}

// This runs if sign out failed.
const onSignOutFailure = function (error) {
  $('#sign-out').text(error, 'Try again.')
}

// This runs if sign out was successful.
const onSignOutSuccess = function (response) {
  $('#sign-out').text('See you later ' + store.user.email)
  $('#sign-out').hide()
  $('#changePassword').hide()
  $('#new-game').hide()
  $('#game').hide()
  $('#start-over').hide()
  $('#count-games').hide()
  $('#signUp').show()
  $('#signIn').show()
  $('#scorecard').hide()
  $('#response').hide()
  store.user = null
}
const onBoxClickSuccess = (response) => { store.game = response.game   console.log(store.game) 
  $('#message').text('Player ' + store.currentPlayer + ' Turn') }

const onBoxClickFailure = (response) => { 
  $('#message').text('Something went wrong, try again') } 

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess,
  onBoxClickSuccess
}
