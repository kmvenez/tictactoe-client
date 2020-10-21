const api = require('./api')
const ui = require('./ui')

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
  api.updateGame()
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
$(() => {
  let currentPlayer = 'X'
   const onBoxClick = (event) => { 
    const box = $(event.target) 
    const boxIndex = box.data('box-index') 
    console.log('box index ', boxIndex) 
    console.log('players turn ', currentPlayer) 
    box.text(currentPlayer)  box.css('background', 'transparent').text(currentPlayer) 
    api.updateGame(boxIndex, currentPlayer) 
      .then(ui.onBoxClickSuccess) 
      .catch(ui.onBoxClickFailure  )
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O' }
})

const X = 'X'
const O = 'O'
let xScore = 0
let oScore = 0
let ties = 0
let turns = 1

const xWins = () => {
  if ($('#0').hasClass('X') && $('#1').hasClass('X') && $('#2').hasClass('X') ||
  $('#3').hasClass('X') && $('#4').hasClass('X') && $('#5').hasClass('X') ||
  $('#6').hasClass('X') && $('#7').hasClass('X') && $('#8').hasClass('X') ||
  $('#0').hasClass('X') && $('#3').hasClass('X') && $('#6').hasClass('X') ||
  $('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') ||
  $('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') ||
  $('#0').hasClass('X') && $('#4').hasClass('X') && $('#8').hasClass('X') ||
  $('#2').hasClass('X') && $('#4').hasClass('X') && $('#6').hasClass('X')) {
    $('#game-message').text('X has WON!')
    $('.col').addClass('gameover')
    xScore++
    $('#x-win').text(xScore)
  }
}

const oWins = () => {
  if ($('#0').hasClass('O') && $('#1').hasClass('O') && $('#2').hasClass('O') ||
  $('#3').hasClass('O') && $('#4').hasClass('O') && $('#5').hasClass('O') ||
  $('#6').hasClass('O') && $('#7').hasClass('O') && $('#8').hasClass('O') ||
  $('#0').hasClass('O') && $('#3').hasClass('O') && $('#6').hasClass('O') ||
  $('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O') ||
  $('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') ||
  $('#0').hasClass('O') && $('#4').hasClass('O') && $('#8').hasClass('O') ||
  $('#2').hasClass('O') && $('#4').hasClass('O') && $('#6').hasClass('O')) {
    $('#game-message').text('O has WON!')
    $('.col').addClass('gameover')
    oScore++
    $('#o-win').text(oScore)
  }
}

const draw = () => {
  if ($('.X').length + $('.O').length === 9) {
    $('#game-message').text('Better luck next time - you tied!')
    ties++
    $('#ties').text(ties)
  }
}

// This is the if/else for Box 0.
const boxZero = () => {
  if (turns === 1) {
    $('#0').text(X)
    $('#0').addClass('X')
    turns = 2
  } else {
    $('#0').text(O)
    $('#0').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 1.
const boxOne = () => {
  if (turns === 1) {
    $('#1').text(X)
    $('#1').addClass('X')
    turns = 2
  } else {
    $('#1').text(O)
    $('#1').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 2.
const boxTwo = () => {
  if (turns === 1) {
    $('#2').text(X)
    $('#2').addClass('X')
    turns = 2
  } else {
    $('#2').text(O)
    $('#2').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 3.
const boxThree = () => {
  if (turns === 1) {
    $('#3').text(X)
    $('#3').addClass('X')

    turns = 2
  } else {
    $('#3').text(O)
    $('#3').addClass('O')

    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 4.
const boxFour = () => {
  if (turns === 1) {
    $('#4').text(X)
    $('#4').addClass('X')
    turns = 2
  } else {
    $('#4').text(O)
    $('#4').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 5.
const boxFive = () => {
  if (turns === 1) {
    $('#5').text(X)
    $('#5').addClass('X')
    turns = 2
  } else {
    $('#5').text(O)
    $('#5').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 6.
const boxSix = () => {
  if (turns === 1) {
    $('#6').text(X)
    $('#6').addClass('X')
    turns = 2
  } else {
    $('#6').text(O)
    $('#6').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 7.
const boxSeven = () => {
  if (turns === 1) {
    $('#7').text(X)
    $('#7').addClass('X')
    turns = 2
  } else {
    $('#7').text(O)
    $('#7').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the if/else for Box 8.
const boxEight = () => {
  if (turns === 1) {
    $('#8').text(X)
    $('#8').addClass('X')
    turns = 2
  } else {
    $('#8').text(O)
    $('#8').addClass('O')
    turns = 1
  }
  if (turns === 1) {
    $('#turn').text(X)
  } else {
    $('#turn').text(O)
  }
  xWins()
  oWins()
  draw()
}

// This is the jQuery for clicking the reset button.
const resetButton = () => {
  $('.col').text('+').removeClass('X O gameover')
  $('#game-message').text('')
}

module.exports = {
  indexGame: indexGame,
  newGame: newGame,
  updateGame: updateGame,
  countGames: countGames,
  boxZero: boxZero,
  boxOne: boxOne,
  boxTwo: boxTwo,
  boxThree: boxThree,
  boxFour: boxFour,
  boxFive: boxFive,
  boxSix: boxSix,
  boxSeven: boxSeven,
  boxEight: boxEight,
  resetButton: resetButton
}
