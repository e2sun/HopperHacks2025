// IMPORTS
import {questions} from './questions.js'; // importing the questions array
let quizResult = 0;

import Database from './database.js';
const databaseInstance = new Database();

const {modelUsers} = databaseInstance.data;

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

    modelUsers.forEach(user => {
       users.push(user);
    });
}

// LOAD HOMEPAGE
function loadHomePage() {
    clearQuiz();
    mainContent.innerHTML = `
        <section class="homepage">
        <div class="homepage-content">
            <h1 class="red_heading">what type of seawolf are you?</h1>
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

const wolfieTypeButtons = document.getElementById("wolfieType_button");
wolfieTypeButtons.addEventListener("click", loadWolfieType);

const wolfieHeadButton = document.getElementById("wolfiehead-link");
wolfieHeadButton.addEventListener("click", loadHomePage);

// QUIZ PAGES
function loadQuizStart() {
    clearQuiz();
    mainContent.innerHTML = `
        <div id="start_quiz">
        <h1 class="red_heading"> Are you ready... </h1>
        <p id="are_you_ready_description"> For each question, choose the option that resonates the most with you. At the end of the quiz, you will get matched
        with the Wolfie that best matches your personality. If you want to get in touch with other Seawolves that have the same
        personality type as you, add yourself as a user and meet with other seawolves! Refer to "wolfie types" in the navbar to 
        view the different types of wolfie personalities. Good luck!</p>
        <button id="startQuiz-btn"> Start Quiz </button>
        </div>
    `;
    

    const startQuizButton = document.getElementById("startQuiz-btn");
    startQuizButton.addEventListener("click", loadQuestions);
}

//LOAD QUESTIONS
function loadQuestions() {
    const question = questions[indexCounter].question;
    const answer1 = questions[indexCounter].answer1;
    const answer2 = questions[indexCounter].answer2;
    const answer3 = questions[indexCounter].answer3;
    const answer4 = questions[indexCounter].answer4;
    mainContent.innerHTML = `
        <h1 id="question_header" class="red_heading">${question}</h1>
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

    //quizResult = 0;

    results.sort(function(a,b){return a.answer - b.answer});
}

// CREATING USER
function loadCreateUser(){
    mainContent.innerHTML = `
        <div class="contact-information">
        <div class="red_heading" id="contact-information_header"> <h1> Contact Information </h1> </div>
        <form id="contact-information_form" action="/send" method="POST">
        
        <label class = contact_prompt> <h3> First Name (required, max 100 characters) </h3> </label>
        <input id="firstName" type="text" placeholder="First Name (required, max 100 characters)" onfocus="this.placeholder=''"> 
        <label class = contact_prompt> <h3> Last Name </h3> </label>
        <input id="lastName" type="text" placeholder="Last Name (optional, max 100 characters)" onfocus="this.placeholder=''">
         
        <label for="year_dropdown"> </label>

        <label class = contact_prompt> <h3> Select Year (required) </h3> </label>
        <select name="Select Year (required)" id="year_selection">
            <option value="" label="Select Year (required)"> </option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="grad">Graduate Student</option>
          </select>

        <label class = contact_prompt> <h3> Primary Major (required) </h3> </label>
        <input id="major" type="text" placeholder="Primary Major (required, max 100 characters)" onfocus="this.placeholder=''"> 
        <label class = contact_prompt> <h3> Description About Yourself (optional, max 500 characters) </h3> </label>
        <textarea id="about_me" type="text" placeholder="Description About Yourself (optional, max 500 characters)" onfocus="this.placeholder=''"></textarea>
        <label class = contact_prompt> <h3> Email (required, max 500 characters) </h3> </label>
         <input id="email" type="text" placeholder="Email (required, max 100 characters)" onfocus="this.placeholder=''">
         <label class = contact_prompt> <h3> Instagram Username (optional, max 500 characters) </h3> </label>
        <input id="instagram" type="text" placeholder="Instagram Username" (optional, max 100 characters)" onfocus="this.placeholder=''">
        <div id="consent_form">
            <label for="consent">I consent to my information being shared with other students.</label>
            <input type="checkbox" id="consent" name="consent" checked />
        </div>
       
        <input id="submit_information" type="submit" value="Submit Information">

    </form>

</div>

`;

  //Submitting a new user
  let addUserForm = document.getElementById("contact-information_form");
  
        if (addUserForm) {
        
            addUserForm.addEventListener("submit", (e) => {
                e.preventDefault(); //Don't reload page 
                const maxChar = 100;
                const maxDescription=500; 
                var firstName = document.getElementById("firstName"); //Get firstName
                var lastName = document.getElementById("lastName"); //Get lastName
                var year_dropdown  = document.getElementById("year_selection"); //Get year dropdown
                var major  = document.getElementById("major"); //Get major 
                var description = document.getElementById("about_me"); //Get description
                var checkbox = document.getElementById("consent"); //checkbox
                var email =document.getElementById("email"); //email
                var insta =document.getElementById("instagram"); //insta

                let firstNameCount=firstName.value.length; //Get length of firstName 
                var lastNameCount;
                if (lastName==undefined){
                    lastNameCount=0;
                } else{
                    lastNameCount=lastName.value.length; //Get length of lastName
                }
                
                let year_selection=year_dropdown.value; //Get year selection
                let majorCount = major.value.length; //Get length of major
                var descriptionCount;
                if (description==undefined){
                    descriptionCount=0;
                } 
                else{
                    descriptionCount = description.value.length; //Get value of description box
                }
                let emailCount = email.value.length; //Get length of major
                var instaCount;
                if (insta==undefined){
                    instaCount=0;
                } else{
                    instaCount = insta.value.length; //Get length of instagram

                }
                
                var valid=true;
            
                if (firstNameCount===0 || emailCount==0){
                    alert("Please enter your first name");
                    valid=false;
                }
                if (firstNameCount>maxChar || lastNameCount>maxChar || majorCount>maxChar || descriptionCount>maxDescription || emailCount>maxChar || instaCount>maxChar){
                    alert("Characters have exeeded the limit!");
                    valid=false;
                }
                if (year_selection===''){
                    alert("Please select your school year");
                    valid=false;
                }
            
                if (!checkbox.checked) {
                    alert("You must consent to proceed");
                    valid=false;
                }

                if (valid){
                    console.log("it is valid");
                  
                    let newUser;
                  
                      
                    newUser = {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        year: year_selection,
                        major: major.value,
                        description: description.value,
                        userResults:quizResult,
                        email: email.value,
                        insta: insta.value
                    };
                
                    loadMatchUser();
                    users.push(newUser);

                    alert("You can now be matched with other seawolfs!");
        
                    // Reset form fields...
                    firstName.value = "";
                    if (!lastName==undefined){
                        lastName.value="";
                    }
                    year_dropdown.selectedIndex = 0;
                    major.value = "";
                    if (!description==undefined){
                        description.value="";
                    }
                    
                    email.value="";
                    if (!insta==undefined){
                        insta.value="";
                    }                    
                }
      
  });}
};


