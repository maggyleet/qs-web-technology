//HOISTING

// Hoisting in JavaScript is a behavior where variable and function declarations are 
// conceptually moved to the top of their containing scope during the compilation phase, 
// before the code is executed. This means that you can use a variable or call a function 
// before it is formally declared in the code


// For var declarations, the variable is initialized with undefined when hoisted.

// For let and const declarations, they are also hoisted but not initialized, leading to a "Temporal Dead Zone"
//  (TDZ) where accessing them before their declaration results in a ReferenceError.

console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 20;
console.log(myLetVar); // Output: 20

// console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 30;
console.log(myConstVar); // Output: 30

