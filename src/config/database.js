
// module.exports = Petroleum;
const { Sequelize } = require('sequelize');
const path = require("path");
const dbName = path.join("./src/data", "petroleum.db");
const sequelize = new Sequelize('petroleum-db', null, null, {
    dialect: 'sqlite',
    host: dbName,
});
module.exports = sequelize;