const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: "Water bottle", price: 50, color: "yellow", },
    { name: "Mobile phone", price: 15000, color: "black", },
    { name: "Smart watch", price: 3000, color: "black", },
    { name: "Sticky note", price: 50, color: "pink", },
    { name: "Water glass", price: 3, color: "white", },
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == "blue");
// console.log(blacks);

const whiteItem = products.find(product => product.color == "black");
console.log(whiteItem);