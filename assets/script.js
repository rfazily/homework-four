

var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");
var currentIndex = 0;



var score = 0;



//switches from introduction to questions, starts timer
startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index at startQuiz click" + currentIndex);
    // Question 1 set to display: none
    document.querySelector("#boxOne").style.display = "none"; 
    // Question 2 for quiz questions is set to display
    document.querySelector("#boxTwo").style.display = "block";
    //showing the questions on the screen
    showQs();
});

function showQs() {
    var question = quizQs[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#chA").innerHTML = question.choices[0];
    document.querySelector("#chB").innerHTML = question.choices[1];
    document.querySelector("#chC").innerHTML = question.choices[2];
    document.querySelector("#chD").innerHTML = question.choices[3];
}
//listen for click on the buttons to determine the person's answer
//we don't have to store their answer, just check if it's correct

for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        //when they click any quizBtn grab value out of that option  
        
        //if they got it right
        if(event.currentTarget.innerText === quizQs[currentIndex].answer){
            score++;
            console.log(score);
            //display "correct!" and continue 
            document.querySelector("#checkAns").innerHTML = "correct";
        } else {
            //if they got it wrong display "wrong!"
            // deduct 5 seconds from the clock and continue 
            document.querySelector("#checkAns").innerHTML = "wrong";
            secondsLeft = secondsLeft - 5;
        }
        console.log("Current Index before ++" + currentIndex);
        //go to the next question
        currentIndex++;
        
        if (currentIndex < 5) {
        //go back to the questions
        showQs();
        }
    });
}
