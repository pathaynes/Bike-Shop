import renderBike from './render-bike.js';
import store from './data/store.js';

const list = document.getElementById('bikes');

const allProducts = store.getProducts();

for(let i = 0; i < allProducts.length; i++) {
    const bike = allProducts[i];
    const dom = renderBike(bike);
    list.appendChild(dom);
}



