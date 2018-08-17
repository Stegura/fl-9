let login = prompt('Enter login','');
if(login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    switch(login) {
        case 'User':
            getPassword(prompt('Enter password',''));
            break;
        case '':
            alert('Canceled')
            break;
        case null:
            alert('Canceled')
            break;
        default:
            alert('I don’t know you');
    }
}

function getPassword(userInput) {
    switch(userInput) {
        case 'SuperUser':
            sayHello();
            break;
        case '':
            alert('Canceled')
            break;
        case null:
            alert('Canceled')
            break;
        default:
            alert('Wrong password')
    }
}

function sayHello() {
    let curentTime = new Date();
    if(curentTime.getHours() < 20) {
        alert('Good day!');
    } else {
        alert('Good evening!');
    }
}