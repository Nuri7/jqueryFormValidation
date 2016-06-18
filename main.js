$(document).ready(function(){  //Code that executes when the document is ready   function(){     alert('The document is ready, sah!');   } );

    var correctInput = false;
	var dateField = $('#date');
	var nameField = $('#name');
	var passwordField = $('#password');
	var submitButton = $('#submit');

	$(submitButton).click(function() {
		//checks that the password is 12345678
		if(passwordField.val() ==  12345678){
			correctInput = true
		} else {
			correctInput = false;
		}


		var matches = nameField.val().match(/\d+/g);
		if( matches == null){
			alert("you need to use a number in the name")
		}

		if(correctInput == true){
			$('h1').text("hello");			
		}else{
			alert("you are an idiot")
		}
	});

})