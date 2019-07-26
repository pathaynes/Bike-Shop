import store from './data/store.js';
import renderCart from './render-cart.js';
import { findProduct } from './register.js';

const table = document.getElementById('shopping-cart');
const shoppingCart = store.getShoppingCart();
const bikes = store.getProducts();

for(let i = 0; i < shoppingCart.length; i++) {
    const cartItem = shoppingCart[i];
    const cartBike = findProduct(bikes, cartItem.code);
    console.log(bikes);
    console.log(cartItem.code);
    const pasteItem = renderCart(cartItem, cartBike);
    table.appendChild(pasteItem);
}



