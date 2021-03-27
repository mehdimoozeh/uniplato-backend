'use strict'
const sendResponse = require('../helpers/handleResponses')
const sendError = require('../helpers/handleErrors')
const modelCategory = require('../models/category.model')

async function getAllCategories (ctx) {
  try {
    const categories = await modelCategory.getAllCategories()
    return sendResponse.ok(ctx, categories)
  } catch (err) {
    return sendError.internal(ctx, err.message)
  }
}
exports.getAllCategories = getAllCategories

async function updateCategoryCounter (ctx) {
  try {
    const { id, counter } = ctx.params
    const categories = await modelCategory.updateCategoryCounter(id, counter)
    return sendResponse.ok(ctx, categories)
  } catch (err) {
    return sendError.internal(ctx, err.message)
  }
}
exports.updateCategoryCounter = updateCategoryCounter
