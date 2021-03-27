'use strict'
const httpCodes = require('./httpCodes')
exports.handler = handler

function handler (ctx, message, statusCode) {
  const error = new Error()
  error.statusCode = statusCode
  error.message = message
  return ctx.app.emit('error', error, ctx)
}

exports.internal = internal

function internal (ctx, message) {
  const error = new Error()
  error.statusCode = httpCodes.status.internalError
  error.message = message
  return ctx.app.emit('error', error, ctx)
}
