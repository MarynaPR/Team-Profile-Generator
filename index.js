// const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// //const{writeFile,copyFile} =require ()
// const promptAbout = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "team",
//       message: "What is your Team's Name? (Required)",
//       validate: teamInput => {
//         if (teamInput) {
//           return true;
//         } else {
//           console.log("Please enter your Team's name!");
//           return false;
//         }
//       }
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAbout',
//       message: 'Would you like to enter some information about your TEAM for "MY TEAM" section?',
//       default: true
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about your TEAM:',
//       when: ({ confirmAbout }) => confirmAbout
//     }
//   ]);
// };

// const promptResponse = teamData => {
//   console.log(`
// ======================
// Add a New Team Member
// ======================
// `);
//   // If there's no 'projects' array property, create one
//   if (!teamData.projects) {
//     teamData.projects = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter your team manager's name? (Required)",
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("You need to enter your team manager's name!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Enter your team manager's employee ID (Required)",
//         validate: idInput => {
//           if (idInput) {
//             return true;
//           } else {
//             console.log('You need to enter emoloyee ID!');
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter your team manager's email address? (Required)",
//         validate: emailInput => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log("You need to enter your team manager's email address!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "office",
//         message: "Enter your team manager's office number? (Required)",
//         validate: officeInput => {
//           if (officeInput) {
//             return true;
//           } else {
//             console.log("You need to enter your team manager's office number!");
//             return false;
//           }
//         }
//       },

//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this employee?',
//         default: false
//       },
//       {
//         type: 'checkbox',
//         name: 'employees',
//         message: "Please select from the following menu the employee you'd like to add next:",
//         choices: ["Add an engineer", "Add an intern", "Finish building my team"]
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddEmployee',
//         message: 'Would you like to enter another employee?',
//         default: false
//       },

//       //engineer
//       {
//         type: "input",
//         name: "name",
//         message: "Enter your engineer's name? (Required)",
//         validate: engineerNameInput => {
//           if (engineerNameInput) {
//             return true;
//           } else {
//             console.log("You need to enter your engineer's name!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "engineerId",
//         message: "Enter your engineer's employee ID (Required)",
//         validate: engineerIdInput => {
//           if (engineerIdInput) {
//             return true;
//           } else {
//             console.log("You need to enter engineer's employee ID!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter your engineer's email address? (Required)",
//         validate: emailInput => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log("You need to enter your engineer's email address!");
//             return false;
//           }
//         }
//       },

//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username (Required)',
//         validate: githubInput => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log('Please enter your GitHub username!');
//             return false;
//           }
//         }
//       },

//       //intern
//       {
//         type: "input",
//         name: "name",
//         message: "Enter your name (Required)",
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("You need to enter your name!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Enter your employee ID (Required)",
//         validate: idInput => {
//           if (idInput) {
//             return true;
//           } else {
//             console.log('You need to enter emoloyee ID!');
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter your email address? (Required)",
//         validate: emailInput => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log("You need to enter your email address!");
//             return false;
//           }
//         }
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "Enter the school name? (Required)",
//         validate: emailInput => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log("You need to enter your school name!");
//             return false;
//           }
//         }
//       },
//       //finish building my team
//       {
//         type: 'confirm',
//         name: 'finish',
//         message: 'Would you like to finish building your team?',
//         default: false
//       },
//     ])
//     .then(projectData => {
//       teamData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptResponse(teamData);
//       } else {
//         return teamData;
//       }
//     });
// };

// promptAbout()
//   .then(promptProject)
//   .then(teamData => {
//     console.log(teamData);
//     return generatePage(teamData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
