//Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// NPM Modules
const inquirer = require("inquirer");

//Node Modules
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//array where all employees will be added
const teamList = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
managerPrompt();
function managerPrompt() {
  inquirer
    .prompt([
      {
        message: "What is your manager's name?",
        name: "name",
      },
      {
        message: "What is your manager's id?",
        name: "id",
      },
      {
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
      {
        message: "What is your manager's email?",
        name: "email",
      },
    ])
    .then(function (manager) {
      // console.log(manager);
      //adding new manager to list of entire team
      teamList.push(
        new Manager(
          manager.name,
          manager.id,
          manager.officeNumber,
          manager.email
        )
      );
      promptNewEmp();
    });
}
//prompts to create new engineers or interns
function promptNewEmp() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add to the team?",
        name: "engOrInt",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then(function ({ engOrInt }) {
      //if user chooses to add ENG then invoke add engineer function
      if (engOrInt === "Engineer") {
        engPrompt();
      }
      //if user chooses to add intern then invoke add intern function
      else if (engOrInt === "Intern") {
        intPrompt();
      }
      // console.log("quit");
      else {
        fs.writeFile(outputPath, render(teamList), (err) => {
          if (err) throw err;
          console.log("File has been written!");
        });
      }
    });
}
//add ENG function
function engPrompt() {
  inquirer
    .prompt([
      {
        message: "What is your engineer's name?",
        name: "name",
      },
      {
        message: "What is your engineer's ID?",
        name: "id",
      },
      {
        message: "What is your engineer's email?",
        name: "email",
      },
      {
        message: "What is your engineer's GitHub?",
        name: "gitHub",
      },
    ])
    .then(function (engineer) {
      // console.log(engineer);
      //adding new engineer to array of employees
      teamList.push(
        new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.gitHub
        )
      );
      promptNewEmp();
    });
}
//add intern function
function intPrompt() {
  inquirer
    .prompt([
      {
        message: "What is your intern's name?",
        name: "name",
      },
      {
        message: "What is your intern's ID?",
        name: "id",
      },
      {
        message: "What is your intern's email?",
        name: "email",
      },
      {
        message: "What is your intern's school?",
        name: "school",
      },
    ])
    .then(function (intern) {
      // console.log(intern);
      //add new intern to array of all team members
      teamList.push(
        new Intern(intern.name, intern.id, intern.email, intern.school)
      );
      promptNewEmp();
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
