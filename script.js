//When we click start a timer will execute and the questions will appear
//When user answers the question if/else for right or wrong and execute next question
//When the user answer the question incorrectly we subtract time
//wWhen all questions answered or time reaches zero, the game is over


var quizBlock = document.querySelector(".card-body");
var choiceBtn = document.querySelector(".btn-grid")
var startButton = document.getElementById("start-button");
var questionSpace = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var score = 0;
var questionIndex = 0;


var questions = [
    {
    question : "Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
    answer: "3"
}, {
    question: "Web pages are written using _____?",
    choice1: "HTML",
    choice2: "URL",
    choice3: "The browser",
    choice4: "Javascript Only",
    answer: "1"
}, {
    question: "Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
    answer: "3"
 }, {
    question: "Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
     answer: "3"
}];

var setQuestions = questions.length -1;
var currentQuestion = 0;

function showQuestions() {
    let q = questions.length();

    questionSpace.innerText = ("<p>" + q.questions + "</p>");
    choice1.innerText = q.choice1;
    choice2.innerText = questions.choice1;
}



function startQuiz() {

    showQuestions(questions[currentQuestion++]);
    //displayquestion make them outside then call them in here
    // startButton.classList.add("hide");
    // quizBlock.classList.remove("hide");
    // nextQuestion = 0;
    // setNextQuestion();
    //timer start
    console.log("next question")
}

startButton.addEventListener("click", function () {
    startQuiz()
});

// \n = line break

//create a function to start quiz+ timer

//create a function that loops through the questions
//create a function that loops through the choices and answers
//create an array of questions and answers
// the questions need to be in an array and the answeres need to be in an array 
//the choices need to be in an array and they need to connected
