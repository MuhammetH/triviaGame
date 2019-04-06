var seconds = 10;   

function game(){
    
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
    


	if (question1 === "t") {
		correct++;
}
	if (question2 === "t") {
		correct++;
}	
	if (question3 === "t") {
		correct++;
}
    if (question4 === "t") {
		correct++;
	}
	
	var pictures = ["./assets/images/wellDone.gif", "./assets/images/meeehh.gif", "./assets/images/betterLckNxtTme.gif", "./assets/images/terrible.gif"];
	var messages = ["Well Done!", "You are fine:)", "Better luck next time...", "You are terrible!!"];
	var score;

	if (correct === 4) {
		score = 0;
    }
    if (correct === 3) {
		score = 1;
	}

	if (correct === 2) {
		score = 2;
	}

	if (correct === 1) {
		score = 3;
    }
    


    document.getElementById("results").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("correct-answers").innerHTML = "You got " + correct + " correct answers!!";
	document.getElementById("image").src = pictures[score];
    }
    
    function timer(){
        
        seconds = seconds - 1;
        if(seconds < 10) {
            time.innerHTML = seconds;
            console.log(seconds);
        }
        if (seconds < 1){
            window.clearInterval(update);
            quiz.innerHTML = "Game Over";
        }
    }

    update = setInterval("timer()", 1000);