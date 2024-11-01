const dotenv = require("dotenv").config()
const { DataSource } = require('typeorm');
const { join } = require('path');

module.exports = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  migrations: [join(__dirname,'migrations','*{.ts,.js}')],
  synchronize: true,
});