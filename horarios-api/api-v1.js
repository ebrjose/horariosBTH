'use strict'

const debug = require('debug')('horarios:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
// const auth = require('express-jwt')
// const guard = require('express-jwt-permissions')()
const db = require('./db-index')

const config = require('./db-config')

const api = asyncify(express.Router())

api.use(bodyParser.json())

let services, Docentes, Aulas, Materias


api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }

    Docentes = services.Docentes
    Aulas = services.Aulas
    Materias = services.Materias
  }
  next()
})

//DOCENTES
api.get('/docentes', async (req, res, next) => {
  debug('GET: /docentes')

  let docentes
  try {
    docentes = await Docentes.findAll()
  } catch (e) {
    return next(e)
  }

  if( docentes.length === 0 ) {
    res.status(404).send({ 'Error': 'No se encontraron resultados' })
  }
  res.status(200).send(docentes)
})
api.get('/docentes/:dId', async(req, res, next) => {
  const { dId } = req.params
  debug(`GET: /docentes/${dId}`)

  let docente
  try {
    docente = await Docentes.findById(dId)
  } catch (e) {
    return next(e)
  }

  if (!docente) {
    res.status(404).send({'Error': 'No se encontraron resultados'})
  }
  res.send(docente)
})

api.post('/docentes', async (req, res, next) => {
  debug('POST: /docentes')
  const docente = req.body
  const result = await Docentes.createOrUpdate(docente)
  res.status(201).json(result)
})

// AULAS
api.get('/aulas', async (req, res, next) => {
  debug('GET: /aulas')

  let aulas
  try {
    aulas = await Aulas.findAll()
  } catch (e) {
    return next(e)
  }

  if (aulas.length === 0) {
    res.status(404).send({ 'Error': 'No se encontraron resultados' })
  }
  res.status(200).send(aulas)
})

api.get('/aulas/:aId', async (req, res, next) => {
  const { aId } = req.params
  debug(`GET: /aulas/${aId}`)
  let aula
  try {
    aula = await Aulas.findById(aId)
  } catch (e) {
    return next(e)
  }
  if (!aula) {
    res.status(404).send({ 'Error': 'No se encontraron resultados' })
  }
  res.send(aula)
})

api.post('/aulas', async (req, res, next) => {
  debug('POST: /aulas')
  const aula = req.body
  const result = await Aulas.createOrUpdate(aula)
  res.status(201).json(result)
})

// MATERIAS
api.get('/materias', async (req, res, next) => {
  debug('GET: /materias')

  let materias
  try {
    materias = await Materias.findAll()
  } catch (e) {
    return next(e)
  }

  if (materias.length === 0) {
    res.status(404).send({ 'Error': 'No se encontraron resultados' })
  }
  res.status(200).send(materias)
})

api.get('/materias/:mId', async (req, res, next) => {
  const { mId } = req.params
  debug(`GET: /materias/${mId}`)
  let materia
  try {
    materia = await Materias.findById(mId)
  } catch (e) {
    return next(e)
  }
  if (!materia) {
    res.status(404).send({ 'Error': 'No se encontraron resultados' })
  }
  res.send(materia)
})

api.post('/materias', async (req, res, next) => {
  debug('POST: /materias')
  const materia = req.body
  const result = await Materias.createOrUpdate(materia)
  res.status(201).json(result)
})

module.exports = api
