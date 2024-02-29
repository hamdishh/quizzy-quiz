// Retrieve elements from the DOM
var initialsInput = document.querySelector("#initials");
var clearHighscoresBtn = document.getElementById("clear");

// Function to display final scores
function displayFinalScores() {
  // Retrieve scores and initials from local storage
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  var initials = JSON.parse(localStorage.getItem("initials")) || [];
  
  // Access the highscores list element
  var highscoresList = document.getElementById("highscores");

  // Clear previous highscores
  highscoresList.innerHTML = "";

  // Iterate through scores and initials to create list items
  for (var i = 0; i < scores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = initials[i] + " - " + scores[i];
    highscoresList.appendChild(listItem);
  }
}

// Function to clear high scores
function clearHighscores() {
  // Clear scores and initials from local storage
  localStorage.setItem("scores", JSON.stringify([]));
  localStorage.setItem("initials", JSON.stringify([]));

  // Clear the highscores list
  document.getElementById("highscores").innerHTML = "";
}

// Add event listener to the clear highscores button
clearHighscoresBtn.addEventListener("click", clearHighscores);

// Call the function to display final scores when the page loads
displayFinalScores();
