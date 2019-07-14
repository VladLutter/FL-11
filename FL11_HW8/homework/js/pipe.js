function addOne(x) {
	return x + 1;
}

function pipe(numb,...args) {
	let i = 0;
	while (i < args.length) {
		numb = args[i](numb);
		i++;
	}	

	console.log(numb);
	return;
}

pipe(1, addOne);
pipe(1, addOne, addOne);



// function pipe(numb) {
// 	for (let i = 1; i < arguments.length; i++) {
// 		numb = arguments[i](numb);
// 	}
// 	return numb;
// }
// function addOne(x) {
// 	x++;
// 	console.log(x);
// 	return;
// }

// pipe(1, addOne);
// pipe(1, addOne, addOne);