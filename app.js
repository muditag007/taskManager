const express = require('express')
const body_parser = require('body-parser')
const userRouter = require('./router/user.router')
const taskRouter = require('./router/task.router')


const app = express()

app.use(body_parser.json())

app.use('/', userRouter)
app.use('/', taskRouter)


module.exports = app
