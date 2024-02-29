"use strict";
function render(document) {
  console.log(document);
}
const person = [21, "jean", new Date("02-21-2012")];
function calculateTax(income) {
  const val = income > 200 ? income * 0.3 : income * 0.2;
  return val;
}
function greet(name = "Jean", lastName) {
  return `hello dear ${name} ${lastName || ""}`;
}
const users = [];
const user = { name: "", email: "", password: "" };
users.push(user);
let employee = {
  id: 1,
  name: "Mosh",
  retire: (date) => {
    console.log(date);
  },
};
function kgToLbs(weight) {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
let textBox = {
  drag: () => console.log("dragging"),
  resize: () => console.log("resizing"),
};
const quantity = 100;
function sayHi(name) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
function getCustomer(id) {
  return id === 0 ? null : { birthday: new Date("2003") };
}
let customer = getCustomer(1);
console.log(
  customer === null || customer === void 0 ? void 0 : customer.birthday
);
let log = null;
log === null || log === void 0 ? void 0 : log("some value");
let speed = null;
let ride = {
  speed: speed !== null && speed !== void 0 ? speed : 30,
};
function NeverType() {
  while (true) {}
}
class Account {
  constructor(id, owner, _balance) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  get balance() {
    return this._balance;
  }
}
let account = new Account(1, "Jean", 0);
account.deposit(100);
class SeatAssignment {}
let seats = new SeatAssignment();
seats.A1 = "John";
seats.A2 = "Peter";
seats.A3 = "Mosh";
seats["A4"] = "Jean";
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking...");
  }
}
class Student extends Person {
  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }
  takeTest() {
    console.log("Taking a test...");
  }
}
class Teacher extends Person {
  get fullName() {
    return "Professor " + super.fullName;
  }
}
let teacher = new Teacher("Jean", "Iradukunda");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map
