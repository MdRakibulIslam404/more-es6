// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log("myObject.p", myObject?.p?.q);

// destructuring array
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = ["momotaj", "porshi"];
// console.log(best, faltu);
const { sky, color, money } = { sky: "blue", soil: "mati", color: "red", money: 500 };

// chaining
const company = {
    name: "gp",
    ceo: {
        id: 1,
        name: "azmol",
        food: "fuchka",
    },
    web: {
        work: "website development",
        employee: 22,
        framework: "react",
        tech: {
            first: "html",
            sec: "css",
            third: "js",
        },
    },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);