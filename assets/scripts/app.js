'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const onAction = require('./auth/events')
$(() => {
  $('#changePassword').hide()
  $('#changePassword').on('submit', onAction.onChangePassword)
  $('#signUp').on('submit', onAction.onSignUp)
  $('#signIn').on('submit', onAction.onSignIn)
  $('#signOut').on('submit', onAction.onSignOut)
})
