let price = prompt('Enter amount',''),
    discount = prompt('Enter discount',''),
    priceWithDiscount = price - price * discount/100,
    saved = price - priceWithDiscount;
if( price >= 0 && price !== '' && discount <= 100 && discount >= 0 && discount !== '' && price !== null && discount !== null) {
    console.log(
        'Price without discount: ', price, '\n',
        'Discount: ', discount+'%', '\n',
        'Price with discount: ', Math.round(priceWithDiscount*100) / 100, '\n',
        'Saved: ', Math.round(saved*100) / 100
    );
} else {
    console.log('’Invalid data’');
}