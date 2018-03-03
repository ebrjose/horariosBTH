'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Docente = sequelize.define('docente', {
    dId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dNombre: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    dApellido: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
  })

  return Docente
}
