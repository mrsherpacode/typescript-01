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
const greet = (name) => `Hello, ${name}`;
console.log(greet("Sherpa"));
export {};
//# sourceMappingURL=index.js.map