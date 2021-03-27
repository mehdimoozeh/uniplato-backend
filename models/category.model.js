'use strict'
const mysql = require('../dataSource/mysql')
const TABLE_NAME = 'category'

async function getAllCategories () {
  const query = `SELECT category, counter, id FROM ${TABLE_NAME}`
  const result = await mysql.mysqlClient.query(query)
  return result
}
exports.getAllCategories = getAllCategories

async function updateCategoryCounter (categoryId, newCounter) {
  const queryWrite = `UPDATE ${TABLE_NAME} SET counter = ? WHERE id = ?;`
  const queryRead = `SELECT counter FROM ${TABLE_NAME} WHERE id = ?;`
  try {
    await mysql.mysqlClient.beginTransaction()
    await mysql.mysqlClient.query(queryWrite, [newCounter, categoryId])
    await mysql.mysqlClient.commit()
    const result = await mysql.mysqlClient.query(queryRead, [categoryId])
    if (result.length) {
      return result[0]
    } else {
      return []
    }
  } catch (error) {
    await mysql.mysqlClient.rollback()
    return error
  }
}
exports.updateCategoryCounter = updateCategoryCounter
