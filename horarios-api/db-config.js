'use strict'
const debug = require('debug')('cinema:db:config')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'cinema',
    username: process.env.DB_USER || 'pgdev',
    password: process.env.DB_PASS || 'pgdev',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: false // Sirve para borrar la base de datos
  },
  auth: {
    secret: process.env.SECRET || 'examen'
  }
}
