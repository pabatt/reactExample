export const priceCompare = (oldPrice, newPrice) => {
    let priceMove = '';
    if(oldPrice<newPrice) {
        priceMove = '--up';
    } else if(oldPrice>newPrice){
        priceMove = '--down';
    }

    return priceMove;
}