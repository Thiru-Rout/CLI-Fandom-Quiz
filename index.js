var readlineSync = require('readline-sync');

var chalk = require('chalk');

var score = 0;

var highScores = [
	{
		name: "Dinesh",
		score: 6,
	}
]


var questions = [
	{
		question: "1. In cricket, who is an all-rounder?",
		options: [
			"a. Who can field in all positions",
			"b. Who can bowl with both hands",
			"c. Who can bat in all positions",
			"d. Who can bat and bowl"
		],
		answer: "d. Who can bat and bowl",
	},
	{
		question: "2. Which two cricketers were accused in the 'Monkeygate' scandal? ",
		options: [
			"a. Sachin Tendulkar & Ricky Ponting",
			"b. MS Dhoni & Andrew Symonds",
			"c. Harbhajan Singh & Andrew Symonds",
			"d. Zaheer Khan & Adam Gilchrist"
		],
		answer: "c. Harbhajan Singh & Andrew Symonds",
	},
	{
		question: "3. What is the only way that a batsman can get out in a 'free hit'? ",
		options: [
			"a. Caught behind",
			"b. Run out",
			"c. Stumping",
			"d. Bowled"
		],
		answer: "b. Run out",
	},
	{
		question: "4. Where was the opening ceremony of the 2011 ICC Cricket World Cup held? ",
		options: [
			"a. Kolkata",
			"b. Dhaka",
			"c. Colombo",
			"d. Bengaluru"
		],
		answer: "b. Dhaka",
	},
	{
		question: "5. Apart from India, for which other country did Nawab of Pataudi senior play cricket? ",
		options: [
			"a. South Africa",
			"b. New Zealand",
			"c. England",
			"d. Australia"
		],
		answer: "c. England",
	},
]


function welcome() {
	var user = readlineSync.question("What's your name? ");

	console.log(`\nWelcome to Cricket quiz ${user}.`);
}


function play(question,options, answer) {
	console.log(chalk.blue(question));
	
	console.log(chalk.yellow("\nOptions:\n"))
	for(let i =0; i< options.length; i++){
		console.log(options[i]);
	}

	var userAns = readlineSync.question("\nEnter your answer: ");
	console.log(`you entered ${userAns}`);

	if (userAns.toUpperCase() == answer.toUpperCase()) {
		console.log(chalk.green("You're right"));
		score = score + 2;
	} else {
		console.log(chalk.red("You're wrong!"));
	}
	console.log(`SCORE: ${score}`);
}



function game() {
	for (let i = 0; i < questions.length; i++) {
		let currentQuestion = questions[i];
		console.log(`\nQuestion ${i + 1}:\n-----------`)
		play(currentQuestion.question,currentQuestion.options, currentQuestion.answer)
	}
}



function checkHighScore() {
	if (score > 0) {
		console.log(`\n\nWOW!! You scored ${score}`);
	} else if (score === 0) {
		console.log(`\n\nYou scored ${score}. Its ok that you don't know me.`);
	}
	else {
		console.log(`\n\nYou scored ${score}`);
	}
	for (let i = 0; i < highScores.length; i++) {
		let currentScore = highScores[i];
		if (score > currentScore.score) {
			console.log(chalk.green(`Congratulations!! You made a highscore. You beat ${currentScore.name} by ${score - currentScore.score} `))
			console.log('You can send me a screenshot to get your score to be added to the highscore list.')
		}
	}
}

welcome();
game();
checkHighScore();
