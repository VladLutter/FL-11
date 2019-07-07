let a1 = +prompt('Insert value a1 point', '');
let a2 = +prompt('Insert value a2 point', '');
let b1 = +prompt('Insert value b1 point', '');
let b2 = +prompt('Insert value b2 point', '');
let c1 = +prompt('Insert value c1 point', '');
let c2 = +prompt('Insert value c2 point', '');
let divide = 2;
let x1 = (b1+a1)/divide;
let x2 = (b2+a2)/divide;

if (x1===c1 && x2===c2) {
	console.log(true)
} else {
	console.log(false)
}