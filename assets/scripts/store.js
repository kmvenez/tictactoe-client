'use strict'

const store = {
  player: null,
  user: {},
  game: {},
  updateGame: {
    game: {
      cell: {
        index: 0,
        value: 'x'
      },
      over: false
    }
  }
}

module.exports = store
