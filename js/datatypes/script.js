//PRIMITIVE DATA TYPE

//STRING
let a = "Raul";
console.log(a);
console.log(typeof a); //string

let b = 10;
console.log(b);
console.log(typeof b); //bumber

// BOOLEAN
let c = true;
console.log(c);
console.log(typeof c); //boolean

// BIGINT
let d = 6n;
console.log(d);
console.log(typeof d); //bigint 

// UNDEFINED
let e = undefined;
console.log(e);
console.log(typeof e); //undefined

// NULL
let f = null;
console.log(f);
console.log(typeof f); //object

// SYMBOL
let g = Symbol();
console.log(g);
console.log(typeof g);


//NON PRIMITIVE DATATYPE

//ARRAY
let arr = [12, 'a', 3.54, true];
console.log(arr);
console.log(typeof arr); //object

//OBJECT
let student = {
    name: "Arun",
    age: 21,
    education: "BE",
    Zero: 12
};
console.log(student); //prints in alphabetical order based on ASCII value of the key
console.log(typeof student); //object