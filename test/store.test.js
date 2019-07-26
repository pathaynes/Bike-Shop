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
    const products = store.getProducts();

    assert.deepEqual(products, bikes);
});

test('get shopping cart returns empty array when non-existent', (assert) => {
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, []);
});

test('order product adds item to shopping cart', (assert) => {
    const code = 'mt-bike';
    const expected = [{
        code: 'mt-bike',
        quantity: 1
    }];

    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
});

test('get a product by code', (assert) => {
    const code = 'mt-bike';
    const expected = bikes[0];

    const bike = store.getProduct(code);

    assert.deepEqual(bike, expected);
});

test('add new product', (assert) => {

    const product = {
        code: 'bmx-bike',
        name:'BMX Bike',
        image: 'bmx-bike.png',
        category: 'freestyle',
        price: '200',
        description: 'small bike for getting radical',
    };

    store.addProduct(product);
    const bikes = store.getProducts();

    assert.deepEqual(bikes[bikes.length - 1], product);
});