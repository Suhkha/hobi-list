const Task = require("./task");

class Tasks {
  _listOfTasks = {};

  constructor() {
    this._listOfTasks = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._listOfTasks[task.id] = task;
  }
}
module.exports = Tasks;
