'use strict'

const status = {
  ok: 200,
  validationFailed: 400, // Bad request
  internalError: 500
}

const text = {
  validationFailed: 'Validation failed! Check your inputs.',
  internalError: 'Internal server error!'
}

exports.status = status
exports.text = text
