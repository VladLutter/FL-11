let a = +prompt('Insert value for side A length', '');
let b = +prompt('Insert value for side B length', '');
let c = +prompt('Insert value for side C length', '');

if (a+b>c && a+c>b && b+c>a) {
	if (a===b && a===c && b===c) {
		console.log('Equivalent triangle')
	} else if (a===b || a===c || b===c) {
		console.log('Isosceles triangle')			
	} else {
		console.log('Normal triangle')
	}
} else {
	console.log('Triangle doesn’t exist')
}