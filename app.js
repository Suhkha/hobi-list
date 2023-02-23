require("colors");
const { saveDB, readDB } = require("./helpers/saveFile");
const {
  inquirerMenu,
  inquirerPause,
  readInput,
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

      default:
        break;
    }

    saveDB(tasks.listOfItemsArray);

    await inquirerPause();
  } while (option !== "0");
};

main();
