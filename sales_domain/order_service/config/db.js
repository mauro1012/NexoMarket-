const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/db_name', {
    dialect: 'mysql'
});

module.exports = db;