var questionOne = {
    question: "1. In marvel what is Captain America's real name?\n",
    answer: "Tony Stark"
  }
  var questionTwo = {
    question: "2. What is the tree called that hits people in Harry Potter?\n",
    answer: "Whomping Willow"
  }
  var questionThree = {
    question: "3. Percy Jackson is the son of?\n",
    answer: "Poseidon"
  }
  var questionFour = {
    question: "4. Who won the hunger games?\n",
    answer: "Katniss"
  }
  var questionFive = {
    question: "5. Who is playing the lead role in 'Cyberpunk 2077'?\n",
    answer: "keanu reeves"
  }
  
  var questionAnswer = [questionOne, questionTwo, questionThree, questionFour, questionFive];
  
  function period(){
    console.log(chalk.blue("----------------------"))
  }
  
  var readlineSync = require("readline-sync");
  
  var chalk = require("chalk")
  
  var score = 0;
  
  var userName = readlineSync.question("What's your name?\n");
  
  console.log("Aah!, lovely! Welcome " + userName + ".");
  period()
  
  chooseToPlay();
  
  function chooseToPlay(){
  
    var wantToPlay = readlineSync.question("Here's a quiz by Thiru, Do you want to play?\n");
    
    if (wantToPlay === "yes" || "Yes") {
      period()
      console.log(chalk.cyan("Yay! Let's complete the quiz."))
      period();
      question();
    } else if (wantToPlay != "yes" || "Yes") {
      period()
      console.log(chalk.yellow("I wish you played this game, sorry to see you go."))
    }
  };
  
  
  function playQuiz (question, answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()){
      
      console.log(chalk.green("You got the right answer."))
      score = score + 1
    } else {
      
      console.log(chalk.red("You messed-up."))
      console.log(chalk.bgRed("The correct answer is " + answer + "."))
      score = score - 1
    }
    
    console.log("Your score is " + score + ".")
    period()
    period()
  }
  
  function question (){
    for (var i=0; i<questionAnswer.length; i++){
      currentTarget = questionAnswer[i];
      playQuiz(currentTarget.question, currentTarget.answer);
    }
  }
  
  console.log(chalk.blueBright.bold("Your final score is " + score + "."))
  period()
  console.log(chalk.bgYellow("Share this quiz with you friends and also tell me your score."))
  period()
  
  
  var highScore = [{
    name: "naveen",
    score: 5},
    {
      name: "nirmal",
      score: 3
    },
  ]
  
    console.log(chalk.italic("All the high scores."))
    period()
  
  for (var i = 0; i < highScore.length; i++){
      console.log(highScore[i].name, ":", highScore[i].score);
    }