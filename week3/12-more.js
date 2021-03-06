'use strict';

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;
console.log('o1', o1, 'o2', o2, 'o3', o3);
o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);
o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);
console.log('Making a change to o1 does not affect o3 because they are independent variables.');
console.log('Making a changes o2 does affect o3 because the value of o2 is assigned to o3.');
