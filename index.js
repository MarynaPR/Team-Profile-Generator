const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./write-file.js');

const promptResponse = data => {
    console.log(`
======================
Add a New Team Member
======================
`);
    // If there's no 'projects' array property, create one
    if (!data) {
        data = [];
    }
    return inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "Who do you want to add to the page?",
                choices: ["Manager", "Engineer", "Intern", "Employee"]
            },
            {
                type: "input",
                name: "name",
                message: "Enter manager's name. (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter manager's employee ID. (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's emoloyee ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter manager's email address. (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "office",
                message: "Enter manager's office number. (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("You need to enter manager's office number!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this employee?',
                default: false
            },
            //engineer
            {
                type: "input",
                name: "engineerName",
                message: "Enter engineer's name. (Required)",

                when: (answers) => answers.employee == "Engineer",
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
                when: (answers) => answers.employee == "Engineer",
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
                when: (answers) => answers.employee == "Engineer",
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
                when: (answers) => answers.employee == "Engineer",
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                        return true;
                    } else {
                        console.log('Please enter GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this employee?',
                default: false
            },
            //intern
            {
                type: "input",
                name: "internName",
                message: "Enter inter's name. (Required)",
                when: (answers) => answers.employee == "Intern",
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
                when: (answers) => answers.employee == "Intern",
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
                when: (answers) => answers.employee == "Intern",
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
                when: (answers) => answers.employee == "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("You need to enter intern's school name!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this employee?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            },
        ])
        .then(employeeData => {
            data.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptResponse(data);
            } else {
                return data;
            }
        });
};
promptResponse()
    .then(data => {
        return generatePage(data)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileData => {
        console.log(writeFileData)
        return;
    })
    .catch(err => {
        console.log(err);
    });






