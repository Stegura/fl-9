function isPrime(n) {
    const evenPrime = 2;
    let counter = 0;
    if(n === evenPrime) {
        return true;
    } else if (n%evenPrime === 0){
        return false;
    } else {
        for( let i = evenPrime; i <= Math.ceil(Math.sqrt(n)); i++) {
            if(n%i === 0) {
                counter++;
            }
        } 
        if(counter > 0){
            return false;
        } else {
            return true;
        }
    } 
}