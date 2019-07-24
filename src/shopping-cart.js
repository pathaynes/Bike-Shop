
import bikes from './data/bikes.js';
import cart from './data/order.js';
import renderCart from './render-cart.js';
import { findProduct, getOrderTotal } from './register.js';



const table = document.getElementById('shopping-cart');

// find bike
const bike = findProduct(bikes, cart[0].code);

// create line item
const price = bike.price
const quantity = cart[0].quantity;
const line1 = renderCart(quantity, bike);

table.appendChild(line1);


