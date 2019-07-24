import { getOrderTotal, findProduct, getLineTotal } from '../src/register.js';
import cart from '../src/data/order.js';
import bikes from '../src/data/bikes.js';

const test = QUnit.test;

test('get order from customer', assert => {
    const result = getOrderTotal(cart, bikes);
    const expected = 3800;
    assert.equal(result, expected);
});


test('find the bike', assert => {
    const code = 'mt-bike';
    const result = findProduct(bikes, code);

    const expected = {
        code: 'mt-bike',
        name: 'Mt Bike',
        image: 'assets/mtbike.jpeg',
        description: 'Grey full suspension mt bike',
        category: 'off-road',
        price: 3000.00,
        cost: 1000.00
    };
    
    assert.deepEqual(result, expected);
});

test ('get the line total', assert => {
    const quantity = 2;
    const price = 2000;
    const result = getLineTotal(quantity, price);
    const expected = 4000;

    assert.equal(result, expected);

});