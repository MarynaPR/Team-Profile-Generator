const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./write-file.js');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');

const teamArr = [];
function promptResponse() {
    console.log(`
 ===============================
 Add a New Team Member - Manager
 ===============================
`); return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter manager's name. (Required)",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter manager's employee ID. (Required)",
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's emoloyee ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter manager's email address. (Required)",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerofficeNumber",
                message: "Enter manager's office number. (Required)",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's office number!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamArr.push(manager);
            getTeam()
        })

    //engineer
    function getEngineer() {
        console.log(`
    =================================
    Add a New Team Member - Engineer
    =================================
    `);
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Enter engineer's name. (Required)",
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log("You need to enter engineer's name!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Enter your engineer's employee ID (Required)",
                    validate: engineerIdInput => {
                        if (engineerIdInput) {
                            return true;
                        } else {
                            console.log("You need to enter engineer's employee ID!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Enter engineer's email address. (Required)",
                    validate: engineerEmailInput => {
                        if (engineerEmailInput) {
                            return true;
                        } else {
                            console.log("You need to enter your engineer's email address!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter engineer's GitHub Username. (Required)",
                    validate: engineerGithubInput => {
                        if (engineerGithubInput) {
                            return true;
                        } else {
                            console.log('Please enter GitHub username!');
                            return false;
                        }
                    }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                teamArr.push(engineer);
                getTeam()
            })
    };
    //intern
    function getIntern() {
        console.log(`
    ===============================
    Add a New Team Member - Intern
    ===============================
    `);
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Enter inter's name. (Required)",
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log("You need to enter intern's name!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Enter intern's employee ID. (Required)",
                    validate: internIdInput => {
                        if (internIdInput) {
                            return true;
                        } else {
                            console.log("You need to enter intern's emoloyee ID!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Enter intern's email address? (Required)",
                    validate: internEmailInput => {
                        if (internEmailInput) {
                            return true;
                        } else {
                            console.log("You need to enter entern's email address!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter intern's school name? (Required)",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("You need to enter intern's school name!");
                            return false;
                        }
                    }
                }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                teamArr.push(intern);
                getTeam();
            });
    }
    //start the prompt questions
    function getTeam() {
        console.log(`
    ============
      New Team 
    ============
    `);
        return inquirer
            .prompt([
                {
                    type: "list",
                    name: "employee",
                    message: "Enter your next employee.",
                    choices: ["Engineer", "Intern", "Finish project"]
                }
            ]).then(answers => {
                switch (answers.employee) {
                    case "Engineer":
                        getEngineer();
                        break;
                    case "Intern":
                        getIntern();
                        break;
                    case "Finish project":
                        let fileContent = generatePage(teamArr);
                        writeFile(fileContent);
                        console.log('HTML created');
                }
            })
    }
};

promptResponse();
