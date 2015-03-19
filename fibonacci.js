/*
Each new number in the Fibonacci sequence is calculated by adding the previous two numbers. By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, write a program to find the sum of the even-valued terms.*/


var fib = []; 
var fibEvenArray = [];

fib[0] = 0;
fib[1] = 1;

for(var i=2; i<=4000000; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
    	if(fib[i]%2===0){
    	fibEvenArray.push(fib[i]);
		}
}
console.log((eval(fibEvenArray.join('+'))));