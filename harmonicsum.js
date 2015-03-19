/*Write a program to compute the sum of a harmonic series, as shown below, where n=50000. Calculate the sum from left-to-right, and then from right-to-left.

Harmonic(n) = 1 + 1/2 + 1/3 + 1/4 + .... + 1/n*/

var sget = require("sget");
var harmony = [];
var inputNum = sget("Please enter a number");

for(var i=1; i<inputNum; i++){
	harmony.push(1/i);
}
var leftToRight = eval(harmony.join('+'));
var rightToLeft = eval(harmony.reverse().join('+'));

console.log("Here is the harmonic sum of " + inputNum + " from left to right: " + leftToRight);
console.log("Here is the harmonic sum of " + inputNum + " from right to left: " + rightToLeft);
