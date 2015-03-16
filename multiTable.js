function multiTable(number) {
	var multiple = 1;
	while (multiple <= number) {
		var currentRow = [];
		for (var multiplyer = 1; multiplyer <= number; multiplyer++) {
			currentRow.push(multiple * multiplyer);
		}
		console.log(currentRow);
		multiple++;
	}
}

multiTable(9);


