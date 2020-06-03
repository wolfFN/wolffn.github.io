---
title: 条件语句
---

# Better Conditionals

### Array.includes

```javascript
function test(fruit) {
    if (fruit == 'apple' || fruit == 'strawberry') {
        console.log('red');
    }
}

function test(fruit) {
    // extract conditions to array
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    if (redFruits.includes(fruit)) {
        console.log('red');
    }
}
```

### Return Early

```javascript
/_ return early when invalid conditions found _/;

function test(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early
    if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

    console.log('red');

    // condition 3: must be big quantity
    if (quantity > 10) {
        console.log('big quantity');
    }
}
```

### Use Default Function Parameters And Destructuring

### Favor Map/Object Literal than Switch Statement

```javascript
function test(color) {
    // use switch case to find fruits in color
    switch (color) {
        case 'red':
            return ['apple', 'strawberry'];
        case 'yellow':
            return ['banana', 'pineapple'];
        case 'purple':
            return ['grape', 'plum'];
        default:
            return [];
    }
}

// use object literal to find fruits in color
const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum'],
};

function test(color) {
    return fruitColor[color] || [];
}

// use Map to find fruits in color
const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
    return fruitColor.get(color) || [];
}
```

### Array.filter, Array.every, Array.any

```javascript
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' },
];

function test(color) {
    // use Array filter to find fruits in color
    return fruits.filter(f => f.color == color);
}

function test() {
    // condition: short way, all fruits must be red
    const isAllRed = fruits.every(f => f.color == 'red');
    console.log(isAllRed); // false
}

function test() {
    // condition: if any fruit is red
    const isAnyRed = fruits.some(f => f.color == 'red');
    console.log(isAnyRed); // true
}
```
