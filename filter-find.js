const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
//filter method using in condition
//find every element and compare
//filter give every element and if the element not in the object filter give an empty object
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);
const white = products.filter(product => product.color == 'white');

console.log(white);

//find give first element only
const pinkItem = products.find(product => product.color == 'pink');
console.log(pinkItem);
// console.log(whiteItem);