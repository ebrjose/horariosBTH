'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Materia = sequelize.define('materia', {
    mId: {
      primaryKey: true,
      type: Sequelize.UUID
    },
    mNombre: {
      type: Sequelize.DATE,
      allowNull: false
    },
    mSigla: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })

  return Materia
}
