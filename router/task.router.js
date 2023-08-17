// const { router } = require('../app')

const router = require('express').Router()
const TaskController = require('../controller/task.controller')

router.post('/add', TaskController.add)
router.post('/get', TaskController.get)
router.post('/getTask', TaskController.getTask)
router.post('/update', TaskController.update)
router.post('/completed',TaskController.completed)


module.exports = router
