function mTable(row, col) {
	var string;
	for (var x = 1; x < row; x++) {
		for(var y = 1; y < col; y++) {
			console.log((x*y) + " ");
		}
	}
}

mTable(9, 9);