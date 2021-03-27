const koa = require('koa')
const json = require('koa-json')
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')


const app = new koa()
const router = new koaRouter()

// JSON prettier middleware
app.use(json())

// Parse body, default form and json
app.use(bodyParser())

// Router middleware
app.use(router.routes()).use(router.allowedMethods())


// Error handler
app.on('error', function(error, ctx) {
  console.log(error) // TODO: replace with log handler class
  ctx.response.status = error.statusCode
  ctx.body = { error: error.message }
  return ctx
})

// Handle Routes
router.get('/', (ctx) => {
  console.log('Here...')
  ctx.response.status = 200
  ctx.body = 'Hello World!'
  return ctx
})

const PORT = process.env.port || 8000
app.listen(PORT, function() {
  console.log(`Successfully listen on port ${PORT}`)
})
