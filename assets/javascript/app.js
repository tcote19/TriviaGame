var scoreCountRight = 0;
var scoreCountWrong = 0;

var i = 1;

$("#submit-quiz").hide(); 

function countDown(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML =""+secs+"";
	if(secs < 1) {
		clearTimeout(timer);
		element.innerHTML = '<h3>Countdown Complete!</h3>';
		// Time's Up Function Placeholder...
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}
var myQuestions = [
	{	
		number: "Question" + " " + 1,
		question: "What is the cross between a tiger and a lion called?",
		answers: {
			a: 'Tiglion',
			b: 'Liger',
			c: 'Potiglionscious'
		},
		correctAnswer: 'b'
	},
	{
		number: "Question" + " " + 2,
		question: "What is the capital of Delaware?",
		answers: {
			a: 'Lansing',
			b: 'Stolzville',
			c: 'Dover'
		},
		correctAnswer: 'c'
	},
	{
		number: "Question" + " " + 3,
		question: "What family does the Wombat belong to?",
		answers: {
			a: 'Vombatus',
			b: 'Crilinus',
			c: 'Marsinch'
		},
		correctAnswer: 'a'
	},
	{
		number: "Question" + " " + 4,
		question: "If it is 3:30pm in London, what time is it in Sydney Australia?",
		answers: {
			a: '6:30am',
			b: '2:30am',
			c: '1:30pm'
		},
		correctAnswer: 'b'
	},
	{
		number: "Question" + " " + 5,
		question: "When did the 2nd World War end?",
		answers: {
			a: '1945',
			b: '1947',
			c: '1946'
		},
		correctAnswer: 'a'
	},
	{
		number: "Question" + " " + 6,
		question: "Which horoscope sign is a crab?",
		answers: {
			a: 'Leo',
			b: 'Cancer',
			c: 'Gemini'
		},
		correctAnswer: 'b'
	},
	{
		number: "Question" + " " + 7,
		question: "Which is the largest island in the Mediterranean Sea?",
		answers: {
			a: 'Malta',
			b: 'Sicily',
			c: 'Greece'
		},
		correctAnswer: 'b'
	},
	{
		number: "Question" + " " + 8,
		question: "Who was the first baseball player to have his number retired?",
		answers: {
			a: 'Babe Ruth',
			b: 'Joe Dimaggio',
			c: 'Lou Gehrig'
		},
		correctAnswer: 'c'
	},
	{
		number: "Question" + " " + 9,
		question: "After Mandarin, what are the three most widely spoken languages?",
		answers: {
			a: 'Spanish, Arabic, English',
			b: 'Arabic, English, Hindi',
			c: 'English, Hindi, Spanish'
		},
		correctAnswer: 'c'
	},
	{
		number: "Question" + " " + 10,
		question: "What is a female Swan called?",
		answers: {
			a: 'Pen',
			b: 'Gersh',
			c: 'Avlin'
		},
		correctAnswer: 'a'
	}
];
$(document).ready(function() {
	// Question 1
	$("#question-number").append(myQuestions[0].number);
	$("#question-text").append(myQuestions[0].question);
	$("#answer-choice-a").append(myQuestions[0].answers.a);
	$("#answer-choice-b").append(myQuestions[0].answers.b);
	$("#answer-choice-c").append(myQuestions[0].answers.c);

	$("#answer-choice-b").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	countDown(210, "timer");
});

$("#next-question").on("click", function(){
	gameQuestions();
	$("#question-number").html(myQuestions[i].number);
	$("#question-text").html(myQuestions[i].question);
	$("#answer-choice-a").html(myQuestions[i].answers.a);
	$("#answer-choice-b").html(myQuestions[i].answers.b);
	$("#answer-choice-c").html(myQuestions[i].answers.c);
	if (i < myQuestions.length - 1) {
		i++;
	} else {
		$("#next-question").html("#submit-quiz");
		$("#next-question").hide();
		$("#submit-quiz").show();
		$("#submit-quiz").on("click", function(){
			console.log(scoreCountRight); console.log(scoreCountWrong);
		});

	};
});


// Instead of including repeated scoring functions for each question below, it
// would've been ideal to include a method for referencing the answer selected and
// storing each answer in an array. Then at the end of the round create a loop that
// will check the array against the 'correctAnswer' property of the myQuestions object.
// Then I could present the final score of right answers and wrong answers at the end of the quiz.
// Dry coding failure.


function gameQuestions(){
	// Question 2
	$("#question-number").append(myQuestions[1].number);
	$("#question-text").append(myQuestions[1].question);
	$("#answer-choice-a").append(myQuestions[1].answers.a);
	$("#answer-choice-b").append(myQuestions[1].answers.b);
	$("#answer-choice-c").append(myQuestions[1].answers.c);

	$("#answer-choice-c").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 3
	$("#question-number").append(myQuestions[2].number);
	$("#question-text").append(myQuestions[2].question);
	$("#answer-choice-a").append(myQuestions[2].answers.a);
	$("#answer-choice-b").append(myQuestions[2].answers.b);
	$("#answer-choice-c").append(myQuestions[2].answers.c);

	$("#answer-choice-a").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 4
	$("#question-number").append(myQuestions[3].number);
	$("#question-text").append(myQuestions[3].question);
	$("#answer-choice-a").append(myQuestions[3].answers.a);
	$("#answer-choice-b").append(myQuestions[3].answers.b);
	$("#answer-choice-c").append(myQuestions[3].answers.c);

	$("#answer-choice-b").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 5
	$("#question-number").append(myQuestions[4].number);
	$("#question-text").append(myQuestions[4].question);
	$("#answer-choice-a").append(myQuestions[4].answers.a);
	$("#answer-choice-b").append(myQuestions[4].answers.b);
	$("#answer-choice-c").append(myQuestions[4].answers.c);

	$("#answer-choice-a").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 6
	$("#question-number").append(myQuestions[5].number);
	$("#question-text").append(myQuestions[5].question);
	$("#answer-choice-a").append(myQuestions[5].answers.a);
	$("#answer-choice-b").append(myQuestions[5].answers.b);
	$("#answer-choice-c").append(myQuestions[5].answers.c);

	$("#answer-choice-b").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 7
	$("#question-number").append(myQuestions[6].number);
	$("#question-text").append(myQuestions[6].question);
	$("#answer-choice-a").append(myQuestions[6].answers.a);
	$("#answer-choice-b").append(myQuestions[6].answers.b);
	$("#answer-choice-c").append(myQuestions[6].answers.c);

	$("#answer-choice-b").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 8
	$("#question-number").append(myQuestions[7].number);
	$("#question-text").append(myQuestions[7].question);
	$("#answer-choice-a").append(myQuestions[7].answers.a);
	$("#answer-choice-b").append(myQuestions[7].answers.b);
	$("#answer-choice-c").append(myQuestions[7].answers.c);

	$("#answer-choice-c").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 9
	$("#question-number").append(myQuestions[8].number);
	$("#question-text").append(myQuestions[8].question);
	$("#answer-choice-a").append(myQuestions[8].answers.a);
	$("#answer-choice-b").append(myQuestions[8].answers.b);
	$("#answer-choice-c").append(myQuestions[8].answers.c);

	$("#answer-choice-c").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-a").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	// Question 10
	$("#question-number").append(myQuestions[9].number);
	$("#question-text").append(myQuestions[9].question);
	$("#answer-choice-a").append(myQuestions[9].answers.a);
	$("#answer-choice-b").append(myQuestions[9].answers.b);
	$("#answer-choice-c").append(myQuestions[9].answers.c);

	$("#answer-choice-a").on("click", function(){
		scoreCountRight += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-b").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});
	$("#answer-choice-c").on("click", function(){
		scoreCountWrong += 1;
		console.log(scoreCountRight);
		console.log(scoreCountWrong);
	});	
}





