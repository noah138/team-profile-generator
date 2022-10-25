const Engineer = require('../lib/Engineer')

test('github account', () => {
    const github = 'noah138';
    const engineer = new Engineer('Noah', 23, 'noah@email.com', github);
    expect(engineer.github).toBe(github);
})

test('getGithub function', () => {
    const github = 'noah138';
    const engineer = new Engineer('Noah', 23, 'noah@email.com', github);
    expect(engineer.getGithub()).toBe(github);
})

test('getRole function', () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe('Engineer');
})