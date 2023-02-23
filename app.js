require("colors");
const { saveDB, readDB } = require("./helpers/saveFile");
const {
  inquirerMenu,
  inquirerPause,
  readInput,
  tasksToDelete,
  confirm,
} = require("./helpers/inquirer");

const Tasks = require("./models/tasks");

const main = async () => {
  console.clear();

  let option = "";
  const tasks = new Tasks();

  const readTasks = readDB();
  if (saveDB) {
    tasks.loadTasksFromArray(readTasks);
  }

  do {
    // Show menu
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await readInput("Description: ");
        tasks.createTask(description);
        break;

      case "2":
        tasks.fullList();
        break;

      case "3":
        tasks.showTasksByStatus(true);
        break;

      case "4":
        tasks.showTasksByStatus(false);
        break;

      case "6":
        const id = await tasksToDelete(tasks.listOfItemsArray);

        if (id !== 0) {
          const isOkay = await confirm("are you sure?");

          if (isOkay) {
            tasks.deleteTask(id);
            console.log("Task deleted");
          }
        }
        break;
    }

    saveDB(tasks.listOfItemsArray);

    await inquirerPause();
  } while (option !== "0");
};

main();
