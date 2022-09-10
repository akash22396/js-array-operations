const { reduceArray } = require("./index");

// reduceArray(arrayData, operation = "sum", accum = 0,objectName);

const sum = reduceArray(
  [
    { product: "pen", price: 5 },
    { product: "pencil", price: 2 },
  ],
  "sum",
  0,
  "price"
);
// const sum = reduceArray([10, 20, 30], "sum", 0);
// const minus = reduceArray([10, 20, -30, -3], "minus", 0);
// const multiply = reduceArray([10, 20], "multiply", 1);
// console.log(sum, minus, multiply);
console.log(sum);
