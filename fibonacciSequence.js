/*Each new number in the Fibonacci sequence is calculated by adding the previous two numbers. 
By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, 
write a program to find the sum of the even-valued terms.*/

function createFibonacciEven(upperBound){
	var i, j, sum;
	j = 1;	sum = 0;

	for (i = 1 ; i <= upperBound; i+=j){
		if (i%2 === 0){
			sum += i;
		}
		j+=i;
		if (j%2 === 0){
			sum += j;
		}
	}
	console.log("The sum of all even numbers in the fibonacci sequence up to "+upperBound+" is "+sum+".");
}

createFibonacciEven(4000000);