//  basic types of data
let name = "sherpa";
name = "pasang";
let num = 22;
num = 33;
let right = true;
right = false;
// any types
let any = "canBeanything";
any = 22;
any = true;
any = "string";
// union types
let union;
((union = "ktm"), (union = 22), (union = false));
// function
let sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
// arrays
let string = ["hi", "hello", "yes"];
string = ["array"];
let mixed = ["sting", 33];
mixed.push("hi");
mixed.push(211);
let all = [];
(((all[0] = "anydata"), 22), true);
let strict = ["ktm", "po"];
strict[0];
//  in tuple  order and position matters
let myTouple = ["my", 22, true];
// here does not matter
let mixing = ["string", 33, true];
// these two are not same
// object
let myObject;
myObject: {
}
myObject: "string";
myObject: [];
let object;
let first = {
    name: "Devid",
    age: 24,
    status: [24, "single"],
};
let second = {
    name: "kevin",
    age: 33,
    status: ["married", 33],
};
first = second;
let ming = {
    name: "sherpa",
    status: 24,
    mileStone: ["achieved"],
};
// literals types helps to keep the  code dry
let myName;
// myName = "son"; can not do this
let multipleNames;
multipleNames = "ming";
//  simple functions
let add = (a, b) => {
    return a + b;
};
let anything = (message) => {
    console.log(message);
};
anything("hi");
anything(add(2, 3));
// optional parameters// must be last parameter
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
anything(addAll(2, 8, 2));
anything(sumAll(2, 22));
// Rest parameter // always at the end
const addRest = (a, ...nums) => {
    return a + nums.reduce((sum, num) => sum + num);
};
anything(addRest(1, 1, 1, 4)); // 7
// Classes
class Person {
    name;
    age;
    status;
    lang;
    constructor(name, age, status, lang = "typescript") {
        this.name = name;
        this.age = age;
        this.status = status;
        this.lang = lang;
    }
    getAge() {
        return `Hello ${this.name} you are ${this.age} years old.`;
    }
}
const sam = new Person("sam", 44, "sigle");
console.log(sam.getAge());
// console.log(sam.status) can not access here
// console.log(sam.lang)
class NewPeron extends Person {
    interest;
    constructor(name, age, status, lang, interest) {
        super(name, age, status, lang);
        this.interest = interest;
    }
    myInterest() {
        return `i'm interested in ${this.interest}`;
    }
}
const me = new NewPeron("pemba", 25, "single", "english", "computer");
console.log(me.myInterest());
// getter and setter
class music {
    genre;
    constructor() {
        this.genre = [];
    }
    get data() {
        return this.genre;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.genre = value;
            return;
        }
        else
            throw new Error("the provided data is not a string");
    }
}
const musicgenre = new music();
musicgenre.data = ["rnb", "pop"];
console.log(musicgenre.data);
const moregenres = [...musicgenre.data, "moregenres"];
console.log(moregenres);
const updatedAssignment = (assign, propUpdated) => {
    return { ...assign, ...propUpdated };
};
const assign1 = {
    studenId: 1,
    title: "math",
    grade: 0,
};
console.log(updatedAssignment(assign1, { grade: 100 }));
// Required
const gradedAssignmet = (assign) => {
    return assign;
};
const finalAssignmnet = {
    ...assign1,
    // verified: true,
};
console.log(gradedAssignmet({ ...assign1, verified: true }));
// finalAssignmnet.grade= 22 can not assign value cuz its readonly
// Record types
const hexColor = {
    red: "fff000",
    blue: "kkkk000",
    green: "jjjj000",
};
const finalGrades = {
    hari: "A",
    sam: "C",
};
const trends = {
    hari: { hipop: "highly trendy", oldschool: "classic" },
    sam: { hipop: "not cool", oldschool: "modern" },
};
const newAssignment = {
    grade: 95,
    title: "ktm",
};
const omitted = {
    studenId: 22,
    title: "good",
    // grade:99; ommitted
};
// Return types
const createAssign = (title, points) => {
    return { title, points };
};
const finalAssing = createAssign("homework", 100);
console.log(finalAssing);
const newParams = ["math", 100];
const finalParams = createAssign(...newParams);
console.log(finalParams);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then((users) => console.log(users));
export {};
//# sourceMappingURL=index.js.map