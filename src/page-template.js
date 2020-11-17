const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const generateData = require('./write-file.js');


const generateTeam = employeeData => {

  return `
        <section class="my-3">
          <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
          <div class="flex-row justify-space-between">
          ${employeeData
      .filter(employee => employee.getRole() === 'Manager')
      .map(({ name, id, email, officeNumber }) => {
        return `
              <div class="col-12 mb-2 bg-dark text-light p-3">
              <div>Name: ${name}</div>
                <div class="item-title text-light">Email: ${email}</div>
                <div>
                <p>ID: ${id}</p>
                </div>
                <p>Office number:${officeNumber}</p>
              </div>
            `;
      })
    }
          ${employeeData
      .filter(employee => employee.getRole() === "Engineer")
      .map(({ name, id, email, github }) => {
        // console.log(id);
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
        <div>Name: ${name}</div>
          <div class="item-title text-light">Email: ${email}</div>
          <div>
          <p>ID: ${id}</p>
          </div>
          <p class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub ${github}</p>
        </div>
      `;
      })
    }
    ${employeeData
      .filter(employee => employee.getRole() === "Intern")
      .map(({ name, id, email, school }) => {
        // console.log(id);
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
        <div>Name: ${name}</div>
          <div class="item-title text-light">Email: ${email}</div>
          <div>
          <p>ID: ${id}</p>
          </div>
          <p class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub ${school}</p>
        </div>
      `;
      })
    }
  </div>
  </div>
  </section >
  `;
};


// export function to generate entire page
module.exports = templateData => {
  console.log("PAGE")

  // const { manager, intern, engineer } = templateData;

  return `
          < !DOCTYPE html >
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <title>Team-Page-Generator</title>

                      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

                        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                          <link rel="stylesheet" href="style.css">
     </head>
                          <body>
                            <div class="container-fluid">
                              <div class="row">
                                <div class="col-12 jumbotron mb-3 team-heading">
                                  <h2 class="text-center">My Team</h2>
                                </div>
                              </div>
                            </div>
                            <div class="container">
                              <div class="row">
                                <div class="team-area col-12 d-flex justify-content-center">
                                  ${generateTeam(templateData)}
                                </div>
   </div>
  </div>
   </body>
   <footer class="container text-center py-3">
  <h6 class="text-dark">&copy;2020 by Maryna Pryadka</h6></footer>
   </body>
   </html>
  `;
};

