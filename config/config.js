const env = require('dotenv').config().parsed;

module.exports =
{
  "development": {
    "username": env.DB_USERNAME,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": dotenv.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
          "require": true
      }
    }
  }
}