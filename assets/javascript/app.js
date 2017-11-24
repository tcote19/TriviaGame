var scoreCountRight = 0;
var scoreCountWrong = 0;

var i = 1;

var endTime = Date();

$("#submit-quiz").hide(); 

var myQuestions = [
	{	
		number: 1,
		question: "What is the cross between a tiger and a lion called?",
		answers: {
			a: 'Tiglion',
			b: 'Liger',
			c: 'Potiglionscious'
		},
		correctAnswer: 'b'
	},
	{
		number: 2,
		question: "What is the capital of Delaware?",
		answers: {
			a: 'Lansing',
			b: 'Stolzville',
			c: 'Dover'
		},
		correctAnswer: 'c'
	},
	{
		number: 3,
		question: "What family does the Wombat belong to?",
		answers: {
			a: 'Vombatus',
			b: 'Crilinus',
			c: 'Marsinch'
		},
		correctAnswer: 'a'
	},
	{
		number: 4,
		question: "If it is 3:30pm in London, what time is it in Sydney Australia?",
		answers: {
			a: '6:30am',
			b: '2:30am',
			c: '1:30pm'
		},
		correctAnswer: 'b'
	},
	{
		number: 5,
		question: "When did the 2nd World War end?",
		answers: {
			a: '1945',
			b: '1947',
			c: '1946'
		},
		correctAnswer: 'a'
	},
	{
		number: 6,
		question: "Which horoscope sign is a crab?",
		answers: {
			a: 'Leo',
			b: 'Cancer',
			c: 'Gemini'
		},
		correctAnswer: 'b'
	}
	{
		number: 7,
		question: "Which is the largest island in the Mediterranean Sea?",
		answers: {
			a: 'Malta',
			b: 'Sicily',
			c: 'Greece'
		},
		correctAnswer: 'b'
	}
	{
		number: 8,
		question: "Who was the first baseball player to have his number retired?",
		answers: {
			a: 'Babe Ruth',
			b: 'Joe Dimaggio',
			c: 'Lou Gehrig'
		},
		correctAnswer: 'c'
	}
	{
		number: 9,
		question: "If it is 3:30pm in London, what time is it in Sydney Australia?",
		answers: {
			a: '6:30am',
			b: '2:30am',
			c: '1:30pm'
		},
		correctAnswer: 'b'
	}
	{
		number: 10,
		question: "If it is 3:30pm in London, what time is it in Sydney Australia?",
		answers: {
			a: '6:30am',
			b: '2:30am',
			c: '1:30pm'
		},
		correctAnswer: 'b'
	}
];
$(document).ready(function() {
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
});

$("#next-question").on("click", function(){
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

		}
});






