const fs = require('fs'); //allows index.js file to access the fs module 's functions through the fs assignment.
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
