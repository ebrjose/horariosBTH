'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Room = sequelize.define('room', {
    roomId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roomName: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    roomColor: {
      type: Sequelize.STRING(10),
      allowNull: true
    }
  })

  return Room
}
