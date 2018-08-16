const maxAngle = 180;
let sqr, per, c,
    a = prompt('Enter a-side length',''),
    b = prompt('Enter b-side length',''),
    cAngle = prompt('Enter angle','') * Math.PI / maxAngle;

if( a > 0 && b > 0 && cAngle > 0 && cAngle < maxAngle * Math.PI / maxAngle) {
    getCLength(a, b, cAngle);
    getPerimeter(a, b, c);
    getSquare(a, b, cAngle);
    console.log(
        'c length: ', c, '\n',
        'Triangle square: ', sqr, '\n',
        'Triangle perimeter: ', per 
    );
} else { 
    console.log('’Invalid data’');
}   
    
function getCLength(sideA, sideB, angel) {
    c = Math.round(
            Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * (
                sideA * sideB * Math.cos(angel)
            )
        ) * 100
    ) / 100;
}
function getPerimeter (sideA, sideB, sideC) {
    per = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC); 
} 
function getSquare(sideA, sideB, angle) {
    sqr = Math.round(
        sideA * sideB * Math.sin(angle) / 2
    ) * 100 / 100;
}