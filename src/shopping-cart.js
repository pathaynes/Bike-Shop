
import bikes from './data/bikes.js';
import store from './data/store.js';
import renderCart from './render-cart.js';
import { findProduct } from './register.js';

const table = document.getElementById('shopping-cart');
const shoppingCart = store.getShoppingCart();
console.log(shoppingCart);


for(let i = 0; i < shoppingCart.length; i++) {
    //match inventory with cart
    const cartItem = shoppingCart[i];
    const cartBike = findProduct(bikes, cartItem.code);
    //render table row with matched items
    const pasteItem = renderCart(cartItem, cartBike);
    table.appendChild(pasteItem);
}



