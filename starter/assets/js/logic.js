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
  
// Function to display a question on the screen
function displayQuestion(question) {
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
    const currentQuestion = questions[currentQuestion];
    if (answer === currentQuestion.correctAnswer) {
// Correct answer
      score++;
// Play correct sound if correct
 // Proceed to the next question or end the quiz
      nextQuestionOrEnd();
    } else {
// Incorrect answer
 timeLeft -= 10; // Penalty: Subtract 10 seconds from users guessing time
// Play incorrect sound if user gets it wrong

// Proceed to the next question or end the quiz
nextQuestionOrEnd();
    }
  }
  