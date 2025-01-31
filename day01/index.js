const { addToCart, changeQty } = require("./cartModule");

console.log("welcome rushi");
array = [1, 2, 3, 4, 6];
array.forEach((element, index) => {
  console.log(element, index);
});

console.log(10 + 20);

//module
console.log(addToCart());

console.log(changeQty());
