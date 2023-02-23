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
    //console.log(this.listOfItemsArray);
    //const tasks = this.listOfItemsArray;
    this.listOfItemsArray.forEach((task, i) => {
      const index = `${i + 1}.`.green;
      const { description, completedDate } = task;
      const status = completedDate ? "Complete".rainbow : "Pending".red;

      console.log(`${index} ${description} :: ${status}`);
    });
  }
}
module.exports = Tasks;
