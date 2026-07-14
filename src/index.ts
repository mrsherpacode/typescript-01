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

//  Types Aliases
type stringorNumber = string | number;
type stringorNumberorArray = string | number | string[];
type newObject = {
  name: string;
  status: stringorNumber;
  mileStone: stringorNumberorArray;
};

let ming: newObject = {
  name: "sherpa",
  status: 24,
  mileStone: ["achieved"],
};
// literals types helps to keep the  code dry
let myName: "david";
// myName = "son"; can not do this
let multipleNames: "devid" | "ming" | "sing";
multipleNames = "ming";
//  simple functions
let add = (a: number, b: number): number => {
  return a + b;
};
let anything = (message: any) => {
  console.log(message);
};
anything("hi");
anything(add(2, 3));
// optional parameters// must be last parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
};
// default parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

anything(addAll(2, 8, 2));
anything(sumAll(2, 22));
// Rest parameter // always at the end
const addRest = (a: number, ...nums: number[]) => {
  return a + nums.reduce((sum, num) => sum + num);
};
anything(addRest(1, 1, 1, 4)); // 7
// Classes
class Person {
  constructor(
    public readonly name: string,
    public age: number,
    private status: string,
    protected lang: string = "typescript",
  ) {}
  public getAge() {
    return `Hello ${this.name} you are ${this.age} years old.`;
  }
}
const sam = new Person("sam", 44, "sigle");
console.log(sam.getAge());
// console.log(sam.status) can not access here
// console.log(sam.lang)
class NewPeron extends Person {
  constructor(
    name: string,
    age: number,
    status: string,
    lang: string,
    public interest: string,
  ) {
    super(name, age, status, lang);
  }

  public myInterest() {
    return `i'm interested in ${this.interest}`;
  }
}
const me = new NewPeron("pemba", 25, "single", "english", "computer");
console.log(me.myInterest());
// getter and setter
class music {
  private genre: string[];
  constructor() {
    this.genre = [];
  }
  public get data(): string[] {
    return this.genre;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.genre = value;
      return;
    } else throw new Error("the provided data is not a string");
  }
}

const musicgenre = new music();
musicgenre.data = ["rnb", "pop"];
console.log(musicgenre.data);
const moregenres = [...musicgenre.data, "moregenres"];
console.log(moregenres);
// musicgenre.data = "jo"; the provided data is not a string,, this is error here

//Utility
//  partial
interface Assignment {
  studenId: number;
  title: string;
  grade: number;
  verified?: boolean;
}

const updatedAssignment = (
  assign: Assignment,
  propUpdated: Partial<Assignment>,
): Assignment => {
  return { ...assign, ...propUpdated };
};

const assign1: Assignment = {
  studenId: 1,
  title: "math",
  grade: 0,
};
console.log(updatedAssignment(assign1, { grade: 100 }));

// Required
const gradedAssignmet = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const finalAssignmnet: Readonly<Assignment> = {
  ...assign1,
  // verified: true,
};

console.log(gradedAssignmet({ ...assign1, verified: true }));
// finalAssignmnet.grade= 22 can not assign value cuz its readonly

// Record types
const hexColor: Record<string, string> = {
  red: "fff000",
  blue: "kkkk000",
  green: "jjjj000",
};

type students = "hari" | "sam";
type grades = "A" | "B" | "C";

const finalGrades: Record<students, grades> = {
  hari: "A",
  sam: "C",
};

interface styles {
  hipop: string;
  oldschool: string;
}
const trends: Record<students, styles> = {
  hari: { hipop: "highly trendy", oldschool: "classic" },
  sam: { hipop: "not cool", oldschool: "modern" },
};
//  pick
type pickAssignment = Pick<Assignment, "grade" | "title">;
const newAssignment: pickAssignment = {
  grade: 95,
  title: "ktm",
};
// omit
type omitAssignment = Omit<Assignment, "grade" | "verified">;
const omitted: omitAssignment = {
  studenId: 22,
  title: "good",
  // grade:99; ommitted
};
