// task #1
function findType(input) {
    return typeof input;
} 

// task #2
function forEach(inputArray, foo) {
    for(let i = 0; i < inputArray.length; i++){
        foo(inputArray[i]);
    }
} 

// task #3
function map(inputArray, modifyFunc) {
    let newArray = [];

    forEach(inputArray, function(el) {
        newArray.push(modifyFunc(el))
    })

    return newArray
}

//task #4
function filter(inputArray, filterFunc) {
    let newArray = [];

    forEach(inputArray, function(el) {
        if(filterFunc(el)) {
            newArray.push(el)
        }
    })

    return newArray
}

// task #5
function getAdultAppleLovers(data) {
    return map(
        filter(data, function(el){
        return el.favoriteFruit === 'apple' && el.age >= 18
    }), function(el) {
        return el.name
    })
}

// task #6
function keys(someObj) {
    let keysArray = [];

    for(let k in someObj) {
        if (Object.prototype.hasOwnProperty.call(someObj, k)) {
            keysArray.push(k);
        }
    }

    return keysArray;
}

// task #7
function values(someObj) {
    let valuesArray = [];

    for(let k in someObj) {
        if (Object.prototype.hasOwnProperty.call(someObj, k)) {
            valuesArray.push(someObj[k]);
        }
    }

    return valuesArray;
}

// task #8
function showFormattedDate(date){
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
