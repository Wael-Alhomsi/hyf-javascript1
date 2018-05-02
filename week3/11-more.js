'use strict';
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y ? 'equal' : 'not equal');
console.log(x === y ? 'equal' : 'not equal');
console.log(z === y ? 'equal' : 'not equal');
console.log(z === x ? 'equal' : 'not equal');
