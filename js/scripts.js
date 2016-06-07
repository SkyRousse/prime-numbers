//backend logic
var array = [];
var newArray = [];
var primeFunction = function(userInput) {
	//create list 2 through userInput
	for (var i = 2; i <= userInput; i++) {
		array.push(i);
	};
		//loop through the list
	array.forEach(function(element){
		array.splice(element, 1);
	});
};

// user interface logic
$(function() {
	$("form#calc").submit(function(event) {
    event.preventDefault();
    var number = Math.abs(parseInt($("input#factorialInput").val()));
		var output = primeFunction(number);
		$("#output").text(output);
  });
});
