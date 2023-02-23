require("colors");
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

  do {
    // Show menu
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await readInput("Description: ");
        tasks.createTask(description);
        break;

      case "2":
        console.log(tasks.listOfItemsArray);
        break;

      default:
        break;
    }

    await inquirerPause();
  } while (option !== "0");
};

main();
