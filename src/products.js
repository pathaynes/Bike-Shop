import bikes from './data/bikes.js';
import renderBike from './render-bike.js';

const list = document.getElementById('bikes');

for(let i = 0; i < bikes.length; i++) {
    const fruit = bikes[i];
    const dom = renderBike(fruit);
    list.appendChild(dom);
}