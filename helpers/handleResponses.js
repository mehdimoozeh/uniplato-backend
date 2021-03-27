'use strict'
const httpCodes = require('./httpCodes')

exports.ok = ok

function ok (ctx, data) {
  ctx.response.status = httpCodes.status.ok
  ctx.body = { msg: 'OK', payload: data }
  return ctx
}
