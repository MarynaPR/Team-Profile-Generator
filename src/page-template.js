const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const writeHTML = require("../write-file.js");

const generateTeam = employeeData => {
  return `
   ${employeeData
      .filter(employee => employee.getRole() === 'Manager')
      .map(({ name, id, email, officeNumber }) => {
        return `
  <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">Name: ${name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Manager</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Id: ${id}</li>
            <li class="list-group-item">Email: ${email}</a></li>
            <li class="list-group-item">Office number: ${officeNumber}</li>
        </ul>
    </div>
  </div>
   `;
      })
    }
   ${employeeData
      .filter(employee => employee.getRole() === "Engineer")
      .map(({ name, id, email, github }) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Name: ${name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${id}</li>
                <li class="list-group-item">Email: ${email}</a></li>
                <li class="list-group-item",id="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub ${github}</li>
            </ul>
        </div>
      </div>
   `;
      })
    }
    ${employeeData
      .filter(employee => employee.getRole() === "Intern")
      .map(({ name, id, email, school }) => {
        // console.log(id);
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Name: ${name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Intern</h3>
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${id}</li>
                <li class="list-group-item">Email: ${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
      </div>
   `;
      })
    }
  `;
};


// export function to generate entire page
module.exports = templateData => {
  return `
  <!DOCTYPE html>
  <html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <title>Team-Page-Generator</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Welcome to My Team</h3>
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(templateData)}
            </div>
        </div>
    </div>
</body>
  
<footer class="container text-center py-3">
   <h6 class="text-dark">&copy;2020 by Maryna Pryadka</h6>
</footer>
</html>
  `;
};

