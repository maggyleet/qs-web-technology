let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // [ 'apple', 'banana', 'cherry' ]

fruits.push("pineapple");
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'pineapple' ]

fruits.push("guava");
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'pineapple', 'guava' ]

fruits.push("lime");
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'pineapple', 'guava', 'lime' ]

fruits.pop();
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'pineapple', 'guava' ]

fruits.shift();
console.log(fruits); // [ 'banana', 'cherry', 'pineapple', 'guava' ]

fruits.unshift("blueberry");
console.log(fruits); // [ 'blueberry', 'banana', 'cherry', 'pineapple', 'guava' ]

//wont affect the original array
console.log(fruits.slice(1, 3)); // [ 'banana', 'cherry' ] //The element at endIndex is not included
console.log(fruits); // [ 'blueberry', 'banana', 'cherry', 'pineapple', 'guava' ]

//affect the original array
console.log(fruits.splice(1, 3)); // [ 'banana', 'cherry', 'pineapple' ]
console.log(fruits); // [ 'blueberry', 'guava' ]

fruits.push("banana");
fruits.push("pineapple");
fruits.push("apple", "lime");

//affects original array
console.log(fruits.reverse()); // [ 'lime', 'apple', 'pineapple', 'banana', 'guava', 'blueberry' ] 
console.log(fruits); // [ 'lime', 'apple', 'pineapple', 'banana', 'guava', 'blueberry' ]

console.log(fruits.indexOf("lime")); // 0
console.log(fruits.at(3)); // banana
console.log(fruits.includes("Lime")); // false
console.log(fruits.includes("lime")); // true

console.log(fruits.join("-The GOAT ")); // lime-The GOAT apple-The GOAT pineapple-The GOAT banana-The GOAT guava-The GOAT blueberry
console.log(fruits); // [ 'lime', 'apple', 'pineapple', 'banana', 'guava', 'blueberry' ]

