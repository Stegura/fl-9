let login = prompt('Enter login',''),
    user = {
        login: 'User',
        password: 'SuperUser'
    }

if(isBlank(login)){
    alert('Canceled'); 
}else if (login === user.login) {
        getPassword(prompt('Enter password',''));
} else if(login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}

function isBlank(blancString) {
    return !blancString || /^\s*$/.test(blancString);
}

function getPassword(userInput) {
    if(isBlank(userInput)){
        alert('Canceled'); 
    } else if(userInput === user.password) {
        sayHello();
    } else {
        alert('Wrong password');
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