const calculator = () =>({
	add: (a,b) => a+b,
	sub: (a,b) => a-b,
	mul: (a,b) => a*b,
	div: (a,b) => (b === 0? "Error": a/b),
});

console.log(calculator().add(1,100));

