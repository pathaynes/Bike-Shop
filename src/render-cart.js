import { getLineTotal } from '../src/register.js';


function renderCart(lineItem, bike) {
    console.log(bike);
    const line = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = bike.name;
    line.appendChild(tdName);

    const tdQty = document.createElement('td');
    tdQty.textContent = lineItem.quantity;
    line.appendChild(tdQty);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = bike.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    line.appendChild(tdPrice);

    const tdTotal = document.createElement('td');
    const total = getLineTotal(lineItem.quantity, bike.price);
    tdTotal.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    line.appendChild(tdTotal);

    return line;

}
export default renderCart;