var assert = require("assert");

describe('Fizzbuzz', function () {
	describe('#generate()', function () {
		it('should return number', function () {
			assert.equal("1", fizzbuzz(1));
		});

		it('should return fizz si es multiplo de 3 ', function () {
			assert.equal("Fizz", fizzbuzz(9));
			assert.equal("Fizz", fizzbuzz(21));
		});

		it('should return Buzz si es multiplo de 5 ', function () {
			assert.equal("Buzz", fizzbuzz(5));
		});

		it('should return Fizz Buzz si es multiplo de 3 y 5 ', function () {
			assert.equal("Fizz Buzz", fizzbuzz(15));
			assert.equal("Fizz Buzz", fizzbuzz(45));
		});
	});
});

var fizzBuzz1 = {
	esFizz : function esmultiplode3 () {
		if ((this.number % 3) === 0)
			return true;
		else
			return false;
	},
	esBuzz : function esmultiplode5 (){
		return ((this.number % 5) === 0)	
	},
	number: 0

	// mensaje: ""
	// esFizz: function esMultiploDe(number, multiple){
	// 			return if number%multiple===0 
	// 		}
				
};

// var esmultiplode3 = function (n) {
// 	return n % 3 === 0;
// };

var fizzbuzz = function (n) {
	fizzBuzz1.number = n;
	
	if (fizzBuzz1.esFizz() && fizzBuzz1.esBuzz()) {
		return "Fizz Buzz"
	}
	
	if (fizzBuzz1.esFizz()) {
		return "Fizz";
	}
	if (fizzBuzz1.esBuzz()) {
		return "Buzz";
	}

	return fizzBuzz1.number;
};