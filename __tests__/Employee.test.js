
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee(); //('Name', 1234, 'email@email.com');
    expect(employee).toBe('object');

});

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

// test('get an ID for employee as an object'), () => {

//     expect(employee.id).toHaveProperty('id');
// };



// expect(employee.email).toBe(email);
// expect(employee.id).toBe(id);
// expect(employee.email).toBe(email);

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.name.length).toBeGreaterThan(0);
//     expect(employee.id).toEqual(expect.any(Number));
// });

// The first class is an Employee parent class with the following properties and methods:


// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`   // Returns 'Employee'