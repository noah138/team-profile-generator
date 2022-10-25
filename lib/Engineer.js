class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {

    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;