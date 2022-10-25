const Intern = require('../lib/Intern')

test('school', () => {
    const school = 'UW';
    const intern = new Intern('Noah', 23, 'noah@email.com', school);
    expect(intern.school).toBe(school);
})

test('getSchool function', () => {
    const school = 'UW';
    const intern = new Intern('Noah', 23, 'noah@email.com', school);
    expect(intern.getSchool()).toBe(school);
})

test('getRole function', () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe('Intern');
})