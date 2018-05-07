'use strict';
const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
const re = /,/gi;
console.log(myString.replace(re, ' '));
