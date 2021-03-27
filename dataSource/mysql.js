'use strict'
const mysql = require('promise-mysql')

async function connectToMysql (host, username, password, database) {
  exports.mysqlClient = await mysql.createConnection({
    host,
    user: username,
    password,
    database
  })
}

exports.connectToMysql = connectToMysql
