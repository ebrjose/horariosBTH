'use strict'

const trae = require('trae')
const apiUrl = 'http://localhost:6801/api-v1'

const api = trae.create({
  baseUrl: apiUrl
})

const horariosService = {}
horariosService.getDocentes = (q) => {
   return api.get('/docentes')
    .then(res => res.data)
}

export default horariosService
