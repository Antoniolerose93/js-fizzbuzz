console.log('ciclo for')


for (let i = 0; i < 100; i++) {
	const num = i + 1
	console.log(`i = ${i}, num = ${num}`)
	
	if (num % 5 == 0 && num % 3 == 0){
		console.log ("FizzBuzz");
	} else if (num % 5 == 0) {
		console.log("Fizz");
	} else if(num % 3 == 0) {
		console.log ("Buzz");	
	} else {
		console.log(num); 
	}
}	