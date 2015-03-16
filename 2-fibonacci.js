function fibonacci(n, display)
{
	var last = 0;
	var result = 1;
	var temp;

	var evenSums = 0;

	for (var iteration = 1; iteration < n; iteration++){
		if (display) { console.log("iteration: " + iteration + " - " + result); }
		if (result % 2 === 0) { evenSums += result; }

		temp = result
		result += last;
		last = temp;
		if (result > 4000000) {
			break;
		}
	}

	return evenSums;
}

console.log("Standard fibonacci sequence: ");
fibonacci(50, true);

console.log("Sum of even results: ", fibonacci(50, false));