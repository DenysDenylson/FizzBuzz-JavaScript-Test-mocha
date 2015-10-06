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

var objectFizzBuzz = {
	number: 0,
	message: "",
	getMessage: function getMsj(){
		return this.message;
	},
	esFizz : function esmultiplode3 () {
		if (this.number%3 === 0){
			this.message = "Fizz";
		}
	},
	esBuzz : function esmultiplode5 (){
		if (this.number%5 === 0){
			this.message = "Buzz";
		}
	},
	esFizzBuzz: function esMultiploDe3Y5(){
		if ((this.number%3 ===0 )&&(this.number%5 === 0)){
			this.message = "Fizz Buzz"
		}
	},
	fizzBuzz: function fizzBuzzGenerate(){
		this.esFizz();
	    this.esBuzz();
	    this.esFizzBuzz();
		return this.getMessage();
	}
};

function prreba(){
	alert("prueba");
}

var fizzbuzz = function (n) {
	objectFizzBuzz.number=n;
	objectFizzBuzz.message=objectFizzBuzz.number.toString();
	return objectFizzBuzz.fizzBuzz();
};

var aquilesvaesa = function (){
	alert("Hola que tal");
}
