'use strict'

const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user')
const setupRoomModel = require('./models/room')
const setupReservationModel = require('./models/reservation')

const setupUser = require('./lib/userFn')
const setupRoom = require('./lib/roomFn')
const setupReservation = require('./lib/reservationFn')
// const defaults = require('defaults')

module.exports = async (config) => {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const RoomModel = setupRoomModel(config)
  const ReservationModel = setupReservationModel(config)

  UserModel.belongsToMany(RoomModel, {
    through: {
      model: ReservationModel,
      unique: false,
      scope: {
        taggable: 'user'
      }
    },
    foreignKey: 'userId',
    constraints: false
  })

  RoomModel.belongsToMany(UserModel, {
    through: {
      model: ReservationModel,
      unique: false
    },
    foreignKey: 'roomId',
    constraints: false
  })

  await sequelize.authenticate() // sequelize.authenticate().then()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const User = setupUser(UserModel)
  const Room = setupRoom(RoomModel)
  const Reservation = setupReservation(ReservationModel)

  return {
    User,
    Room,
    Reservation
  }
}
