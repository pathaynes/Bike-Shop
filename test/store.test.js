import store from '../src/data/store.js';
import bikes from '../src/data/bikes.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('first test', assert => {
    assert.equal(store.storage, window.sessionStorage);
});

test('basic get and save', assert => {
    const key = 'bike';
    const bike = { name: 'mt bike' };
    
    store.save(key, bike);
    const got = store.get(key);

    assert.deepEqual(got, bike);
});

test('get products returns bootstrapped data', (assert) => {
    // act
    const products = store.getProducts();

    // assert
    assert.deepEqual(products, bikes);
});

test('get shopping cart returns empty array when non-existent', (assert) => {
    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);
});
test('order product adds item to shopping cart', (assert) => {
    // arrange
    const code = 'mt-bike';
    const expected = [{
        code: 'mt-bike',
        quantity: 1
    }];

    // act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});