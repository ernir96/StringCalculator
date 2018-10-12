//StringCalculator.js

var StringCalculator = {
 	Add : function(numbers) {
		if (numbers == "") {
	    return 0;
	  }
    else {
      return parseInt(numbers);
    }
	}
};

module.exports = StringCalculator;
