const inquirer = require('inquirer');
//const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./write-file.js');

//const employeeIdArr = [];
const teamArr = [];
function promptResponse() {
    console.log(`
 ===============================
 Add a New Team Member - Manager
 ===============================
`);
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter manager's name. (Required)",
            //when: (answers) => answers.employee == "Manager",
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
            // when: (answers) => answers.employee == "Manager",
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
            // when: (answers) => answers.employee == "Manager",
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
            // when: (answers) => answers.employee == "Manager",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You need to enter manager's office number!");
                    return false;
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'feature',
        //     message: 'Would you like to feature this employee?',
        //     default: false
        // }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamArr.push(manager);
        // employeeIdArr.push(answers.managerId);
        getTeam()
    })


    //engineer
    function getEngineer() {
        console.log(`
    =================================
    Add a New Team Member - Engineer
    =================================
    `);
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter engineer's name. (Required)",
                //when: (answers) => answers.employee == "Engineer",
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
                //when: (answers) => answers.employee == "Engineer",
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
                //when: (answers) => answers.employee == "Engineer",
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
                //when: (answers) => answers.employee == "Engineer",
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                        return true;
                    } else {
                        console.log('Please enter GitHub username!');
                        return false;
                    }
                }
            },
            // {
            //     type: 'confirm',
            //     name: 'feature',
            //     message: 'Would you like to feature this employee?',
            //     default: false
            // }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamArr.push(engineer);
            // employeeIdArr.push(answers.engineerId);
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
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter inter's name. (Required)",
                //when: (answers) => answers.employee == "Intern",
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
                // when: (answers) => answers.employee == "Intern",
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
                // when: (answers) => answers.employee == "Intern",
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
                //when: (answers) => answers.employee == "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("You need to enter intern's school name!");
                        return false;
                    }
                }
            },
            // {
            //     type: 'confirm',
            //     name: 'feature',
            //     message: 'Would you like to feature this employee?',
            //     default: false
            // }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            teamArr.push(intern);
            //employeeIdArr.push(answers.internId);
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
        inquirer.prompt([
            {
                type: "list",
                name: "employee",
                message: "Enter your next employee.",
                choices: ["Engineer", "Intern", "I do not have any new employee to add. Finish project."]
            }
        ]).then(answers => {
            switch (answers.employee) {
                case "Manager":
                    promptResponse();
                    break;

                case "Engineer":
                    getEngineer();
                    break;
                case "Intern":
                    getIntern();
                    break;
                case "Finish":
                    const fileContent = generatePage(teamArr);
                    writeFile(fileContent)
                    console.log('html');
            }
        })
    }
}

promptResponse();




// type: 'confirm',
//     name: 'confirmAddEmployee',
//         message: 'Would you like to enter another employee?',
//         default: false
//     },

//         .then(employeeData => {
//                 data.push(employeeData);
//                 if (employeeData.confirmAddEmployee) {
//                     return promptResponse(data);
//                 } else {
//                     return data;
//                 }
//             })

//         })
// };
// promptResponse()
//     .then(data => {
//         return generatePage(data)
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .then(writeFileData => {
//         console.log(writeFileData)
//         return;
//     })
//     .catch(err => {
//         console.log(err);


// // writing files
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: 'html is created!'
//             });
//         });
//     });
// };


// function getMembers() {
//     inquirer.prompt('')
//         .then((inquirerResponses) => {
//             writeFile('./dist/index.html', generatePage({ ...inquirerResponses }))
//         })
// }

//promptResponse();