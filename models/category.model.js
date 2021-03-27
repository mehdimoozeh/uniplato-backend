'use strict'
const mysql = require('../dataSource/mysql')
const TABLE_NAME = 'category'

async function getAllCategories () {
  const query = `SELECT category, counter, id FROM ${TABLE_NAME}`
  const result = await mysql.mysqlClient.query(query)
  return result
}

exports.getAllCategories = getAllCategories
