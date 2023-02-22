const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you wanna do?",
    choices: [
      {
        value: "1",
        name: "1. Create task",
      },
      {
        value: "2",
        name: "2. Show tasks",
      },
      {
        value: "3",
        name: "3. Show completed tasks",
      },
      {
        value: "4",
        name: "4. Show pending tasks",
      },
      {
        value: "5",
        name: "5. Complete tasks",
      },
      {
        value: "6",
        name: "6. Delete task",
      },
      {
        value: "0",
        name: "0. Exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("Select an option".green);
  console.log("===========================\n".green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const inquirerPause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `PRESS ${"ENTER".green} TO CONTINUE`,
    },
  ];
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Enter a value";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
};
