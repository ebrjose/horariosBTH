'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  const Reservation = sequelize.define('reservation', {
    reservationId: {
      primaryKey: true,
      type: Sequelize.UUID
    },
    dateStart: {
      type: Sequelize.DATE,
      allowNull: false
    },
    dateEnd: {
      type: Sequelize.DATE,
      allowNull: true
    }
  })

  return Reservation
}
