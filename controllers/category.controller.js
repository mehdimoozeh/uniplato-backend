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
