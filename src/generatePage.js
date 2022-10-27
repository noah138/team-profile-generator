const generateEngineer = (engineer) => {
    return `
    <div class="card shadow-lg rounded m-4" style="width: 18rem">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${engineer.name}</h2>
            <h2 class="card-title">&#xe112;${engineer.role}</h2>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li class="list-group-item">
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li class="list-group-item">
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></li class="list-group-item">
            </ul>
        </div>
    </div>
    `
}

const generateIntern = (intern) => {
    return `
    <div class="card shadow-lg rounded m-4" style="width: 18rem">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${intern.name}</h2>
            <h2 class="card-title">&#xe233;${intern.role}</h2>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li class="list-group-item">
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li class="list-group-item">
                <li class="list-group-item">School: ${intern.school}</li class="list-group-item">
            </ul>
        </div>
    </div>
    `
}

const generateManager = (manager) => {
    return `
    <div class="card shadow-lg rounded m-4" style="width: 18rem">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${manager.name}</h2>
            <h2 class="card-title">&#xe184;${manager.role}</h2>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li class="list-group-item">
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li class="list-group-item">
                <li class="list-group-item">Office number: ${manager.officeNumber}</li class="list-group-item">
            </ul>
        </div>
    </div>
    `
}

generatePage = (data) => {
    let teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.role;
        
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            teamArray.push(engineerCard)
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            teamArray.push(internCard)
        }
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            teamArray.push(managerCard)
        }
    }

    const teamCards = teamArray.join('');

    const generateArray = generateHTML(teamCards);
    return generateArray
}

generateHTML = (teamCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dream Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron bg-danger">
                    <h1 class="text-white text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container container-fluid">
            <div class="row">       
                <div class="justify-content-center col-sm-6 col-md-4 col-lg-3 col-12">
                    ${teamCards}
                </div>
            </div>
        </div>
    </body>

    </html>
    `
}

module.exports = generatePage