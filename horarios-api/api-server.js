'use strict'

const debug = require('debug')('cinema:api')
// const setup = require('./db-setup')
const http = require('http')
const chalk = require('chalk')
const express = require('express')
const asyncify = require('express-asyncify')

const api = require('./api-v1')

const port = process.env.PORT || 6801
const app = asyncify(express())
const server = http.createServer(app)

app.use('/api-v1', api)

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

// esto es para hacer pruebas

// module.parent = si yo lo estoy requiriendo

if (!module.parent) {
  // se inicia el servidor
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(port, () => {
    console.log(`${chalk.green('[cinema-api]')} server listening on port ${port}`)
  })
}

// se exporta pra hacer pruebas
module.exports = server
