var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

console.log(chalk.green("Welcome to, Do you know me quiz"));

var userName = readlineSync.question(chalk.red("What is your Name ? "));
console.log(chalk.blue("Welcome " + userName, ", your quiz will be here: "));

function play(question, answer)
{
    var userAnswer = readlineSync.question(chalk.red(question));

    if (userAnswer.toUpperCase() == answer.toUpperCase())
    {
        console.log(chalk.green("Right !"));
        score = score + 1;
    }
    else
    {
        console.log(chalk.yellow("Wrong !"));
        score = score;
    }
    console.log("current Score: " + score);
    console.log("------------------------");
}
var questions = [
    {
        question: "Where do i live: ",
        answer: "Bangalore"
    },
    {
        question: "What is the favorite color: ",
        answer: "White"
    },
    {
        question: "Favorite food : ",
        answer: "Lemon Rice"
    },
    {
        question: "Interested field to work on: ",
        answer: "Aggriculture"
    }
];

for (var i = 0; i < questions.length; i = i + 1)
{
    // var currentQuestion = questions[i];
    // play(currentQuestion.question, currentQuestion.answer)
    play(questions[i].question, questions[i].answer)
}
console.log(chalk.rgb(10, 75, 10)("you Scored :" + score));
console.log(chalk.keyword('orange')("Check out the high scores, if you shoul be there ping me and we will update it:"));
var highScore = [
    {   name: "Naveen",
        score: 4,
    },
    {   name: "Sri",
        score: 3,
    },
]
for (var j=0; j<highScore.length; j=j+1)
{
    // var currentScore = highScore[j];
    console.log(highScore[j].name, ":" ,highScore[j].score);
    // console.log(currentScore.score);
}
