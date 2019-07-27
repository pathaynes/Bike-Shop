import store from './data/store.js';
import renderCart from './render-cart.js';
import { findProduct, getOrderTotal } from './register.js';
import { toUSD } from './format.js';

const table = document.getElementById('shopping-cart');
const shoppingCart = store.getShoppingCart();
const bikes = store.getProducts();

for(let i = 0; i < shoppingCart.length; i++) {
    const cartItem = shoppingCart[i];
    const cartBike = findProduct(bikes, cartItem.code);
    const pasteItem = renderCart(cartItem, cartBike);
    table.appendChild(pasteItem);
}
const cartTotal = getOrderTotal(shoppingCart, bikes);
const orderTotal = document.getElementById('order-amount');
orderTotal.textContent = toUSD(cartTotal);



