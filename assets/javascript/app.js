$(document).ready(function(){

	var $startButton = $('.button');
	var $question = $('#question');
	var $answer1 = $('#answer1');
	var $answer2 = $('#answer2');
	var $answer3 = $('#answer3');
	var $answer4 = $('#answer4');
	var correctCount = 0;
	var incorrectCount = 0;

	$($startButton).hover(function(){
		$($startButton).toggleClass("button-hover");
	});

	//This function starts the game
	$($startButton).click(function(){

		//This objects holds all questions, answers, timer variable and calls runGame
		var trivia = {
			currentQuestionCounter: 1,
			timer: 30,

			question1: function(){
				console.log("Trivia object works");
				$($question).html("What rock and roll star was the insipiration for Jack Sparrow?");
				$($answer1).html("Keith Richards");
				$($answer2).html("Mick Jagger");
				$($answer3).html("Steven Tyler");
				$($answer4).html("Meatloaf");
				runGame($answer1, $answer2, $answer3, $answer4);
			},

			question2: function(){
				console.log("Trivia object works");
				$($question).html("What was the name of the volleyball in Castaway?");
				$($answer1).html("Charlie");
				$($answer2).html("Wilson");
				$($answer3).html("Spalding");
				$($answer4).html("Jimmy");
				runGame($answer2, $answer1, $answer3, $answer4);
			},

			question3: function(){
				console.log("Trivia object works");
				$($question).html("What actor took over the role of Jason Bourne from Matt Damon?");
				$($answer1).html("Ben Affleck");
				$($answer2).html("Channing Tatum");
				$($answer3).html("Jeremy Renner");
				$($answer4).html("John Ham");
				runGame($answer3, $answer1, $answer2, $answer4);
			},

			question4: function(){
				console.log("Trivia object works");
				$($question).html("How many films are in the Harry Potter franchise?");
				$($answer1).html("5");
				$($answer2).html("7");
				$($answer3).html("6");
				$($answer4).html("8");
				runGame($answer4, $answer1, $answer2, $answer3);
			},

			question5: function(){
				console.log("Trivia object works");
				$($question).html("Which two actors have won oscars for playing the same character?");
				$($answer1).html("Marlon Brando and Robert Di Niro as Vito Corleone");
				$($answer2).html("John Wayne and Jeff Bridges as Rooster Cogburn");
				$($answer3).html("Ewan McGregor and Alec Guinness as Obi-Wan Kenobi");
				$($answer4).html("Martin Freeman and Ian Holm as Bilbo Baggins");
				runGame($answer1, $answer2, $answer3, $answer4);
			},
		};

		$(this).hide(); 
		selectQuestion();
		
		//Randomly selects questions and tracks them
		function selectQuestion(){
			if (trivia.curentQuestion !== "null"){
				
				// var question = "question" + Math.ceil(Math.random() * 5);
				// while (selectedQuestions.indexOf(question) !== -1){
				// 	question = "question" + Math.ceil(Math.random() * 5);
				// };
				
				
				if (trivia.currentQuestionCounter === 1){
					trivia.currentQuestionCounter++
					trivia.question1();
				}
				else if (trivia.currentQuestionCounter === 2){
					trivia.currentQuestionCounter++
					trivia.question2();
				}
				else if (trivia.currentQuestionCounter === 3){
					trivia.currentQuestionCounter++
					trivia.question3();
				}
				else if (trivia.currentQuestionCounter === 4){
					trivia.currentQuestionCounter++
					trivia.question4();
				}
				else if (trivia.currentQuestionCounter === 5){
					trivia.currentQuestionCounter++
					trivia.question5();
				}
				else{
					console.log("Error: Question was not selected");
				};
			}
			
			else{
				console.log("Game over");
				displayEndGame();

			};
			
		};

		//This function takes the user's selection and outputs the correct/incorrect message
		function runGame(goodAnswer, badAnswer1, badAnswer2, badAnswer3){
			var gameTimer = setInterval(function(){timerCountdown(goodAnswer)}, 1000);

			$(goodAnswer).click(function(){
				clearInterval(gameTimer);
				trivia.timer = 30;
				setTimeout(selectQuestion, 3000);
				$("#result").html("Correct!")
				correctCount++;
			});
			
			$(badAnswer1).click(function(){
				badResult();
				clearInterval(gameTimer);
				trivia.timer = 30;
				setTimeout(selectQuestion, 3000);
			});

			$(badAnswer2).click(function(){
				badResult();
				clearInterval(gameTimer);
				trivia.timer = 30;
				setTimeout(selectQuestion, 3000);
			});

			$(badAnswer3).click(function(){
				badResult();
				clearInterval(gameTimer);
				trivia.timer = 30;
				setTimeout(selectQuestion, 3000);
				
			});	
		};


		//This function is used in runGame to print a message if the incorrect answer is selected
		function badResult(){
			incorrectCount++;
			$("#result").html("Incorrect!");
		};

		//This function counts down the timer and displays messaging if the timer reaches 0
		function timerCountdown(goodAnswer){
			if (trivia.timer > 0){
				trivia.timer--
				$(".time").html(trivia.timer);
				console.log(trivia.timer);
			}
			else{
				clearInterval(gameTimer);
				setTimeout(selectQuestion, 3000);
				trivia.timer = 30;
				$("#result").html("<p>Time is up! The correct answer is " + goodAnswer + "</p>")
				
				
			};
		};


		//This function displays the number of correct and incorrect answers and the start button
		function displayEndGame(){
			$($answer1).html(correctCount);
			$($answer2).html(incorrectCount);
			$($startButton).show();
		};
	});
});