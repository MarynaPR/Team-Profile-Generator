// The first class is an Employee parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`    // Returns 'Employee'
// }
class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.setRole('Employee')

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
        return this.role;
    }
    setRole(roleName) {
        this.role = roleName

    }
}
module.exports = Employee;