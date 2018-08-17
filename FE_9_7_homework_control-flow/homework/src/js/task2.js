const startRange = 5,
    startPrize = 10;

let rangeNum = 5,
    prize = 10,
    totalPrize = 0,
    attemptCounter = 1,
    possiblePrize,
    i, 
    randomNum;

if( confirm('Do you want to play a game?')) {
    startGame();
} else {
    alert('You did not become a millionaire, but can.')
}

function getRandomNum(maxRangeNum) {
    randomNum = Math.floor(Math.random() * Math.floor(++maxRangeNum));
}

function guessNumber() {
    if(
        parseFloat(
            prompt(
                `Enter a number from 0 to ${rangeNum}  
Attempts left: ${i}
Total prize ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`,'')
        ) !== randomNum) {
        i--;
        possiblePrize = Math.floor(possiblePrize/2);
        if(i >= attemptCounter) {
            guessNumber();
        } else {
            alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
            rangeNum = startRange;
            prize = startPrize;
            totalPrize = 0;
            if(confirm('Do you want to play again')) {
                startGame();
            } 
        }
    } else {
        totalPrize += possiblePrize;
        if(confirm(`Congratulation!   Your prize is: ${totalPrize}$, Do you want to continue?`)){
            rangeNum = rangeNum * 2;
            prize = prize * 3;
            startGame();
        } else {
            alert(`You win ${totalPrize}$`)
        }
    }
}

function startGame() {
    possiblePrize = prize;
    i = 3;
    getRandomNum(rangeNum);
    guessNumber();
}