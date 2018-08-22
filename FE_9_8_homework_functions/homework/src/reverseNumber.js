function reverseNumber(numToReverse) {
    if(numToReverse < 0){
        numToReverse = Math.abs(numToReverse);
        return -parseInt(
            numToReverse
            .toString()
            .split('')
            .reverse()
            .join('')
        );
    } else {
        return parseInt(
            numToReverse
            .toString()
            .split('')
            .reverse()
            .join('')
        );       
    }
}