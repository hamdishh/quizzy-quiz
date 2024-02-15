//import questions
const questions = window.questions
// console.log(questions);

//definining variables
const startButton = document.getElementById('start');
const questionsContainer = document.getElementById('questions');
const choicesContainer = document.getElementById('choices');
let currentQuestion = 0;
let score= 0;
let timeRemaining = 60;

//Set function to start the quiz
function startQuiz() {


 // Ensure start screen is hidden once user starts the quiz so only questions will render
document.getElementById('start-screen').classList.add('hide');
// Display the first question
showQuestion(questions[currentQuestion]);
    // Start the timer
    startTimer();
  }
  
// Function to display a question on the screen
function showQuestion(question) {
// Display the question title
    document.getElementById('question-title').textContent = question.question;
 // Showing buttons for the choices of answers
choicesContainer.innerHTML = '';
question.answers.forEach(answer => {
const button = document.createElement('button');
 button.textContent = answer;
choicesContainer.appendChild(button);
    });
  }

// Function to check the selected answer
function checkAnswer(answer) {
    const currentQuestionObject = questions[currentQuestion];
    if (answer === currentQuestionObject.correctAnswer) {
        // Correct answer
        score++;
        // Play correct sound if correct
        const correctSound = document.getElementById('correctSound');
        correctSound.play();
        // Proceed to the next question or end the quiz
        newQuestionOrEnd();
    } else {
        // Incorrect answer
        timeRemaining -= 10; // Penalty: Subtract 10 seconds from user's remaining time
        // Play incorrect sound if user gets it wrong
        const incorrectSound = document.getElementById('incorrectSound');
        incorrectSound.play();
        // Proceed to the next question or end the quiz
        newQuestionOrEnd();
    }
}

//function that enables moving on to the next question or ending the quiz

function newQuestionOrEnd() {
    currentQuestion++ //move on to next q
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]); //render next q
    } else {
        endQuiz(); //End quiz once all q's are answered
    }
}

//logic for timer
function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            // Update the timer display
            document.getElementById('time').textContent = timeRemaining;
            timeRemaining--; // Decrements the remaining time
        } else {
            clearInterval(timerInterval); // Stop the timer if time runs out
            endQuiz(); // End the quiz
        }
    }, 1000); // Update the timer every 1 second converted to 1000 milliseconds
}

//call function to end quiz
function endQuiz() {
    //Hide questions container and display end screen
    questionsContainer.classList.add('hide');
    document.getElementById('end-screen').classList.remove('hide');

    //show final score
    document.getElementById('final-score').textContent = score;
}
  //add an event listener for the start button
  startButton.addEventListener('click', startQuiz);