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
//# sourceMappingURL=index.js.map