(function(){

	function mentalMultiply(num1, num2){

		if (num1 > 500 || num2 > 500){
			console.log('You might need a pen for this one. Write down anything don\'t want to remember.');
		}

		console.log('Let\'s multiply ' + num2 + ' by ' + num1 + '.');

		console.log('Rather than doing one complicated multiplcation problem, we\'re going to do lots of easy multiplication and addition. This is how mathematicians think.');

		console.log('First, decompose the numbers into simpler parts:');
		console.log('\t' + num2 + ' is ' +  decompose(num2).join(' + ') + '.');
		console.log('\t' + num1 + ' is ' +  decompose(num1).join(' + ') + '.');


		// decompose the two numbers into value arrays (this is how the numbers should be 'seen' by the mathematician)
		var num1 = decompose(num1);
		var num2 = decompose(num2);

		// we need two more arrays to store info in (this is the actual mental model, and what needs to be remembered)
		var sums = [], products;

		console.log('Now, we can multiply our bits together. Mathematicians know that the sum of the parts is equal to the whole. Multiplying parts together, then, is the same as multiplying wholes together - so long as we do it right.');

		for (var i = 0; i < num1.length; i++ ){

			// prepare products array
			products = [];

			for (var j = 0; j < num2.length; j++ ){

				console.log('\tMultiplying ' + num2[j] + ' * ' + num1[i] + ' gives ' + num2[j] * num1[i]);

				// multiply values together, remembering each product
				products.push(num1[i] * num2[j]);

			}

			var sum = sumOfArray(products);

			if (sum === 0) {

				console.log('Sum is zero, so we don\'t need to remember this. A smart mathematician might have foreseen this and skipped this entire step!');
			
			} else { 

				console.log('Adding together ' + products.join(' + ') + ' gives us ' + sum +'. Remember this number.'); 

				sums.push(sum);

			}

			// add all products together and remember the result

		}

		console.log('Remember those ' + sums.length + ' numbers? Adding together ' + sums.join(' + ') + ' gives us ' + sumOfArray(sums) + '. Congratulations, you\'ve just multiplied ' + sumOfArray(num1) + ' * ' + sumOfArray(num2) + '!');

		// 176 decomposes into [100, 70, 6]
		function decompose(num){
			// split the number into digits
			var result = num.toString().split('');

			// add zeroes to each digit to keep values intact
			result.forEach(function(el, i){

				for (var j = 0; j < result.length - 1 - i; j++){
					result[i] += '0';
				}

				return result[i] = parseInt(result[i]);
			});

			// return an array of values which sum to the original number
			return result;
		}

		function sumOfArray(arr){
			return arr.reduce(function(prev, curr){
				return prev + curr;
			});
		}
	}

	mentalMultiply(9300, 773);

}());
