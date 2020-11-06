// In addition to `Employee`'s properties and methods, `Manager` will also have:
// * `officeNumber`
// * `getRole()`   // Overridden to return 'Manager'
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

//get value from constructor(officeNumber)
test('create manager officeNumber', () => {
    const value = 0;
    const employee = new Manager('AnyName', 0, 'email@email.com', value);
    expect(employee.officeNumber).toBe(value);
});
test(`getRole()`, () => {
    const value = 'Manager';
    const employee = new Manager('AnyName', 0, 'email@email.com', 0);
    expect(employee.getRole()).toBe(value);
}); 