'use strict'

const config = require('./../config')
const store = require('../store')

// This is my API call for the sign up button.
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

// This is my API call for my sign in button.
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

// This is my API call for my change password button.
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

// This is my API call for my sign out button.
const signOut = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/sign-out',
    method: 'DELETE'
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
}
