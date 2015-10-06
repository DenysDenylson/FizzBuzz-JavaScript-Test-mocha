var assert = require("assert");

describe('Fizzbuzz', function () {
	describe('#generate()', function () {
		it('should return number', function () {
			assert.equal("1", fizzbuzz(1));
		});

		// it('should return fizz si es multiplo de 3 ', function () {
		// 	assert.equal("Fizz", fizzbuzz(9));
		// 	assert.equal("Fizz", fizzbuzz(21));
		// });

		// it('should return Buzz si es multiplo de 5 ', function () {
		// 	assert.equal("Buzz", fizzbuzz(5));

		// });

		// it('should return Fizz Buzz si es multiplo de 3 y 5 ', function () {
		// 	assert.equal("Fizz Buzz", fizzbuzz(15));
		// 	assert.equal("Fizz Buzz", fizzbuzz(45));
		// });
	});
});

var fizzBuzz1 = {

	// esFizz : function esmultiplode3 () {
	// 	return (this.number % 3) === 0;
	// },
	number: 0

	// mensaje: ""
	// esFizz: function esMultiploDe(number, multiple){
	// 			return if number%multiple===0 
	// 		}
				
};

// var esmultiplode3 = function (n) {
// 	return n % 3 === 0;
// };

// var esmultiplode5 = function (n) {
// 	return n % 5 === 0;
// };

var fizzbuzz = function (n) {
	fizzBuzz1.number = n;
	// if (fizzBuzz1.esFizz && esmultiplode5(n)) {
	// 	return "Fizz Buzz"
	// }
	if (fizzBuzz1.esFizz) {
		return "Fizz";
	}
	// if (esmultiplode5(n)) {
	// 	return "Buzz";
	// }

	return fizzBuzz1.number;
};