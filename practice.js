console.log("hi");

const obj = {};

const names = ["joel", "nada", "joel", "billy", "herald"];
names.forEach((name) => (obj[name] = (obj[name] || 0) + 1));
console.log(obj);

console.error("obj");
console.table(obj);

console.log(Array.isArray(names));

const obj2 = {};

names.forEach((name) =>
  name.startsWith("j") ? (obj2[name] = (obj2[name] || 0) + 1) : ""
);

let sentence = "My name is joel";

console.log(
  sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
);

console.log(obj2);
