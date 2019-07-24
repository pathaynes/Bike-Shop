
import bikes from './data/bikes.js';
import cart from './data/order.js';
import renderCart from './render-cart.js';
import { findProduct, getOrderTotal } from './register.js';

const table = document.getElementById('shopping-cart');
const bike = findProduct(bikes, cart[0].code);
const line1 = renderCart(cart[0], bike);

table.appendChild(line1);

