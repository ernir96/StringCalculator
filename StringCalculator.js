//StringCalculator.js

var StringCalculator = {
 	Add : function(numbers) {
		if (numbers == "") {
	    return 0;
	  }
    else {
      var arrNumber = numbers.split(/,|\n/g);
      var sum = 0;
      for(i = 0; i < arrNumber.length; i++) {
        sum += parseInt(arrNumber[i]);
      }
      return sum;
    }
	}
};

module.exports = StringCalculator;
