require("colors");
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

  fullList() {
    this.listOfItemsArray.forEach((task, i) => {
      const index = `${i + 1}.`.green;
      const { description, completedDate } = task;
      const status = completedDate ? "Completed".rainbow : "Pending".red;

      console.log(`${index} ${description} :: ${status}`);
    });
  }

  showTasksByStatus(completed = true) {
    let index = 0;
    this.listOfItemsArray.forEach((task) => {
      const { description, completedDate } = task;
      const status = completedDate ? `${completedDate}`.green : "Pending".red;

      if (completed) {
        if (completedDate) {
          index += 1;
          console.log(
            `${(index.toString() + ".").green} ${description} :: ${status}`
          );
        }
      } else {
        if (!completedDate) {
          index += 1;
          console.log(
            `${(index.toString() + ".").green} ${description} :: ${status}`
          );
        }
      }
    });
    console.log();
  }

  deleteTask(id = "") {
    if (this._listOfTasks[id]) {
      delete this._listOfTasks[id];
    }
  }
}
module.exports = Tasks;
