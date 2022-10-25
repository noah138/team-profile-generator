const Employee = require('../lib/Employee')

test('employee is an object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

test('employee gets a name', () => {
    const name = 'Noah';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test('employee gets an id', () => {
    const id = 23;
    const employee = new Employee('Noah', id);
    expect(employee.id).toBe(id);
})

test('employee gets an email', () => {
    const email = 'noah@email.com';
    const employee = new Employee('Noah', 23, email);
    expect(employee.email).toBe(email);
})

test('getName function', () => {
    const name = 'Noah';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test('getId function', () => {
    const id = 23;
    const employee = new Employee('Noah', id);
    expect(employee.getId()).toBe(id);
})

test('getEmail function', () => {
    const email = 'noah@email.com';
    const employee = new Employee('Noah', 23, email);
    expect(employee.getEmail()).toBe(email);
})

test('getRole function', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe('Employee');
})