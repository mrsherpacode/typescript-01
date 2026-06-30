//  basic types of data
let name: string = "sherpa";
name = "pasang";
let num: number = 22;
num = 33;
let right: boolean = true;
right = false;
// any types
let any: any = "canBeanything";
any = 22;
any = true;
any = "string";
// union types
let union: string | number | boolean;
((union = "ktm"), (union = 22), (union = false));
// function
let sum = (a: number, b: number) => {
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
let strict: string[] = ["ktm", "po"];
strict[0];
//  in tuple  order and position matters
let myTouple: [string, number, boolean] = ["my", 22, true];
// here does not matter
let mixing = ["string", 33, true];
// these two are not same

// object
let myObject: object;
myObject: {
}
myObject: "string";
myObject: [];
let object: {
  name: string;
  age: number;
  status: number | string[];
};

let first: object = {
  name: "Devid",
  age: 24,
  status: [24, "single"],
};
let second: object = {
  name: "kevin",
  age: 33,
  status: ["married", 33],
};
first = second;

const greet = (name: string): string => `Hello, ${name}`;
console.log(greet("Sherpa"));
