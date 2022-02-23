const friends = ["tom hanks", "Tom cruise", "Tom brady", "Tom solaiman"];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: "Water bottle", price: 50, color: "yellow", },
    { name: "Mobile phone", price: 15000, color: "black", },
    { name: "Smart watch", price: 3000, color: "black", },
    { name: "Sticky note", price: 50, color: "pink", },
    { name: "Water glass", price: 3, color: "white", },
];

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrice);