'use strict'
const handleErrors = require('../helpers/handleErrors')
const httpCodes = require('../helpers/httpCodes')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, coerceTypes: true })

async function updateCategoryCountDto (ctx, next) {
  const schema = {
    properties: {
      id: { type: 'integer' },
      counter: { type: 'integer' }
    },
    required: ['id', 'counter']
  }
  const validateParams = ajv.compile(schema)
  const isValid = await validateParams(ctx.request.params)
  if (isValid) {
    return next()
  } else {
    return handleErrors.handler(ctx, ajv.errorsText(validateParams.errors), httpCodes.status.validationFailed)
  }
}

exports.updateCategoryCountDto = updateCategoryCountDto
