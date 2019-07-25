
import bikes from './data/bikes.js';
import cart from './data/order.js';
import renderCart from './render-cart.js';
import { findProduct, getOrderTotal } from './register.js';

const table = document.getElementById('shopping-cart');

//loop through the cart
for(let i = 0; i < cart.length; i++) {
    //match inventory with cart
    const cartItem = cart[i];
    const cartBike = findProduct(bikes, cartItem.code);
    //render table row with matched items
    const pasteItem = renderCart(cartItem, cartBike);
    table.appendChild(pasteItem);
}



