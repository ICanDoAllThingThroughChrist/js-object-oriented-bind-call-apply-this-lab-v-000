//Your code here
let age = 20;
let hairColor = 'black';
let fred;
let functionToBeCopied;

functionToBeCopied = function (){
  return this
}
fred = { name: 'fred'}


function justInvoke(fn) {
  debugger;
  return fn();
  console.log(fn())
  debugger;
}

function setThisWithCall(fn, thisValue, args) {
  debugger;
  return fn.call(thisValue, args);
  console.log(fn.call(thisValue, args));
  debugger;
}
function setThisWithApply(fn, thisValue, args) {
  debugger;
  return fn.apply(thisValue, args);
  debugger;
}

function returnNewFunctionOf(fn, object, argurments){
  const newFunction = function () {
    return this;
    debugger;
  }.bind(object);
  debugger;
  return newFunction;
  debugger;
}

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }
//
// console.log(new Food('cheese', 5).name);
