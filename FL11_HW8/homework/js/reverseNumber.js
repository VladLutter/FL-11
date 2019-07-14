function reverseNumber(a) {
	let b, negative = -0, symb = (Math.sign(a));

	if (symb===-1 || symb===negative) {
		b=Math.abs(a);
	} else if (symb===1 || symb===0) {
		b=a;
	}

	let res = 0;
	while (b > 0) {
		res = res*10 + b%10;
		b = ~~(b / 10);
	}

	if (symb<0) {
		res = -res;
	}

	console.log(res);
	return;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);