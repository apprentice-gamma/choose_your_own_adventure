function fibonacci(n)
{
	var last = 0;
	var result = 1;
	var temp;

	for (var iteration = 1; iteration < n; iteration++){
		console.log(result);
		temp = result
		result += last;
		last = temp;
	}
}

console.log("Standard fibonacci sequence: ");
fibonacci(100);