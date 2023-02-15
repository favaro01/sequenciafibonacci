$(document).ready(function() {
	$("form").submit(function(event) {
	  event.preventDefault();
  
	  var number = parseInt($("#number").val());
	  var result = "";
  
	  var prev = 0, current = 1, next = 1;
	  while (current <= number) {
		if (current === number) {
		  result = number + " pertence à sequência de Fibonacci.";
		  break;
		}
		next = prev + current;
		prev = current;
		current = next;
	  }
  
	  if (result === "") {
		result = number + " não pertence à sequência de Fibonacci.";
	  }
  
	  $("#result").text(result);
	});
  });
  