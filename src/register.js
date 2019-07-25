export function findProduct(bikes, code){

    for(let i = 0; i < bikes.length; i++){
        const bike = bikes[i];

        if(bike.code === code) {
            return bike;
        }
    }
    return null;
}

export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function getOrderTotal(cart, bikes) {
    let getOrderTotal = 0;

    for(let i = 0; i < cart.length; i++){
        const code = cart[i].code;
        const bike = findProduct(bikes, code);
        const price = bike.price;
        const quantity = cart[i].quantity;
        const lineTotal1 = getLineTotal(quantity, price);
        getOrderTotal += lineTotal1;
    }

    return getOrderTotal;
}