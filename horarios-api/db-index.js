'use strict'

const setupDatabase = require('./lib/db')

const setupDocenteModel = require('./models/Docentes')
const setupAulaModel = require('./models/Aulas')
const setupMateriaModel = require('./models/Materias')

const setupDocentes = require('./lib/docentes')
const setupAulas = require('./lib/aulas')
const setupMaterias = require('./lib/materias')
// const defaults = require('defaults')

module.exports = async (config) => {
  const sequelize     = setupDatabase(config)

  const DocenteModel = setupDocenteModel(config)
  const AulaModel    = setupAulaModel(config)
  const MateriaModel = setupMateriaModel(config)

  
  DocenteModel.hasOne(MateriaModel, { foreignKey: 'dId' })

  await sequelize.authenticate() // sequelize.authenticate().then()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Docentes = setupDocentes(DocenteModel)
  const Aulas = setupAulas(AulaModel)
  const Materias = setupMaterias(MateriaModel)

  // if(config.setup) {
  //   Docentes.createOrUpdate({ 'dNombre': 'Eber', 'dApellido': 'Coaquira' })
  //   Docentes.createOrUpdate({ 'dNombre': 'Pepe', 'dApellido': 'Morales' })
  //   Docentes.createOrUpdate({ 'dNombre': 'Lili', 'dApellido': 'Fernandez' })
  //   Docentes.createOrUpdate({ 'dNombre': 'Luis', 'dApellido': 'Duran' })

  //   Aulas.createOrUpdate({ 'aNombre': 'Aula A', 'aSigla': 'A' })
  //   Aulas.createOrUpdate({ 'aNombre': 'Aula B', 'aSigla': 'B' })
  //   Aulas.createOrUpdate({ 'aNombre': 'Aula C', 'aSigla': 'C' })
  //   Aulas.createOrUpdate({ 'aNombre': 'Aula D', 'aSigla': 'D' })

  //   Materias.createOrUpdate({ 'mNombre': 'Curso de Node JS', 'mSigla': 'NODE', 'dId': '1' })
  //   Materias.createOrUpdate({ 'mNombre': 'Aplicaciones con ReactJS', 'mSigla': 'REACT', 'dId': '1' })
  //   Materias.createOrUpdate({ 'mNombre': 'Curso Avanzado de Vue.JS', 'mSigla': 'VUE', 'dId': '2' })
  //   Materias.createOrUpdate({ 'mNombre': 'Aprendiendo HTML', 'mSigla': 'HTML', 'dId': '3' })
  // }

  return {
    Docentes,
    Aulas,
    Materias
  }
}
