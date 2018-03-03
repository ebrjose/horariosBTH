'use strict'

const debug = require('debug')('horarios:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const db = require('./db-index')

const config = require('./db-config')

const api = asyncify(express.Router())

let services, User, Room, Reservation
api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }

    User = services.User
    // Room = services.Room
    // Reservation = services.Reservation
  }
  next()
})

api.get('/users', auth(config.auth), async (req, res, next) => {
  debug('A request has come to /users')

  const { user } = req

  if (!user || !user.username) {
    return next(new Error('Not authorized'))
  }

  let users = [{name: 'Eber'}]

  try {
    if (user.admin) {
      users = await User.findAll()
    } else {
      users = await User.findById(user.userId)
    }
  } catch (e) {
    return next(e)
  }

  res.send(users)
})

module.exports = api
