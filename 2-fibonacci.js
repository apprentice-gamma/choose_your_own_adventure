function fibonacci(n, display)
{
	var last = 0;
	var result = 1;
	var temp;

	var evenSums = 0;

	if(n < 4000000) {
		for (var iteration = 1; iteration < n; iteration++){
			if (display) { console.log(result); }

			if (result % 2 === 0) { evenSums += result; }

			temp = result
			result += last;
			last = temp;
		}
	}
	return evenSums;
}

console.log("Standard fibonacci sequence: ");
fibonacci(20, true);

console.log("Sum of even results: ", fibonacci(20, false));