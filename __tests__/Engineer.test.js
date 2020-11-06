// In addition to `Employee`'s properties and methods, `Engineer` will also have:
// * `github`  // GitHub username
// * `getGithub()`
// * `getRole()`   // Overridden to return 'Engineer'

const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

//get value from constructor(github)
test('create engineer github', () => {
    const value = '';
    const employee = new Engineer('AnyName', 0, 'email@email.com', value);
    expect(employee.github).toBe(value);
});
// * `getGithub()`
test('getGithub()', () => {
    const value = 'github';
    const employee = new Engineer('AnyName', 0, 'email@email.com', value);
    expect(employee.getGithub()).toBe(value);
});
// * `getRole()
test('getRole()', () => {
    const value = 'Engineer';
    const employee = new Engineer('AnyName', 0, 'email@email.com', 'github', value);
    expect(employee.getRole()).toBe(value);
});