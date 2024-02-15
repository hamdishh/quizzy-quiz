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
displayQuestion(questions[currentQuestion]);
    // Start the timer
    startTimer();
  }
  