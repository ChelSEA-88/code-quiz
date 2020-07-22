var quizBlock = document.querySelector(".card");
var choiceBtn = document.querySelector(".btn-grid")
var startButton = document.getElementById("#start-button");
var questionSpace = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var questionElement = document.getElementById("questions");
var nextQuestion;
var score = 0;
var questionIndex = 0;


startButton.addEventListener("click", startQuiz());

function startQuiz() {
    startButton.classList.add("hide");
    quizBlock.classList.remove("hide");
    nextQuestion = 0;
}

function setNextQuestion() {
    showQuestion(questions[nexQuestion++]);
}


//score plus conditions

//if (userClick === "answer3"){
//score++;
//alert("Correct!");
//} else {
    //alert("Wrong!");
//}


var questions = [
    {
    q : "Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
    answer: "3"
}, {
    q: "Web pages are written using _____?",
    choice1: "HTML",
    choice2: "URL",
    choice3: "The browser",
    choice4: "Javascript Only",
    answer: "1"
}, {
    q: "3Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
    answer: "3"
 }, {
    q: "4Who designed the first mechanical computer?",
    choice1: "Bill Gates",
    choice2: "Dr. Phil",
    choice3: "Charles Babbage",
    choice4: "Albert Einstein",
     answer: "3"
}];




// \n = line break

//create a function to start quiz+ timer

//create a function that loops through the questions
//create a function that loops through the choices and answers
//create an array of questions and answers
// the questions need to be in an array and the answeres need to be in an array 
//the choices need to be in an array and they need to connected
