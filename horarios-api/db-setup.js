'use strict'

// const debug = require('debug')('cinema:db:setup')
const db = require('./db-index')
const config = require('./db-config')

async function setup () {
  await db(config.db).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

module.exports = setup
