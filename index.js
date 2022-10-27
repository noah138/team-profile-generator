// HTML link
const generatePage = require("./src/generatePage")

// Employee links
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Node links
const inquirer = require("inquirer");
const fs = require("fs");

// Array to add employees to
let teamArray = []

// function for adding an engineer
// asks for name, id, email, github
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the github username of the engineer?"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        buildTeam();
    })
}

// function for adding an intern
// asks for name, id, email, school
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the intern?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does/did the intern attend?"
        }
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        buildTeam();
    })
}

// function for adding an manager
// asks for name, id, email, office number
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of the manager?"
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        buildTeam();
    })
}

function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeChoice",
            message: "What type of employee would you like to add to the team?",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "No more employees to add"
            ]
        }
    ]).then((answer) => {
        switch(answer.employeeChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Manager":
                addManager();
                break;
            default:
                console.log(teamArray)
                const html = generatePage(teamArray);
                createPage(html);
        }
    })
}

const createPage = data => {
    fs.writeFile("./dist/output.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You team has been successfully created in the file output.html!")
        }
    })

}

buildTeam();