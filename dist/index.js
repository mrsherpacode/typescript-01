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
const greet = (name) => `Hello, ${name}`;
console.log(greet("Sherpa"));
export {};
//# sourceMappingURL=index.js.map