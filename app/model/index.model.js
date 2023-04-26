const Sequelize = require("sequelize");
const DbConfig = require("../config/db.config.js")

const sequelize = new Sequelize(DbConfig.DB, DbConfig.USER, DbConfig.PASSWORD, {
  host: DbConfig.HOST,           // Use of host
  dialect: DbConfig.dialect,     // use of database
  pool: {
    max: DbConfig.pool.max,
    min: DbConfig.pool.min,
    acquire: DbConfig.pool.acquire,  // the pool will wait for 30 seconds before timing out a connection request
    idle: DbConfig.pool.idle         // and idle connections will be closed after 10 seconds.
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;