let str1 = "Hello";
console.log(str1.length); // 5

let str2 = "Hello";
console.log(str2.charAt(1)); // "e"

let str3 = "A";
console.log(str3.charCodeAt(0)); // 65

let str4 = "😊";
console.log(str4.codePointAt(0)); // 128522

let str5a = "Hello";
let str5b = "World";
console.log(str5a.concat(" ", str5b)); // "Hello World"

let str6 = "Hello";
console.log(str6.at(-1)); // "o" // at() supports negative indexes (from the end).

let str7 = "Hello";
console.log(str7[0]); // "H"

let str8 = "JavaScript";
console.log(str8.slice(0, 4));   // "Java"
console.log(str8.slice(-6));    // "Script"

let str9 = "JavaScript";
console.log(str9.substring(0, 4));  // "Java"

let str10 = "JavaScript";
console.log(str10.substr(4, 6)); // "Script" //depreacted

let str11 = "hello";
console.log(str11.toUpperCase()); // "HELLO"

let str12 = "HELLO";
console.log(str12.toLowerCase()); // "hello"

let str13 = "😊";
console.log(str13.isWellFormed()); // true // Checks if the string is a valid UTF-16 sequence.

let str14 = "abc\uD800"; // broken surrogate // Returns a well-formed version of the string (fixes invalid UTF-16).
console.log(str14.toWellFormed()); // "abc�"

let str15 = "   Hello   ";
console.log(str15.trim()); // "Hello"

let str16 = "   Hello";
console.log(str16.trimStart()); // "Hello"

let str17 = "Hello   ";
console.log(str17.trimEnd()); // "Hello"

let str18 = "5";
console.log(str18.padStart(3, "0")); // "005"

let str19 = "5";
console.log(str19.padEnd(3, "0")); // "500"

let str20 = "Hi ";
console.log(str20.repeat(3)); // "Hi Hi Hi "

let str21 = "I like cats. Cats are cute.";
console.log(str21.replace("cat", "dog"));
// "I like dogs. Cats are cute."

let str22 = "I like cats. Cats are cute.";
console.log(str22.replaceAll("cat", "dog"));
// "I like dogs. Dogs are cute."

let str23 = "a,b,c,d";
console.log(str23.split(","));  // ["a","b","c","d"]
