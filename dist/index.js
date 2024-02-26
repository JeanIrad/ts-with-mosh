"use strict";
function render(document) {
    console.log(document);
}
const user = [21, "jean", new Date("02-21-2012")];
function calculateTax(income) {
    const val = income > 200 ? income * 0.3 : income * 0.2;
    return val;
}
function greet(name = "Jean", lastName) {
    return `hello dear ${name} ${lastName || ""}`;
}
console.log(greet("Paul"));
//# sourceMappingURL=index.js.map