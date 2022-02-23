// 1, let and const
const hubby = "Omar sani";
let phone = "iPhone 15";
phone = "samsung rs100";

// 2, default parameter
// 5, spread or three dot (...)
function maxNumber(array = [34, 56, 21]) {
    const max = Math.max(...array);
    return max;
};
const biggest = maxNumber();
console.log(biggest);

// 3, template string
const myNotes = `i am mojnu of ${hubby}. i don't have a ${phone}`;
console.log(myNotes);

// 4, arrow function
// function square(x) {
//     return x * x;
// };
const square = x => x * x;
console.log((square(9)));