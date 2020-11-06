const fs = require('fs');

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
                message: 'html.js created!'
            });
        });
    });
};

module.exports = { writeFile };