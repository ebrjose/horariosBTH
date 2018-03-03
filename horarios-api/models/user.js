'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const User = sequelize.define('user', {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usName: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    usPassword: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    usProvider: {
      type: Sequelize.ENUM,
      values: ['GO', 'FB', 'TW', 'LC'],
      allowNull: false,
      defaultValue: 'LC'
    },
    usProviderId: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    usPhoto: {
      type: Sequelize.STRING(),
      allowNull: true
    }
  })

  return User
}
