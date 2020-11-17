const fs = require('fs');
console.log("loaded");
// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'html is created!'
            });
        });
    });
};
module.exports = writeFile;