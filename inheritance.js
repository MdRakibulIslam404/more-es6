class TeamMember {
    name;
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = "Support web dev";
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
};

class StudentCare extends TeamMember {
    designation = "Care web dev";
    buildARoutine(student) {
        console.log(this.name, "Build a routine for", student);
    }
};

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = "Neptune app dev";
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, "release app version", version);
    }
};

const amir = new Support("Amir khan", "BD", 11);
const salman = new Support("Solaiman khan", "Dubai", 4);
const sarukh = new Support("SRK khan", "Dubai", 9);
const akshay = new Support("Akshay kumar", "BD", 11);
// console.log(amir);

const alia = new StudentCare("Alia bhatt", "Mumbai");
// console.log(alia);
// alia.buildARoutine("Rokib");

const ash = new NeptuneDev("Ash", "Mumbai", "Android studio");
ash.releaseApp("1.4.5");
// console.log(ash.name);