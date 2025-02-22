// IMPORTS
import {questions} from './questions.js' // importing the questions array
let quizResult = 0;

// COMMON USE CONSTANTS
const mainContent = document.getElementById('main');
let indexCounter = 0;
const results = [{answer: 1, count: 0},
                 {answer: 2, count: 0},
                 {answer: 3, count: 0},
                 {answer: 4, count: 0}];

const users=[];

window.onload = function(){
    addModel();
    loadHomePage();
}

function addModel(){
    user.forEach(user=> {
      users.push(user);
    });
}

function loadHomePage() {
    clearQuiz();
    mainContent.innerHTML = `
        <section class="homepage">
        <div class="homepage-content">
            <h1 class="homepage-title">what type of seawolf are you?</h1>
            <button id="quiz-btn">take the quiz</button>
        </div>
        <div class="wolfie-image">
            <!-- wolfie image -->
            <!--<img src="wolfie.png" alt="drawn image of wolfie">-->
        </div>
        <!-- Decorative Paw Icons -->
        <div class="paw-container">
            <!-- actual paw image files -->
            <!--<img src="paw1.png" alt="paw icon" class="paw paw-top-left">
            <img src="paw2.png" alt="paw icon" class="paw paw-bottom-right">-->
        </div>
        </section>
    `;

   const takeQuizButton = document.getElementById('quiz-btn');
   takeQuizButton.addEventListener("click", loadQuizStart);
}

// NAV BAR BUTTONS
const homePageButton = document.getElementById("home_button");
homePageButton.addEventListener("click", loadHomePage);

const quizPageButtons = document.getElementById("quiz_button");
quizPageButtons.addEventListener("click", loadQuizStart);

// QUIZ PAGES
function loadQuizStart() {
    clearQuiz();
    mainContent.innerHTML = `
        <h1> QUIZ INTRO </h1>
        <button id="startQuiz-btn">Start Quiz</button
    `;

    const startQuizButton = document.getElementById("startQuiz-btn");
    startQuizButton.addEventListener("click", loadQuestions);
}

//LOAD HOMEPAGE

function loadQuestions() {
    const question = questions[indexCounter].question;
    const answer1 = questions[indexCounter].answer1;
    const answer2 = questions[indexCounter].answer2;
    const answer3 = questions[indexCounter].answer3;
    const answer4 = questions[indexCounter].answer4;
    mainContent.innerHTML = `
        <h1 id="question_header">${question}</h1>
        <div id="answer_list">
            <button id="answer1-btn" class="answer_button">${answer1}</button>
            <button id="answer2-btn" class="answer_button">${answer2}</button>
            <button id="answer3-btn" class="answer_button">${answer3}</button>
            <button id="answer4-btn" class="answer_button">${answer4}</button>
        </div>
    `;
    const firstAnswer = document.getElementById("answer1-btn");
    const secondAnswer = document.getElementById("answer2-btn");
    const thirdAnswer = document.getElementById("answer3-btn");
    const fourthAnswer = document.getElementById("answer4-btn");

    firstAnswer.addEventListener("click", () => {
        if(indexCounter === (questions.length-1)){
            results[0].count += 1;
            loadResults();
        } else {
            indexCounter +=1;
            results[0].count += 1;
            loadQuestions();
        }
    })

    secondAnswer.addEventListener("click", () => {
        if(indexCounter === (questions.length-1)){
            results[1].count += 1;
            loadResults();
        } else {
            indexCounter +=1;
            results[1].count += 1;
            loadQuestions();
        }
    })

    thirdAnswer.addEventListener("click", () => {
        if(indexCounter === (questions.length-1)){
            results[2].count += 1;
            loadResults();
        } else {
            indexCounter +=1;
            results[2].count += 1;
            loadQuestions();
        }
    })

    fourthAnswer.addEventListener("click", () => {
        if(indexCounter === (questions.length-1)){
            results[3].count += 1;
            loadResults();
        } else {
            indexCounter +=1;
            results[3].count += 1;
            loadQuestions();
        }
    })
}

// RESULTS PAGE
function loadResults(){
    results.sort(function(a,b){return a.count - b.count});
    quizResult = results[3].answer;
    mainContent.innerHTML = `
        <h1>CONGRATS you filled out the forms</h1>
        <p id="results"> result: you are... <p>
        <button id="createUser-btn">Create User</button>
    `;
    const shareResult = document.getElementById("results");
    if(results[0].count == results[1].count && results[2].count == results[3].count && results[0].count == results[3].count){
        shareResult.innerHTML = `
            result: you are... SUPER WOLFIE!!!!
        `;
        quizResult = 0;
    } else if(quizResult === 1){
        shareResult.innerHTML = `
            result: you are... NUMBER 1
        `;
    } else if(quizResult === 2){
        shareResult.innerHTML = `
            result: you are... NUMBER 2
        `;
    } else if(quizResult === 3){
        shareResult.innerHTML = `
            result: you are... NUMBER 3
        `;
    } else {
        shareResult.innerHTML = `
            result: you are... NUMBER 4
        `;
    }
    const createUser = document.getElementById("createUser-btn");
    createUser.addEventListener("click", loadCreateUser);
    clearQuiz();
}

// RESETTING QUIZ
function clearQuiz() {
    indexCounter = 0;
    results[0].count = 0;
    results[1].count = 0;
    results[2].count = 0;
    results[3].count = 0;
    quizResult = 0;
    results.sort(function(a,b){return a.answer - b.answer});
}

// CREATING USER
function loadCreateUser(){
    mainContent.innerHTML = `
        <h1> PLACE HOLDER </h1>
    `;
}