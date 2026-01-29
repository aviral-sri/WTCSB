"use strict"

console.log("first");

var a = 10; //global
let b = 11; //local
var a = 12; //redeclaration is allowd in global only(only in var)
console.log(a);
console.log(b);
console.log(window);

function hello(){
if (true) {
  let x = 10; //declared inside loop
  console.log(x);
}
// console.log(x); //cannot be accessed here, same for const, but var is global
}
hello();
console.log(z); //even before initialization its value is undefined, no error
var z = 13;

console.log(y); // y not definede, error called hoisting
//let y = 14;

