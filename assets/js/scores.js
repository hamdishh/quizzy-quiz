const highscoresList = document.getElementById('highscores');
const clearButton = document.getElementById('clear');

// Add event listener to the clear button
clearButton.addEventListener('click', clearScores);

// Function to clear high scores
function clearScores() {
    // Clear the highscores list
    highscoresList.innerHTML = '';
    // Optionally, you can clear the high scores stored in localStorage or any other storage mechanism
    localStorage.removeItem('highscores');
}

// Function to display high scores
function displayHighScores() {
    // Retrieve high scores from localStorage or any other storage mechanism
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    // Clear the previous high scores
    highscoresList.innerHTML = '';

    // Populate the highscores list
    highscores.forEach(score => {
        const listItem = document.createElement('li');
        listItem.textContent = score.initials + ' - ' + score.score;
        highscoresList.appendChild(listItem);
    });
}

// Call the function to display high scores when the page loads
displayHighScores();