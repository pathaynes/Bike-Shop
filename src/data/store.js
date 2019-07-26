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
        if(!products) {
            store.save(PRODUCT_KEY, bikes);
            products = bikes;
        }
        return products;
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);

        return product;
    },

    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save(PRODUCT_KEY, products);
    },

    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            shoppingCart = [];
            store.save(SHOPPING_CART_KEY, shoppingCart);
        }
        return shoppingCart;
    },

    orderProduct(code) {
        const shoppingCart = store.getShoppingCart();
        const lineItem = findProduct(shoppingCart, code);
        
        if(lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                code: code,
                quantity: 1
            };

            shoppingCart.push(lineItem);
        }


        store.save(SHOPPING_CART_KEY, shoppingCart);
    }
};


export default store;