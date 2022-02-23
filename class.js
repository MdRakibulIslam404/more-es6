class Support {
    name;
    designation = "Support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
};


const amir = new Support("Amir khan", "BD");
const salman = new Support("Solaiman khan", "Dubai");
const sarukh = new Support("SRK khan", "Dubai");
const akshay = new Support("Akshay kumar", "BD");
amir.startSession();
salman.startSession();
console.log(amir, salman, sarukh, akshay);
// console.log(salman);