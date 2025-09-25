// Creating arrays
let numbers = [10, 20, 30, 40, 50];   // array of numbers
let fruits = ["apple", "banana", "cherry"];  // array of strings
let mixed = [1, "hello", true, null];  // array with different types

// Accessing array elements
console.log(numbers[0]); // 10  -> first element
console.log(numbers[2]); // 30  -> third element
console.log(fruits[1]);  // banana
console.log(mixed[3]);   // null

// Changing values
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40, 50]

// Array length property
console.log(fruits.length); // 3

let numbers1 = [10, 20, 30];
numbers1[9] = 100;
console.log(numbers1); //[10, 20, 30, empty × 6, 100]
