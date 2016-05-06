function find_bigger(val1, val2) {
	if (val1 > val2) {
		console.log(val1 + " is greater than " + val2);
	}  else if (val1 === val2) {
		console.log(val1 + " and " + val2 + " are identical");
	} else if (val1 == val2) {
		console.log(val1 + " and " + val2 + " are equal but not identical");
	} else {
		console.log(val2 + " is greater than " + val1);
	}
}