# Reto Horarios

### Backend API

Para el backend se necesita tener instalado PostgreSQL

##### Configuracion de la bd

```js
// db-config.js
module.exports = {
  db: {
    database: process.env.DB_NAME || 'horarios',
    username: process.env.DB_USER || 'pgdev',
    password: process.env.DB_PASS || 'pgdev',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: false // Sirve para borrar la base de datos
  },
  auth: {
    secret: process.env.SECRET || 'examen'
  }
}
```

#### Instalacion
```sh
$ cd horarios-api
$ npm install
$ npm run setupdb
$ npm run server
```
La api corre en el en el puerto **6801**  [http://localhost:6801/api-v1/](https://localhost:6801/api-v1/) 

### Frontend

El frontend corre con el Framework Vue.js

#### Instalacion

``` bash
$ cd horarios-web
# install dependencies
$ npm install

# Para iniciar la aplicacion en localhost:6800
$ npm run dev

```

La aplicacion corre en el en el puerto **6800**  [http://localhost:6800/](https://localhost:6800/) 