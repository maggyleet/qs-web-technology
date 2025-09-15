//1 . Arithmetic operator
let a = 30;
let b = 20;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//2 . reltional/comparision operator
let c = 40;
let d = 20;
console.log(c > d)
console.log(c < d)
console.log(c >= d)
console.log(c <= d)
console.log(c == d)
console.log(c != d)

//3 . logical operator
// AND
let p = 50;
let q = 30;
let r = p > p
let s = q < p
console.log(p > q && q < p)
console.log(r && s)

//OR
let p1 = 50;
let q1 = 30;
let r1 = p1 > p1
let s1 = q1 < p1
console.log(p1 > q1 || q1 < p1)
console.log(r1 || s1)

//NOT
p = 50;
q = 30;
console.log(p > q && q < p)
console.log(p > q && !(q < p))
console.log((!p > q) && q < p)


//4 . Assingment operators

let m = 60;
let n = 40;
console.log(m = m + n) //the exp is evaluated and the value is assigned to the variable
console.log(m += n)
console.log(m = m - n)
console.log(m -= n)
console.log(m = m * n)
console.log(m *= n)
console.log(m = m / n)
console.log(m /= n)

//5 . Ternary operator
let x = 60;
let y = 30;
let big = x > y ? x : y
console.log(big)

let small = x < y ? x : y
console.log(small)


