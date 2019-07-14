function getMin () {
	let min=0, i=0, arr=[];
	while (i < arguments.length) {
		arr[i] = arguments[i];
		i++;
	}
	min = Math.min.apply(null, arr);
	console.log(min);
	return
}

	
getMin(3, 0, -3);