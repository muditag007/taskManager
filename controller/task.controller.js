// const { create } = require('../services/user.services')
const TaskService = require('../services/task.services')

exports.add = async (req, res, next) => {
  try {
    const { email, tasks } = req.body
    console.log(tasks['title'])

    const successRes = await TaskService.addTask(email, tasks)
    res.json({ status: true, success: 'Task Added Successfully' })
  } catch (e) {
    throw e
  }
}

exports.get = async (req, res, next) => {
  try {
    const { email } = req.body

    const successRes = await TaskService.getTasks(email)

    res.json({ status: true, email: successRes.email, tasks: successRes.tasks })
  } catch (e) {
    throw e
  }
}

exports.getTask = async (req, res, next) => {
    try {
      const { email,id } = req.body
  
      const successRes = await TaskService.getTask(email,id)
  
      res.json({ status: true, email: successRes.email, task: successRes.task,id:successRes.id })
    } catch (e) {
      throw e
    }
  }

exports.update = async (req, res, next) => {
  try {
    const { email, id, tasks } = req.body
    console.log(id)
    console.log(tasks['title'])

    const successRes = await TaskService.updateTasks(email, id, tasks)
    res.json({ status: true, success: 'Task Updated Successfully' })
  } catch (e) {
    throw e
  }
}

exports.completed = async (req, res, next) => {
    try {
      const { email, id } = req.body
    //   console.log(id)
    //   console.log(tasks['title'])
  
      const successRes = await TaskService.completeTask(email, id)
      res.json({ status: true, success: 'Task Status changed Successfully' })
    } catch (e) {
      throw e
    }
  }
  
