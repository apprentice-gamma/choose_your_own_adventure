function mTable(row, col) {
	var string = "";
	for (var x = 1; x <= row; x++) {
		for(var y = 1; y <= col; y++) {
			string = string + (x*y) + " ";
		}
		console.log(string);
		string = "";
	}
}

mTable(9, 9);