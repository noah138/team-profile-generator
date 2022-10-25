const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = 'Manager'
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager