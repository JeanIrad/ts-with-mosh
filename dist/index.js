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
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => console.log("dragging"),
    resize: () => console.log("resizing"),
};
const quantity = 100;
function sayHi(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date("2003") };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log("some value");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
const phone = document.getElementById("phone");
const body = document.querySelector("body");
const div = document.querySelector("div");
body.style.background = "#e4a27a";
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const h2 = document.createElement("h2");
    e.preventDefault();
    h2.textContent = phone.value;
    phone.value = "";
    div.appendChild(h2);
});
console.log(new Date().toLocaleDateString());
const span = document.createElement("span");
phone.addEventListener("input", function () {
    span.textContent = this.value;
    this.insertAdjacentElement("beforebegin", span);
});
//# sourceMappingURL=index.js.map