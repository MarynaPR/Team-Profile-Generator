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
        <h2 class="card-title"><i class="far fa-user-circle mr-2"></i> ${name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Manager</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"><i class="fas fa-fingerprint mr-2"></i>Id: ${id}</li>
            <li class="list-group-item"><i class="fas fa-envelope mr-2"></i>Email: <a href="mailto:${email}}">${email}</a></li>
            <li class="list-group-item"><i class="fas fa-address-book mr-2"></i>Office number: ${officeNumber}</li>
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
            <h2 class="card-title"><i class="far fa-user-circle mr-2"></i></i> ${name}</h2>
            <h3 class="card-title"><i class="fas fa-brain mr-2"></i>Engineer</h3>
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"><i class="fas fa-fingerprint mr-2"></i>Id: ${id}</li>
                <li class="list-group-item"><i class="fas fa-envelope mr-2"></i>Email: <a href="mailto:${email}}">${email}</a></li>
                <li class="list-group-item",id="btn mt-auto"><i class="fab fa-github mr-2"></i>GitHub Account: <a href ="https://github.com/${github}" rel="noopener noreferrer">${github}</a></li>
            </ul>
        </div>
      </div>
   `;
      })
    }
    ${employeeData
      .filter(employee => employee.getRole() === "Intern")
      .map(({ name, id, email, school }) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title"><i class="far fa-user-circle mr-2"></i> ${name}</h2>
            <h3 class="card-title"><i class="far fa-clipboard mr-2"></i>Intern</h3>
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"><i class="fas fa-fingerprint mr-2"></i>Id: ${id}</li>
                <li class="list-group-item"><i class="fas fa-envelope mr-2"></i>Email: <a href="mailto:${email}}">${email}</a></li>
                <li class="list-group-item"><i class="fas fa-school mr-2"></i>School: ${school}</li>
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
                <h1 class="text-center">Team Profile Generator</h1>
            </div>
        </div>
    </div>
    <div class="container">
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Team Members</h3>
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

