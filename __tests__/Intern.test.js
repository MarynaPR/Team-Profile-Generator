const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

//get value from constructor(school)
test('create intern school', () => {
    const value = '';
    const employee = new Intern('AnyName', 0, 'email@email.com', value);
    expect(employee.school).toBe(value);
});
// * `getSchool()`
test('getSchool()', () => {
    const value = 'school';
    const employee = new Intern('AnyName', 0, 'email@email.com', value);
    expect(employee.getSchool()).toBe(value);
});
// * `getRole()
test('getRole()', () => {
    const value = 'Intern';
    const employee = new Intern('AnyName', 0, 'email@email.com', 'school', value);
    expect(employee.getRole()).toBe(value);
});