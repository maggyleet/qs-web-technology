// Import default + named exports together
import multiply, { add, subtract } from './mathUtils.js';

console.log(add(2, 3));       // 5
console.log(subtract(5, 2));  // 3
console.log(multiply(4, 6));  // 24
