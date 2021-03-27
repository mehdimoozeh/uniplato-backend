'use strict'
const sendResponse = require('../helpers/handleResponses')
const sendError = require('../helpers/handleErrors')

function helloWorld (ctx) {
  const result = { text: 'Hello World!' }
  try {
    return sendResponse.ok(ctx, result)
  } catch (err) {
    return sendError.internal(ctx, err.message)
  }
}

exports.helloWorld = helloWorld
