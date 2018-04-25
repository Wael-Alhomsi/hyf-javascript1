'use strict';
let re = /,/gi;
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
console.log(myString.replace(re, ' '));
