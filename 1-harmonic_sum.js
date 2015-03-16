function harmonic(n) {
	var result = 1;
	for(var iteration = 1; iteration <= n; iteration++){
		result += (1/n);
	}
	return result;
}

function harmonicRev(n) {
	var result = 1;
	for (var iteration = n; iteration >= 1; iteration--) {
		result += (1/n);
	}
	return result;
}

console.log("Harmonic, Left to Right, n = 50000: ", harmonic(50000));
console.log("Harmonic, Right to Left, n = 50000: ", harmonicRev(50000));