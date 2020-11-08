// In addition to `Employee`'s properties and methods, `Engineer` will also have:
// * `github`  // GitHub username
// * `getGithub()`
// * `getRole()`   // Overridden to return 'Engineer'
const Employee = require('../lib/Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.setRole('Engineer')
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        // Overridden to return 'Engineer'
        return 'Engineer';
    }
}
module.exports = Engineer;