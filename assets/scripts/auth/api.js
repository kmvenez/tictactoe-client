'use strict'

const config = require('./../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: data.email,
        password: data.password
      }
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      passwords: {
        old: data.passwordsold,
        new: data.passwordsnew
      }
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/sign-out',
    method: 'DELETE'
  })
}

const indexGame = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user
    },
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const newGameReturningUser = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/:id',
    method: 'GET'
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {
      credentials: {
        email: data.email,
        password: data.password
      }
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: '[]',
          value: '[]'
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  indexGame: indexGame,
  newGameReturningUser: newGameReturningUser,
  createGame: createGame,
  updateGame: updateGame
}
