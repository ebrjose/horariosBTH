'use strict'

const  debug = require('debug')('horarios:lib:docentes')
module.exports = (DocenteModel) => {
  async function createOrUpdate (docente) {
    const cond = {
      where: {
        dId: docente.dId
      }
    }

    const existeDocente = await DocenteModel.findOne(cond)

    if (existeDocente) {
      const updated = await DocenteModel.update(docente, cond)
      return updated ? DocenteModel.findOne(cond) : existeAula
    }

    const result = await DocenteModel.create(docente)
    return result.toJSON()
  }

  function findById (dId) {
    return DocenteModel.findById(dId)
  }

  function findAll () {
    return DocenteModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
