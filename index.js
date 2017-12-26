const low = require("lowdb");
const inquirer = require("inquirer");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const PROGRAMMING = "Programming";
const COMPUTER_ARCHITECTURE = "Computer Architecture";
const ALGORITHMS_AND_DATA_STRUCTURES = "Algorithms and Data Structures";
const MATH_FOR_CS = "Math for CS";
const OPERATING_SYSTEMS = "Operating Systems";
const COMPUTER_NETWORKING = "Computer Networking";
const DATABASES = "Databases";
const LANGUAGES_AND_COMPILERS = "Languages and Compilers";
const DISTRIBUTED_SYSTEMS = "Distributed Systems";
const OTHER = "other";
// Add a post
// console.log({db: db.get('data').value()})
const options = {
  PROGRAMMING,
  COMPUTER_ARCHITECTURE,
  ALGORITHMS_AND_DATA_STRUCTURES,
  MATH_FOR_CS,
  OPERATING_SYSTEMS,
  COMPUTER_NETWORKING,
  DATABASES,
  LANGUAGES_AND_COMPILERS,
  DISTRIBUTED_SYSTEMS,
  OTHER
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What's the date?",
      name: "date"
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "topic"
    },
    {
      type: "checkbox",
      message: "Select the categories . . .",
      name: "categories",
      choices: Object.keys(options)
    },
    {
      type: "input",
      message: "how many minutes did you spend?",
      name: "minutes"
    }
  ])
  .then(function({ date, topic, categories, minutes }) {
    console.log("Chosen line: ", { date, topic, categories, minutes });
    db
      .get("data")
      .push({
        date,
        topic,
        minutes,
        categories: categories.map(key => options[key])
      })
      .write();
    /*
  OUTPUT :
  Chosen line: 2
  */
  });
