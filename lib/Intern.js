class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
    
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern