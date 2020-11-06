// In addition to `Employee`'s properties and methods, `Manager` will also have:
// * `officeNumber`
// * `getRole()`   // Overridden to return 'Manager'
const Employee = require('../lib/Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
    getRole() {// Overridden to return 'Manager'
        return 'Manager';
    }
}
module.exports = Manager;