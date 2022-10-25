const Manager = require('../lib/Manager')

test('officeNumber', () => {
    const officeNumber = 10;
    const manager = new Manager('Noah', 23, 'noah@email.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
})

test('getofficeNUmber function', () => {
    const officeNumber = 10;
    const manager = new Manager('Noah', 23, 'noah@email.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})

test('getRole function', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
})