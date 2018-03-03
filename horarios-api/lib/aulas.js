'use strict'

const debug = require('debug')('horarios:lib:aulas')
module.exports = (AulaModel) => {
  async function createOrUpdate(aula) {
    const cond = {
      where: {
        aId: aula.aId
      }
    }
    const existeAula = await AulaModel.findOne(cond)
    if (existeAula) {
      const updated = await AulaModel.update(aula, cond)
      return updated ? AulaModel.findOne(cond) : existeAula
    }
    
    const result = await AulaModel.create(aula)
    return result.toJSON()
  }

  function findById(aId) {
    return AulaModel.findById(aId)
  }

  function findAll() {
    return AulaModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
