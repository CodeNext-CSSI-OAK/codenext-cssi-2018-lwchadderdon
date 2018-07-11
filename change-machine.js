// Author: Logan Chadderdon

let readline = require('readline-sync');

let cents = Number(readline.question('How many cents? '));

let quarters = Math.floor(cents / 25);
console.log(quarters + ' quarters');
cents = cents - quarters * 25;

let dimes = Math.floor(cents / 10);
console.log(dimes + ' dimes');
cents = cents % 10;