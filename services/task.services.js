// const { create } = require('../model/task.model')
const TaskModel = require('../model/task.model')

class TaskService {
  static async addTask (email, tasks) {
    console.log(tasks['title'], tasks['description'], tasks['status'])
    try {
      const tasksList = await TaskModel.findOne({ email })

      if (tasksList) {
        tasksList.tasks.push(tasks)
        // const createTask = new TaskModel({ email, t })
        return await tasksList.save()
      } else {
        const createTask = new TaskModel({ email })
        createTask.tasks.push(tasks)
        return await createTask.save()
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static async getTasks (email) {
    try {
      const tasksList = await TaskModel.findOne({ email })

      if (tasksList) {
        return tasksList
      } else {
        throw Exception('Error')
      }
    } catch (e) {
      throw e
    }
  }

  static async getTask (email, id) {
    try {
      const tasksList = await TaskModel.findOne({ email })
      var picked = tasksList['tasks'].find(o => o._id.toString() === id)
      if (picked) {
        return {
          id: id,
          email: email,
          task: {
            title: picked.title,
            description: picked.description,
            status: picked.status
          }
        }
      } else {
        throw Exception('Error')
      }
    } catch (e) {
      throw e
    }
  }

  static async updateTasks (email, id, task) {
    try {
      const tasksList = await TaskModel.findOne({ email })
      // const tasks = await TaskModel.findOne({ id })
      var pickedIndex = tasksList['tasks'].findIndex(
        o => o._id.toString() === id
      )
      // console.log(tasksList['tasks'][pickedIndex].title);
      //   var picked = tasksList['tasks'].find(o => o._id.toString() === id);
      // console.log(picked);
      tasksList['tasks'][pickedIndex].title = task['title']
      tasksList['tasks'][pickedIndex].description = task['description']
      // tasksList['tasks'][pickedIndex].status = "completed"
      // console.log(tasksList['tasks'][pickedIndex]);
      await tasksList.save()
    } catch (e) {
      throw e
    }
  }

  static async completeTask (email, id) {
    try {
      const tasksList = await TaskModel.findOne({ email })
      // const tasks = await TaskModel.findOne({ id })
      var pickedIndex = tasksList['tasks'].findIndex(
        o => o._id.toString() === id
      )
      //   console.log(tasksList['tasks'][pickedIndex].title);
      //   var picked = tasksList['tasks'].find(o => o._id.toString() === id);
      //   console.log(picked);
      // tasksList['tasks'][pickedIndex].title = task['title']
      // tasksList['tasks'][pickedIndex].description = task['description']
      tasksList['tasks'][pickedIndex].status = 'completed'
      // console.log(tasksList['tasks'][pickedIndex]);
      await tasksList.save()
    } catch (e) {
      throw e
    }
  }
}

module.exports = TaskService
