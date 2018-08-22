function getClosestToZero() {
    let c = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(Math.abs(arguments[i]) < Math.abs(c)) {
            c = arguments[i];
        }
    }
    return c;   
}