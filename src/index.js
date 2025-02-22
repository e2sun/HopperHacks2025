// IMPORTS
import {questions} from './questions.js' // importing the questions array

// COMMON USE CONSTANTS
const mainContent = document.getElementById('main');
let indexCounter = 0;
let quizResults=0;

const users=[];

window.onload = function(){
    addModel();
    loadHomePage();
}

function addModel(){
    users.forEach(user=> {
      users.push(user);
    });
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

//LOAD HOMEPAGE

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
        <button id="createUser-btn">Create User</button>
    `;
    const createUser = document.getElementById("createUser-btn");
    createUser.addEventListener("click", loadCreateUser);
    clearQuiz();
}

function clearQuiz() {
    indexCounter = 0;
}

function loadCreateUser(){
    mainContent.innerHTML = `
        <div class="contact-information">
    <div id="contact-information_header"> <h1> Contact Information </h1> </div>
    <form id="contact-information_form" action="/send" method="POST">
        <label class = contact_prompt> <h3> First Name (required, max 100 characters) </h3> </label>
        <input id="firstName" type="text" placeholder="First Name (required, max 100 characters)" onfocus="this.placeholder=''"> 

        <label class = contact_prompt> <h3> Last Name </h3> </label>
        <input id="lastName" type="text" placeholder="Last Name (optional, max 100 characters)" onfocus="this.placeholder=''"> 
        <label for="year_dropdown"> </label>

        <label class = contact_prompt> <h3> Select Year (required) </h3> </label>
        <select name="Select Year (required)" id="year_selection">
            <option value="" label="Select Year (required)"> </option>
            <option value="Freshmen">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="grad">Graduate Student</option>
          </select>

        <label class = contact_prompt> <h3> Primary Major (required) </h3> </label>
        <input id="major" type="text" placeholder="Primary Major (required, max 100 characters)" onfocus="this.placeholder=''"> 
        <label class = contact_prompt> <h3> Description About Yourself (optional, max 500 characters) </h3> </label>
        <textarea id="about_me" type="text" placeholder="Description About Yourself (optional, max 500 characters)" onfocus="this.placeholder=''"></textarea>
         <input id="email" type="text" placeholder="Email (required, max 100 characters)" onfocus="this.placeholder=''">
        <input id="instagram" type="text" placeholder="Instagram Handle (optional, max 100 characters)" onfocus="this.placeholder=''">
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
                var lastName = document.getElementById("firstName"); //Get lastName
                var year_dropdown  = document.getElementById("year_selection"); //Get year dropdown
                var major  = document.getElementById("major"); //Get major 
                var description = document.getElementById("about_me"); //Get description
                var checkbox = document.getElementById("consent"); //checkbox
                var email =document.getElementById("email"); //email
                var insta =document.getElementById("insta"); //insta

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
                        userResults:quizResults.value
                    };
                
                    console.log(newUser);
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

                    
                    loadMatchUser();
                }
      
  });}
};


//LOAD CONNECTED USERS
function loadMatchUser(){
    mainContent.innerHTML=`<h1 class="matcheduseres" > Matched Users </h1>
    <div id="matchedUsers"></div>`;

    const matchedUsers = document.getElementById("matchedUsers");

    users.forEach(user=> {
        const userResults = user.userResults;
        // if (!user.lastName==undefined){
            //FIX THIS
        // }
        if (userResults==quizResults || quizResults==0){
            const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <p id="username"> ${user.firstName} <div id=userlastname> </div> | ${user.year}</p>
                    <p id="usermajor"> Primary Major: ${user.major} </p>
                    <h3 class="useraboutme"> About Me</h3>
                    <p id="userdescription"></h3>
                    <p id="usercontact"> ${user.email} | <div id="userinsta"> </div> </p>
                    <hr>
            `;
            const userDivLastName = document.getElementById("userlastname");
            const userDivDescription = document.getElementById("userdescription");
            const userDivInsta = document.getElementById("userinsta");
            
            if (!user.lastName==undefined){
                userDivLastName.innerHTML= `
                    ${user.lastName}
                `;
            }
            if (!user.description==undefined){
                userDivDescription.innerHTML= `
                ${user.description}
            `;
            }
            if (!user.insta==undefined){
                userDivInsta.innerHTML= `
                ${user.insta}
            `;
            matchedUsers.appendChild(userDiv);

            }

        }})}

           

            // else if (!user.insta==undefined){
            //     userDiv.innerHTML = `
            //         <p id="username"> ${user.firstName} ${user.lastName} | ${user.year}</p>
            //         <p id="usermajor"> Primary Major: ${user.major} </p>
            //         <h3 class="useraboutme"> About Me</h3>
            //         <p id="userdescription">${user.description}</h3>
            //         <p id="useremai"> ${linkFlairContent} </p>
            //         <p id="usercontact"> ${user.email} | ${user.insta}</p>
            //         <hr>
            // `   ;
            // }
//         }
//     });
// };
//For each user in the database, go through and check if the userResults == quizResults and if it does, then show the information


