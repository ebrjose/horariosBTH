'use strict'
module.exports = (DocenteModel) => {
  async function createOrUpdate (user) {
    const cond = {
      where: {
        userId: user.userId
      }
    }

    const existingUser = await UserModel.findOne(cond)

    if (existingUser) {
      const updated = await UserModel.update(user, cond)
      return updated ? UserModel.findOne(cond) : existingUser
    }

    const result = await UserModel.create(user)
    return result.toJSON
  }

  function findById (userId) {
    return UserModel.findById(userId)
  }

  function findAll () {
    return UserModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
