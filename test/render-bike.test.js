import renderBike from '../src/render-bike.js';

const test = QUnit.test;

QUnit.module('Render Bike');

test('Renders a Mt Bike', assert => {
    const mtBike = {
        code: 'mt-bike',
        name: 'Mt Bike',
        image: '../assets/mtbike.jpeg',
        description: 'Grey full suspension mt bike',
        category: 'off-road',
        price: 3000.00,
        cost: 1000.00
    };
    
    const expected = '<li class="off-road" title="Grey full suspension mt bike"><h3>Mt Bike</h3><img src="../assets/mtbike.jpeg" alt="Mt Bike image"><p class="price">$3,000.00<button value="mt-bike">Add</button></p></li>';

    const dom = renderBike(mtBike);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a Dirt Jumper', assert => {
    const dirtJumper = {
        code: 'dirt-jumper',
        name: 'Dirt Jumper',
        image: '../assets/dirjumper.jpeg',
        description: 'blue front suspension freestyle jumper',
        category: 'freestyle',
        price: 800.00,
        cost: 400.00
    };
    
    const expected = '<li class="freestyle" title="blue front suspension freestyle jumper"><h3>Dirt Jumper</h3><img src="../assets/dirjumper.jpeg" alt="Dirt Jumper image"><p class="price">$800.00<button value="dirt-jumper">Add</button></p></li>';

    const dom = renderBike(dirtJumper);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a Hard Tail', assert => {
    const hardTail = {
        code: 'hard-tail',
        name: 'Hard Tail',
        image: '../assets/hardtail.jpeg',
        description: 'blue front suspension Mt Bike',
        category: 'off-road',
        price: 1200.00,
        cost: 600.00
    };
    
    const expected = '<li class="off-road" title="blue front suspension Mt Bike"><h3>Hard Tail</h3><img src="../assets/hardtail.jpeg" alt="Hard Tail image"><p class="price">$1,200.00<button value="hard-tail">Add</button></p></li>';

    const dom = renderBike(hardTail);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a Road Bike', assert => {
    const hardTail = {
        code: 'road-bike',
        name: 'Road Bike',
        image: '../assets/roadbike.jpeg',
        description: 'yellow, super fast speed demon road bike',
        category: 'road',
        price: 4000.00,
        cost: 2000.00
    };
    
    const expected = '<li class="road" title="yellow, super fast speed demon road bike"><h3>Road Bike</h3><img src="../assets/roadbike.jpeg" alt="Road Bike image"><p class="price">$4,000.00<button value="road-bike">Add</button></p></li>';

    const dom = renderBike(hardTail);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a Cruiser', assert => {
    const cruiser = {
        code: 'cruiser',
        name: 'Cruiser',
        image: '../assets/cruiser.jpeg',
        description: 'laid back yellow cruiser, this babys got one speed... slow and easy',
        category: 'road',
        price: 400.00,
        cost: 200.00
    };

    const expected = '<li class="road" title="laid back yellow cruiser, this babys got one speed... slow and easy"><h3>Cruiser</h3><img src="../assets/cruiser.jpeg" alt="Cruiser image"><p class="price">$400.00<button value="cruiser">Add</button></p></li>';

    const dom = renderBike(cruiser);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a E Bike', assert => {
    const eBike = {
        code: 'e-bike',
        name: 'E-Bike',
        image: '../assets/ebike.jpeg',
        description: 'green, hipster, battery assisted e-bike',
        category: 'road',
        price: 5000.00,
        cost: 2500.00
    };

    const expected = '<li class="road" title="green, hipster, battery assisted e-bike"><h3>E-Bike</h3><img src="../assets/ebike.jpeg" alt="E-Bike image"><p class="price">$5,000.00<button value="e-bike">Add</button></p></li>';

    const dom = renderBike(eBike);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Renders a Hard Frame Bike', assert => {
    const hardFrame = {
        code: 'hard-frame',
        name: 'Hard Frame',
        image: '../assets/hardframe.jpeg',
        description: 'green, hard frame off road mt bike',
        category: 'off-road',
        price: 2000.00,
        cost: 1000.00
    };
    
    const expected = '<li class="off-road" title="green, hard frame off road mt bike"><h3>Hard Frame</h3><img src="../assets/hardframe.jpeg" alt="Hard Frame image"><p class="price">$2,000.00<button value="hard-frame">Add</button></p></li>';

    const dom = renderBike(hardFrame);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});