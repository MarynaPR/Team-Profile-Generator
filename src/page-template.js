// create the about MY Team section


// create the projects section
function generatePage(employee) {
  return "bob"
  //`
  //     <section class="my-3" id="portfolio">
  //       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
  //       <div class="flex-row justify-space-between">
  //       ${employee
  //       .filter(({ employee => employee.getRole() === 'Manager')
  //         .map(({ name, id, email, officeNumber }) => {
  //           return `
  //           <div class="col-12 mb-2 bg-dark text-light p-3">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.map(language => language).join(',')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //         })
  //         .join('')}

  //       ${data
  //       .filter(({ employee }) => !employee)
  //       .map(({ name, id, email }) => {
  //         console.log('EMPLOYEE');
  //         return `
  //           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.join(', ')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //       })
  //       .join('')}

  //       </div>
  //     </section>
  //   `;
};

// export function to generate entire page
module.exports = {
  generate: (templateData) => {
    console.log("PAGE")
    // destructure page data by section
    //const { projects, about, ...header } = templateData;

    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
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
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generatePage(templateData)}
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
      // ${templateData.forEach((e) => `<p>${templateData}`)}
