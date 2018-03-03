# horarios-api

> PostgreSQL and Node.js Proyect

## Primero onfigurar la base de datos


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

## Build Setup

``` bash
# install dependencies
$ npm install

# Para iniciarla base de datos localhost:6801
$ npm run setup

# Para coorrer el servidor  with hot reload at localhost:6801
$ npm run start-dev

```
