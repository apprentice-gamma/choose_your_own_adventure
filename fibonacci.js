//Each new number in the Fibonacci sequence is calculated by adding the previous two numbers. By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, write a program to find the sum of the even-valued terms.



function fibonacciSequenceSums(endNumber){
	
	var sumOfEvens = 0;
	var firstFibNum = 0;
	var secondFibNum = 1;

	while(firstFibNum < endNumber){
		if(firstFibNum % 2 === 0){
			sumOfEvens += firstFibNum;
		}
		var placeholder = secondFibNum;

		secondFibNum += firstFibNum;
		firstFibNum = placeholder;


	}

	return sumOfEvens;
}

var endNumber = 4000000;
var sumOfEvensSeq = fibonacciSequenceSums(endNumber);
console.log("The sum of the even fibonacci numbers up to " + endNumber + " is " + sumOfEvensSeq);


//two variables, one 
//  0 +1 = 1  1 + 1 = 2    + 1 = 3     + 2 = 5
//need a placeholder for reassigning value of first fib number















