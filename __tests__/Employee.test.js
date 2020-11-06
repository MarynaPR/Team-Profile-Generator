
const Employee = require('../lib/Employee.js');

// test('creates an employee object', () => {
//     const employee = new Employee(); //('Name', 1234, 'email@email.com');
//     expect(employee.employee).toBe('object');

// });
//get value from constructor(name, id, email)
test('create employee name', () => {
    const name = "AnyName";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('create employee id', () => {
    const value = 0;
    const employee = new Employee(name, value);
    expect(employee.id).toBe(value);
});
test('create employee email', () => {
    const value = 'email@email.com';
    const employee = new Employee(name, 0, value);
    expect(employee.email).toBe(value);
});
//test for methods // * `getName()` * `getId()` * `getEmail()` * `getRole()`=>// Returns 'Employee'
test('getName()', () => {
    const value = "AnyName";
    const employee = new Employee(value);
    expect(employee.getName()).toBe(value);
});
test('getId()', () => {
    const value = 0;
    const employee = new Employee(name, value);
    expect(employee.getId()).toBe(value);
});
test('getEmail()', () => {
    const value = 'email@email.com';
    const employee = new Employee(name, 0, value);
    expect(employee.getEmail()).toBe(value);
});