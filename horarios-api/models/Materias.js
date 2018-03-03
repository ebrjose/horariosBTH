'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Materia = sequelize.define('materias', {
    mId: {
      primaryKey: true,
      type: Sequelize.UUID
    },
    mNombre: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    mSigla: {
      type: Sequelize.STRING(10),
      allowNull: false
    }
  })

  return Materia
}
