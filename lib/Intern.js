
// In addition to `Employee`'s properties and methods, `Intern` will also have:
// * `school`
// * `getSchool()`
// * `getRole()`   // Overridden to return 'Intern'
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        //this.setRole('Intern')
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        // Overridden to return 'Intern'
        return 'Intern';
    }
}
module.exports = Intern;