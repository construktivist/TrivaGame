$(document).ready(function(){

	var $startButton = $('.button');
	var $question = $('#question');
	var $answer1 = $('#answer1');
	var $answer2 = $('#answer2');
	var $answer3 = $('#answer3');
	var $answer4 = $('#answer4');

	$($startButton).hover(function(){
		$($startButton).toggleClass("button-hover");
	});

	$($startButton).click(function(){

		var trivia = {
			question1: function(){
				console.log("Trivia object works");
				$($question).html("This is a sample for question1?");
				$($answer1).html("This is answer 1");
				$($answer2).html("This is answer 2");
				$($answer3).html("This is answer 3");
				$($answer4).html("This is answer 4");
				runGame($answer1, $answer2, $answer3, $answer4);
			},

			question2: function(){
				console.log("Trivia object works");
				$($question).html("This is a sample for question2?");
				$($answer1).html("This is answer 1");
				$($answer2).html("This is answer 2");
				$($answer3).html("This is answer 3");
				$($answer4).html("This is answer 4");
				runGame($answer2, $answer1, $answer3, $answer4);
			},

			question3: function(){
				console.log("Trivia object works");
				$($question).html("This is a sample for question3?");
				$($answer1).html("This is answer 1");
				$($answer2).html("This is answer 2");
				$($answer3).html("This is answer 3");
				$($answer4).html("This is answer 4");
				runGame($answer3, $answer1, $answer2, $answer4);
			},

			question4: function(){
				console.log("Trivia object works");
				$($question).html("This is a sample for question4?");
				$($answer1).html("This is answer 1");
				$($answer2).html("This is answer 2");
				$($answer3).html("This is answer 3");
				$($answer4).html("This is answer 4");
				runGame($answer4, $answer1, $answer2, $answer3);
			},

			question5: function(){
				console.log("Trivia object works");
				$($question).html("This is a sample for question5?");
				$($answer1).html("This is answer 1");
				$($answer2).html("This is answer 2");
				$($answer3).html("This is answer 3");
				$($answer4).html("This is answer 4");
				runGame($answer1, $answer2, $answer3, $answer4);
			},
		};
		
		$(this).hide();
		console.log("Start click works");
		trivia.question1();
		
		function runGame(goodAnswer, badAnswer1, badAnswer2, badAnswer3){
			$(goodAnswer).click(function(){
				$("#result").html("Correct!")
			});
			
			$(badAnswer1, badAnswer2, badAnswer3).click(function(){
				$("#result").html("Incorrect!")
			});
			
		};





		





	});

});