const Task = require("./task");

class Tasks {
  _listOfTasks = {};

  get listOfItemsArray() {
    const listOfItems = [];

    Object.keys(this._listOfTasks).forEach((key) => {
      listOfItems.push(this._listOfTasks[key]);
    });

    return listOfItems;
  }

  constructor() {
    this._listOfTasks = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._listOfTasks[task.id] = task;
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._listOfTasks[task.id] = task;
    });
  }
}
module.exports = Tasks;
