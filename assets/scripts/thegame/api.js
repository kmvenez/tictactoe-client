const config = require('./../config')
const store = require('../store')

const indexGame = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

const startGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

module.exports = {
  indexGame: indexGame,
  startGame: startGame
}
