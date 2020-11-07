const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const page = require("./src/page-template")
const { writeFile } = require('./write-file.js');

const promptResponse = async data => {
    console.log(`
======================
Add a New Team Member
======================
`);
    // If there's no 'projects' array property, create one
    if (!data) {
        data = [];
    }
    let result = await inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "What do you want to add to the page?",
                choices: ["Manager", "Engineer", "Intern", "Employee"]

            },
            {
                type: "input",
                name: "name",
                message: "Enter your team manager's name? (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You need to enter your team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter your team manager's employee ID (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter emoloyee ID!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter your team manager's email address? (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("You need to enter your team manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "office",
                message: "Enter your team manager's office number? (Required)",
                when: (answers) => answers.employee == "Manager",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("You need to enter your team manager's office number!");
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
                name: "name",
                message: "Enter your engineer's name? (Required)",

                when: (answers) => answers.employee == "Engineer",
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log("You need to enter your engineer's name!");
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
                name: "email",
                message: "Enter your engineer's email address? (Required)",
                when: (answers) => answers.employee == "Engineer",
                validate: emailInput => {
                    if (emailInput) {
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
                message: 'Enter your GitHub Username (Required)',
                when: (answers) => answers.employee == "Engineer",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            //intern
            {
                type: "input",
                name: "name",
                message: "Enter your name (Required)",
                when: (answers) => answers.employee == "Intern",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You need to enter your name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter your employee ID (Required)",
                when: (answers) => answers.employee == "Intern",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter emoloyee ID!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address? (Required)",
                when: (answers) => answers.employee == "Intern",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("You need to enter your email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Enter the school name? (Required)",
                when: (answers) => answers.employee == "Intern",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("You need to enter your school name!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            },
        ])
    return result
};

const start = async (data = []) => {
    let result = await promptResponse()
    data.push(result)
    console.log(`This is the data: ${data}`)

    if (result.employee == "Manager") {
        data.push(new Manager(result.name, result.id, result.email, result.officeNumber))
    }
    if (result.employee == "Engineer") {
        data.push(new Engineer(result.name, result.id, result.email, result.github))
    }
    if (result.employee == "Intern") {
        data.push(new Intern(result.name, result.id, result.email, result.school))
    }
    if (result.employee == "Employee") {
        data.push(new Employee(result.name, result.id, result.email))
    }
    if (result.confirmAddEmployee) {
        // Check the answer to the result and make a class out of the answers.
        start(data)
    } else {
        console.log(data)
        let page_data = page.generate(data)
        writeFile(page_data)
    }
}

start()