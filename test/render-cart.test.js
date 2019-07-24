import renderCart from '../src/render-cart.js';

const test = QUnit.test;

QUnit.module('Render Cart');

test('Renders a Mt Bike', assert => {
    const lineItem = { 
        code: 'mt-bike',
        quantity: 1
    };

    const bike = {
        code: 'mt-bike',
        name: 'Mt Bike',
        image: 'assets/mtbike.jpeg',
        description: 'Grey full suspension mt bike',
        category: 'off-road',
        price: 3000.00,
        cost: 1000.00
    };

    const expected = '<tr><td>Mt Bike</td><td>1</td><td>$3,000.00</td><td>$3,000.00</td></tr>';

    const dom = renderCart(lineItem, bike);
    const html = dom.outerHTML;

    assert.equal(html, expected);

});
