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

var esmultiplode3 = function (n) {
	return n % 3 === 0;
};

var esmultiplode5 = function (n) {
	return n % 5 === 0;
};

var fizzbuzz = function (n) {
	if (esmultiplode3(n) && esmultiplode5(n)) {
		return "Fizz Buzz"
	}
	if (esmultiplode3(n)) {
		return "Fizz";
	}
	if (esmultiplode5(n)) {
		return "Buzz";
	}

	return n;
};