import bikes from './bikes.js';
import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';

const store = {
    storage: window.localStorage,
    save(key, item){
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key){
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);
        // bootstrap products with fruits if doesn't exist
        if(!products) {
            store.save(PRODUCT_KEY, bikes);
            products = bikes;
        }
        return products;
    },
    getProduct(code) {
        // get products
        const products = store.getProducts();
        // find based on code
        const product = findProduct(products, code);

        return product;
    },
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },

    orderProduct(code) {

        // get shopping cart
        const shoppingCart = store.getShoppingCart();

        const lineItem = findProduct(shoppingCart, code);
        // does shopping cart already have code?
        if(lineItem) {
            // yes - increase quantity 
            lineItem.quantity++;
        }
        else {
            // no -
            // make an object for this line item
            const lineItem = {
                code: code,
                quantity: 1
            };

            // put in shopping cart array
            shoppingCart.push(lineItem);
        }

        // save shopping cart
        store.save(SHOPPING_CART_KEY, shoppingCart);
    }
};


export default store;