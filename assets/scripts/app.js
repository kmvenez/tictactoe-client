'use strict'

const onAction = require('./auth/events')
const onGameAction = require('./thegame/events')

$(() => {
  $('#changePassword').hide()
  $('#sign-out').hide()
  $('#signUp').on('submit', onAction.onSignUp)
  $('#signIn').on('submit', onAction.onSignIn)
  $('#new-game').on('submit', onGameAction.indexGame)
  $('#changePassword').on('submit', onAction.onChangePassword)
  $('#sign-out').on('submit', onAction.onSignOut)
})

$(() => {
  let currentPlayer = '✕'
  const onBoxClick = (event) => {
    console.log('A click has occured')
    const box = $(event.target)
    box.text(currentPlayer)
    box.css('background', 'transparent').text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }
  $('.box').on('click', onBoxClick)
})
