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

  return {
    Docentes,
    Aulas,
    Materias
  }
}
