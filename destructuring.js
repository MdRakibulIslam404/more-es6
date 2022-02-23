const fish = {
    id: 58,
    name: "king hilsa",
    price: 9000,
    phone: "019382933893828392",
    address: "chandpur",
    dress: "silver",
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone, price);

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

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { sec, third } = company.web.tech;
console.log(work, framework, food, sec, third);