//LOAD CONNECTED USERS
function loadMatchUser(){
    mainContent.innerHTML=`<h1 id="matchedusers" class="red_heading"> Matched Users </h1>`;
    console.log(quizResult);
    users.forEach(user=> {
        const userResults = user.userResults;
    
        if (userResults==quizResult || quizResult==0){
            const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <hr>
                    <p class="username">
                    <span class="user-firstname">${user.firstName}</span>
                    <span class="user-lastname">${user.lastName ? user.lastName : ""}</span>
                    <span class="user-year">| ${user.year}</span>
                    </p>
                    <p class="user-major">Primary Major: ${user.major}</p>
                    <h3 class="user-aboutme">About Me:</h3>
                    <p class="user-description">${user.description ? user.description : ""}</p>
                    <p class="user-contact">${user.email} ${user.insta ? "| @" + user.insta + " on instagram" : ""}</p>
                    <hr>
            `;
            const userDivLastName = userDiv.querySelector("#userlastname");
            const userDivDescription = userDiv.querySelector("#userdescription");
            const userDivInsta = userDiv.querySelector("#userinsta");
            
            mainContent.appendChild(userDiv);

        }})}
// WOLFIE TYPE PAGE
function loadWolfieType() {
    mainContent.innerHTML = `
        <h1 class="red_heading">all possible types</h1>
        <div class="infoDivs" id="helloKittyInfo">
            <img id="helloKittyWolfie" class="wolfiePics" src="hello_kitty_wolfie.png" alt="Hello Kitty Wolfie">
            <div class="writtenInfo" id="helloKittyInnerInfo">
                <h3 class="writtenHeader">Hello Wolfie</h3>
                <ul>
                    <li>Unexpectedly sweet</li>
                    <li>Making cupcakes at 2AM</li>
                    <li>Always helping strangers</li>
                    <li>The mom of the group</li>
                    <li>Will bite if you cross her</li>
                    <li>Is always down to do something</li>
                </ul>
            </div>
        </div>

        <div class="infoDivs" id="kirbyInfo">
            <img id="kirbyWolfie" class="wolfiePics" src="kirby_wolfie.png" alt="Pirate Wolfie">
            <div class="writtenInfo" id="kirbyInnerInfo">
                <h3 class="writtenHeader">Kirfie</h3>
                <ul>
                    <li>Overly friendly</li>
                    <li>Will go out of their way to help</li>
                    <li>Strong sense of justice</li>
                    <li>Not afraid to throw hands</li>
                    <li>Will greet you with a smile</li>
                    <li>Always slipping and falling</li>
                </ul>
            </div>
        </div>
        
        <div class="infoDivs" id="pirateInfo">
            <img id="pirateWolfie" class="wolfiePics" src="pirate_wolfie.png" alt="Kirby Wolfie">
            <div class="writtenInfo" id="pirateInnerInfo">
                <h3 class="writtenHeader">Pirawolf</h3>
                <ul>
                    <li>Never backs down from a challenge</li>
                    <li>Always down for an adventure</li>
                    <li>Secretly cares a lot for others</li>
                    <li>Always has the most crazy stories</li>
                    <li>Never catches a break</li>
                    <li>Has a soft spot for cute animals</li>
                </ul>
            </div>
        </div>

        <div class="infoDivs" id="hopperInfo">
            <img id="hopperWolfie" class="wolfiePics" src="hopper_wolfie.png" alt="Hopper Wolfie">
            <div class="writtenInfo" id="hopperInnerInfo">
                <h3 class="writtenHeader">Hopfie</h3>
                <ul>
                    <li>Does not stop talking</li>
                    <li>Nocturnal</li>
                    <li>Always finding new ways to have fun</li>
                    <li>The child of the group</li>
                    <li>Will plot your downfall</li>
                    <li>Attached to their computer</li>
                </ul>
            </div>
        </div>
    `;
}