'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#response').text('Welcome, ' + response.user.email)
  $('#signUp').trigger('reset')
  $('signUp').show()
  $('signUp').hide()
}

const onSignUpFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response').text('Welcome, ' + response.user.email)
  $('#signIn').trigger('reset')
  $('#changePassword').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('#new-game').show()
}

const onSignInFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
}

const onChangePasswordSuccess = function () {
  $('#response').text('Success - password updated.')
}

const onChangePasswordFailure = function (error) {
  $('#response').text(error, 'Oh no, try again.')
}

const onSignOutFailure = function (error) {
  $('#signOut').text(error, 'Try again.')
}
const onSignOutSuccess = function (response) {
  store.user = response.user
  $('#signOut').text('See you later, ' + response.user.email)
  $('#signOut').hide()
  $('#signOut').show()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess
}
