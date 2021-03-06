const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const roleQuest = [
    {
        type: "checkbox",
        name: "role",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "Manager"
        ]
    }
]

const employeeQuest = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number?",
    },
]
const engineerQuest = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "gihub",
        message: "What is your github profile?",
    },
]
const internQuest = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of your school?",
    },
]
const managerQuest = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
    },
]


    inquirer.prompt(roleQuest).then(choice => {
        if (choice.Employee) {
            inquirer.prompt(employeeQuest).then(answersemployeeQuest => {
                const employee = new Employee(
                    answersemployeeQuest.name,
                    answersemployeeQuest.email,
                    answersemployeeQuest.id
                )
            });
        } else if (answer.Engineer) {
            inquirer.prompt(engineerQuest).then(answersengineerQuest => {
                const engineer = new Engineer(
                    answersengineerQuest.name,
                    answersengineerQuest.email,
                    answersengineerQuest.id
                )
            });
        } else if (answer.Intern) {
            inquirer.prompt(internQuest).then(answersinternQuest => {
                const intern = new Intern(
                    answersinterneQuest.name,
                    answersinternQuest.email,
                    answersinternQuest.id
                )
            });
        } else if (answer.Manager) {
            inquirer.prompt(managerQuest).then(answersmanagerQuest => {
                const manager = new Manager(
                    answersmanagerQuest.name,
                    answersmanagerQuest.email,
                    answersmanagerQuest.id
                )
            });
        }
    });


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// function render() {
    
// }

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
