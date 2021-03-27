'use strict'
const Koa = require('koa')
const json = require('koa-json')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mysql = require('./dataSource/mysql')

// Koa app
const app = new Koa()
const router = new KoaRouter()

// Import controllers
const categoryController = require('./controllers/category.controller')
const categoryValidation = require('./dto/category.dto')

// JSON prettier middleware
app.use(json())

// Parse body, default form and json
app.use(bodyParser())

// Router middleware
app.use(router.routes()).use(router.allowedMethods())

// Error handler
app.on('error', function (error, ctx) {
  console.log(error) // TODO: replace with log handler class
  ctx.response.status = error.statusCode
  ctx.body = { error: error.message }
  return ctx
})

// Bind controllers to routes
router.get('/category', categoryController.getAllCategories)
router.patch('/category/:id/counter/:counter', categoryValidation.updateCategoryCountDto, categoryController.updateCategoryCounter)

app.listen(config.env.port, async function () {
  console.log(`Successfully listen on port ${config.env.port}`)
  await mysql.connectToMysql(
    config.env.mysql.host,
    config.env.mysql.username,
    config.env.mysql.password,
    config.env.mysql.database
  )
})
