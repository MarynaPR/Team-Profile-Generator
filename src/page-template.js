// create the about MY Team section
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

function generateAllEmployees(dataArr) {
  for (const data in dataArr) {
    generateEmployees(data)
    console.log('GENERATE')
  }
};

function generateEmployees(data) {
  console.log(data)
  if (!data === Manager) {
    //   return ''
    // }
    return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
      </ul>
  </div>
</div>
`
  }
  // const html = [];

  // html.push(data
  //   .filter(employee => employee.getRole() === "Manager")
  //   .map(manager => generateEmployees(manager))
  // );
  // return html.join('');
}
//   //if (data) {
//   if (data === 'Manager') {
//     const mng = new Manager(data.name, data.id, data.email, data.officeNumber)
//     //console.log(dataArr)
//     console.log(data)
//     return `


//   <div class="card employee-card">
//   ${data
//         .filter(({ feature }) => feature)
//         .map(({ name, id, email }) => {
// //           return `

//       < div class="card-header" >
//       <h2 class="card-title">${data.name}</h2>
//       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole}</h3>
//     </div >
//       <div class="card-body">
//         <ul class="list-group">
//           <li class="list-group-item">ID: ${manager.getId}</li>
//           <li class="list-group-item">Email: <a href="mailto:${manager.getEmail}}">${manager.getEmail}</a></li>
//           <li class="list-group-item">Office number: ${manager.getOfficeNumber}}</li>
//         </ul>
//       </div>
//   </div >
//   `
//         })
//         .join('')}
//   `;

// const page = [];

// page.push(dataArr
//   .filter(employee => employee.getRole() === "Manager")
//   .map(manager => generateEmployees(manager))
// );
// return page.join('');

// export function to generate entire page
module.exports = {
  generate: (templateData) => {
    console.log("PAGE")
    //const { Employee, Manager, Intern, Engineer } = templateData;
    return `
      < !DOCTYPE html >
     <html lang="en">

     <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Team-Page-Generator</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
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
   ${generateAllEmployees(templateData)}
   </div>
    </div>
    </div>
   </body>

   <footer class="container text-center py-3">
   <h3 class="text-dark">&copy;2020 by Maryna Pryadka</h3>
    </footer>
  </body>
  </html>
  `
  }
}

// ${JSON.stringify(templateData)}
//${templateData.forEach((e) => `<p>${templateData}`)}
//${templateData.forEach((e) => "<p>${templateData}")}
// ${generateEmployees(manager)}
//
//   ${generateAllEmployees(templateData)}
//    ${JSON.stringify(templateData)}
//${templateData.forEach((e) => `<p>${templateData}`)}