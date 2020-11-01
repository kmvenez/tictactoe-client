'use strict'

const onAction = require('./auth/events')
const onGameAction = require('./thegame/events')

$(() => {
  // On initial load, hide change password
  $('#changePassword').hide()
  // On inital load, hide sign out
  $('#sign-out').hide()
  // On initial load, hide new game
  $('#new-game').hide()
  // On initial load, hide game
  $('#game').hide()
  // On initial load, hide start over
  $('#start-over').hide()
  // On initial load, hide count games
  $('#count-games').hide()

  $('#scorecard').hide()

  // On submitting 'sign up', trigger function
  $('#signUp').on('submit', onAction.onSignUp)
  // On submitting 'sign in', trigger function
  $('#signIn').on('submit', onAction.onSignIn)
  // On submitting 'new game', trigger function
  $('#new-game').on('submit', onGameAction.indexGame)
  // On submitting 'change password', trigger function
  $('#changePassword').on('submit', onAction.onChangePassword)
  // On submitting 'sign out', trigger function
  $('#sign-out').on('submit', onAction.onSignOut)
  // On submitting 'start over', trigger function
  $('#start-over').on('click', onGameAction.indexGame)
  // On submitting 'count games', trigger function
  $('#count-games').on('click', onGameAction.countGames)

  $('.box').on('click', onGameAction.onBoxClick)
})
