'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Aula = sequelize.define('aula', {
    aId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    aName: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    aSigla: {
      type: Sequelize.STRING(10),
      allowNull: true
    }
  })

  return Aula
}
