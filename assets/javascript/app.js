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
			timer: 30,

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
		
		var gameTimer;
		$(this).hide();
		console.log("Start click works");  
		selectQuestion();
		
		function selectQuestion(){
			var question = "question" + Math.ceil(Math.random() * 5);
			if (question == "question1"){
				console.log(question1);
				trivia.question1();
			}
			else if (question == "question2"){
				console.log("question2");
				trivia.question2();
			}
			else if (question == "question3"){
				console.log("question3");
				trivia.question3();
			}
			else if (question == "question4"){
				console.log("question4");
				trivia.question4();
			}
			else if (question == "question5"){
				console.log("question5");
				trivia.question5();
			}
			else{
				console.log("Error: Question was not selected");
			}
		};

		function runGame(goodAnswer, badAnswer1, badAnswer2, badAnswer3){
			var gameTimer = setInterval(function(){timerCountdown(goodAnswer)}, 1000);

			$(goodAnswer).click(function(){
				$("#result").html("Correct!")
				clearInterval(gameTimer);
			});
			
			$(badAnswer1).click(function(){
				badResult();
				clearInterval(gameTimer);
			});

			$(badAnswer2).click(function(){
				badResult();
				clearInterval(gameTimer);
			});

			$(badAnswer3).click(function(){
				badResult();
				clearInterval(gameTimer);
			});	
		};

		function badResult(){
			$("#result").html("Incorrect!");
		};

		function timerCountdown(goodAnswer){
			if (trivia.timer > 0){
				trivia.timer--
				$(".time").html(trivia.timer);
				console.log(trivia.timer);
				clearInterval(gameTimer);
			}
			else{
				clearInterval(gameTimer);
				console.log("Time is up! Correct answer is...");
				$("#result").html("<p>Time is up! The correct answer is " + goodAnswer + "</p>")
			}
		}; 
		
		




		





	});

});