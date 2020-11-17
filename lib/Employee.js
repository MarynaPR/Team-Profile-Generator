// The first class is an Employee parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`    // Returns 'Employee'
// }

const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
        //this.setRole('Employee')

    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee";
        //this.role;
    }
    //setRole(roleName) {
    //  this.role = roleName

    //}
}
module.exports = Employee;