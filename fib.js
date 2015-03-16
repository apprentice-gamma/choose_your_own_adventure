function evenFib(endNum) {
	var evenSum = 0;
	var fibNum1 = 0;
	var fibNum2 = 1;
	while (fibNum2 < endNum) {
		if (fibNum2 % 2 === 0) {
			evenSum += fibNum2;
		}
		var temp = fibNum2;
		fibNum2 = fibNum1 + fibNum2;
		fibNum1 = temp;
	}
	return evenSum;
}

console.log(evenFib(4000000));
