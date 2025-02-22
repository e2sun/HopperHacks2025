// IMPORTS
import {questions} from './questions.js' // importing the questions array

// COMMON USE CONSTANTS
const mainContent = document.getElementById('main');
let indexCounter = 0;


window.onload = function(){
    loadHomePage();
}

function loadHomePage() {
    mainContent.innerHTML = `
        <section class="homepage">
        <div class="homepage-content">
            <h1 class="homepage-title">what type of seawolf are you?</h1>
            <button id="quiz-btn">take the quiz</button>
        </div>
        <div class="wolfie-image">
            <!-- wolfie image -->
            <img src="wolfie.png" alt="drawn image of wolfie">
        </div>
        <!-- Decorative Paw Icons -->
        <div class="paw-container">
            <!-- actual paw image files -->
            <img src="paw1.png" alt="paw icon" class="paw paw-top-left">
            <img src="paw2.png" alt="paw icon" class="paw paw-bottom-right">
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
    mainContent.innerHTML = `
        <h1> QUIZ INTRO </h1>
        <button id="startQuiz-btn">Start Quiz</button
    `;

    const startQuizButton = document.getElementById("startQuiz-btn");
    startQuizButton.addEventListener("click", loadQuestions);
}

function loadQuestions() {
    const question = questions[indexCounter].question;
    const answer1 = questions[indexCounter].answer1;
    const answer2 = questions[indexCounter].answer2;
    const answer3 = questions[indexCounter].answer3;
    const answer4 = questions[indexCounter].answer4;
    mainContent.innerHTML = `
        <h1>${question}</h1>
        <p>${indexCounter}</p>
        <button id="next_question">Next Question</button>
    `;
    const nextButton = document.getElementById("next_question");

    if(indexCounter === (questions.length-1)){
        nextButton.innerHTML = `
            Submit Quiz
        `;
        nextButton.addEventListener("click", loadResults);
    } else{
        nextButton.addEventListener("click", () => {
            indexCounter += 1;
            console.log(indexCounter);
            loadQuestions();
        });
    }
}

function loadResults(){
    mainContent.innerHTML = `
        <h1>CONGRATS you filled out the forms</h1>
    `;
    clearQuiz();
}

function clearQuiz() {
    indexCounter = 0;
}