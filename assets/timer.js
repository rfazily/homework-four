
var userName = document.querySelector("#userName");
var endMsg = document.querySelector("#endMsg");
var yourScore = document.querySelector("#yourScore");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var submitBtn = document.querySelector("#submitNameScore");
var secondsLeft = 60;

function startTimer () {

  var interval = setInterval(function() {
    secondsLeft--;
    document.querySelector("#counterDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);
    
    //if we run out of time
    if (secondsLeft === 0) {
      clearInterval(interval);
      //   Question 2 set to display: none
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      //   Question 3 displays
      document.querySelector("#boxThree").setAttribute("style", "display: block");
    
    //if there are no more questions, setting this to 5 to not cut off the final question
    } else if (currentIndex === 5) {
      //print seconds left to localStorage as "finalTime"
      //end timer
      clearInterval(interval); 
      //   Question 2 set to display: none
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      //   Question 4 displays
      document.querySelector("#boxFour").setAttribute("style", "display: block");
      
      //Score value and multiply it by seconds left
      score = ((score)*(secondsLeft));
      
      if (isNaN(score)) {
        yourScore.innerHTML = "Your score is: 0";
      } else {
        endMsg.innerHTML = "You finished the quiz!";
        yourScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000) 
}



// This populates the high scores and adds to the leaderboard
submitBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  
  console.log("on submitBtn click print out score: " + score); 

  //Initials for final score
  var initials = userName.value;
  console.log("initials" + initials);

  var finalScore = {
    initials, 
    score
  };
  console.log("finalScore" + finalScore);
  
  // Store this info on the client side in 'localStorage'
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(initials, score);
});