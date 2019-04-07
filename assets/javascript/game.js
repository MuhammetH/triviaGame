var seconds = 31;   

function game() {
    
	var questions = [];
	questions.push(document.quiz.question1.value);
	questions.push(document.quiz.question2.value);
	questions.push(document.quiz.question3.value);
	questions.push(document.quiz.question4.value);
	
    var score = 0;
	
	for (var x = 0; x < questions.length ; x++) {
		if (questions[x] === "t") score++;
	}
	
	var pictures = ["./assets/images/terrible.gif","./assets/images/terrible.gif","./assets/images/betterLckNxtTme.gif","./assets/images/meeehh.gif","./assets/images/wellDone.gif",]
	var messages = ["Nope, do it again!!","You are terrible!!","Better luck next time...","You are fine:)","Well Done!"]
	
    document.getElementById("results").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("correct-answers").innerHTML = "You got " + score + " correct answers!!";
	document.getElementById("image").src = pictures[score];
    }
    
    function timer(){
        
        seconds = seconds - 1;
        if(seconds < 31) {
            time.innerHTML = seconds;
        }
        if (seconds < 1){
			window.clearInterval(update);
			game();
            
        }
    }

    update = setInterval("timer()", 1000);