console.log("hi");

const obj = {};

const names = ["joel", "nada", "joel", "billy", "herald"];
names.forEach((name) => (obj[name] = (obj[name] || 0) + 1));
console.log(obj);

console.error("obj");
console.table(obj);

console.log(Array.isArray(names));
