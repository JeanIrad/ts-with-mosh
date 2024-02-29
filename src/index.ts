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
// literal types
type Quantity = 50 | 100;

const quantity: Quantity = 100;
// nullable values
function sayHi(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
// optional Chaining

type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date("2003") };
}
let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday);
// optional element access operator
// customers?.[0]
// optional call
let log: any = null;
log?.("some value");

// nullish coaelescing

let speed: number | null = null;
let ride = {
  // Nullish coaelescing operator
  speed: speed ?? 30,
};
// type assertions

// const phone = document.getElementById("phone") as HTMLInputElement;
// const body = document.querySelector("body") as HTMLElement;
// // const div = document.querySelector("div") as HTMLDivElement;
// const div = <HTMLDivElement>document.querySelector("div");
// body.style.background = "#e4a27a";
// const form = document.querySelector("form") as HTMLFormElement;
// form.addEventListener("submit", (e: SubmitEvent) => {
//   const h2 = document.createElement("h2");
//   e.preventDefault();
//   h2.textContent = phone.value;
//   phone.value = "";
//   div.appendChild(h2);
// });
// console.log(new Date().toLocaleDateString());
// // let users: {}[] = JSON.parse(localStorage.getItem('users')) || []
// const span = document.createElement("span");
// phone.addEventListener("input", function () {
//   // console.log(this);
//   span.textContent = this.value;
//   this.insertAdjacentElement("beforebegin", span);
// });
// the unknown type

// function Render(document: unknown) {
//   typeof document === "string"
//     ? document.toUpperCase()
//     : typeof document === "number";
// document.move();
// document.stop();
// document.pause();
// }
// The Never type

function NeverType(): never {
  while (true) {}
}
// index signature
// let person1: { name: string; age: number } = { name: "", age: 0 };
// person1.name = "Jean";
// person1.age = 32;
// console.log(person1);
// classes

class Account {
  nickname?: string; // optional variables
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  // set balance(value: number){
  //   if (value < 0) throw new Error('Invalid Value');
  //   this._balance  = value

  // }
  // private calculateTax(): number {
  //   return this.id;
  // }
}
let account = new Account(1, "Jean", 0);

account.deposit(100);
// console.log(account.balance);
// console.log(account);

// index Signature

class SeatAssignment {
  // index signature property
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "John";
seats.A2 = "Peter";
seats.A3 = "Mosh";
seats["A4"] = "Jean";
// static properties

class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

// Ride.activeRides = 10
// inheritances
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + "  " + this.lastName;
  }
  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("Taking a test...");
  }
}
// let student =  new Student(1, 'Jean', 'Iradukunda')
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}
let teacher = new Teacher("Jean", "Iradukunda");
// console.log(teacher.fullName);

// interfaces

// abstract class Calendar{
//   constructor(public name: string){

//   }
//   abstract addEvent(): void
//   abstract removeEvent(): void
// }
interface Calendar{
  name: string
  addEvent(): void
  removeEvent(): void
}
interface CloudCalendar extends Calendar {
  sync(): void
}

{
  throw new Error('Method not implemented')
};
removeEvent(): void {
  throw new Error('Method Not implemented')
}
}