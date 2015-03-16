function harmonicLeft(endNumber) {
	var sum = 1;
	for (var index = 2; index <= endNumber; index++) {
		sum += (1/index);
	}
	return sum;
}

function harmonicRight(input) {
	var sum = (1/input);
	for (var index = input-1; index > 0; index--){
		sum += (1/index);
	}
	return sum;
} 

console.log(harmonicLeft(50000));
console.log(harmonicRight(50000));
