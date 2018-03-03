'use strict'

const debug = require('debug')('horarios:lib:aulas')
module.exports = (MateriaModel) => {
  async function createOrUpdate(materia) {
    const cond = {
      where: {
        mId: materia.mId
      }
    }
    const existeMateria = await MateriaModel.findOne(cond)
    if (existeMateria) {
      const updated = await MateriaModel.update(materia, cond)
      return updated ? MateriaModel.findOne(cond) : existeMateria
    }

    const result = await MateriaModel.create(materia)
    return result.toJSON()
  }

  function findById(mId) {
    return MateriaModel.findById(mId)
  }

  function findAll() {
    return MateriaModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
