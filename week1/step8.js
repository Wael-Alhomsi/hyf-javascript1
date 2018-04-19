// A program that checks the types of two variables and prints out the result.
'use strict';
const x = 'Rock around the clock';
const y = 666;
const musicGenres = ['Rock', 'Jazz', 'Country'];
const z = 'The Spanish train';
console.log('The value of my variable x is: ' + x);
console.log('The value of my variable y is: ' + y);
console.log('The value of my variable z is: ' + z);
console.log('The value of my variable musicGenres is: ' + musicGenres);
console.log('I think that variable type for x is a string, variable type for y is a number,variable type for z is a string, variable type for musicGenres is an object.');
console.log('Variable type of  x is: ' + typeof x,'Variable type of  y is: ' +  typeof y,'Variable type of  z is: ' +  typeof z,'Variable type of  musicGenres is: ' +  typeof musicGenres);
//According to the example:
if (typeof x === typeof y) {console.log('SAME TYPE');
} else {
    console.log('NOT SAME TYPE');
}
//Method 2:
const compare1 = typeof x === typeof y ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables x and y: ' + compare1);
const compare2 = typeof x === typeof z ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables x and z: ' + compare2);
const compare3 = typeof x === typeof musicGenres ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables x and musicGeneres: ' + compare3);
const compare4 = typeof z === typeof y ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables z and y: ' + compare4);
const compare5 = typeof musicGenres === typeof y ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables musicGenres and y: ' + compare5);
const compare6 = typeof z === typeof musicGenres ? 'SAME TYPE' : 'NOT SAME TYPE';
console.log('Type of variables z and musicGenres: ' + compare6);