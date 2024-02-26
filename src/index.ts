// var age = 32;
// age = 50;
// if (age > 40) age += 10;
// console.log(age);

function render(document: any) {
  console.log(document);
}

// render("this is my document to render");
// tuples are arrays with fixed length values, better restrict it to two values

const person: [number, string, Date] = [21, "jean", new Date("02-21-2012")];
// console.log(user[1].includes("ean"));
// console.log(user[2].toLocaleDateString());
// enums

const enum Size {
  Small = 1,
  Medium,
  Large,
}
// console.log(Size.Small);
// functions

function calculateTax(income: number): number {
  const val = income > 200 ? income * 0.3 : income * 0.2;
  return val;
}
// console.log(calculateTax(200));
function greet(name = "Jean", lastName?: string): string {
  return `hello dear ${name} ${lastName || ""}`;
}
// console.log(greet("Paul"));
// objects

const users: {}[] = [];
const user: {
  name: string;
  readonly email: string;
  password: string;
} = { name: "", email: "", password: "" };
// (user.name = "Jean"), (user.email = "jado@gmail.com"), (user.password = "Pass");
users.push(user);
// console.log(users);

// type alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
// union types operator

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
// kgToLbs(20);
// console.log(kgToLbs("32kg"));
// intersection operator

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => console.log("dragging"),
  resize: () => console.log("resizing"),
};
