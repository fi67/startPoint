//intialise variables
let userChoice;
let computerChoice;
let gameAnswer;
let catState = 2;

setupWebInput();

function setupWebInput() {
   let choices = document.getElementsByClassName("choice");
   let cat = document.getElementById("cat");
   let elephant = document.getElementById("elephant");
   
   cat.addEventListener("click", userPick);
   elephant.addEventListener("click", userPick);
   for (let i = 0; i < choices.length; i++) {
       choices[i].addEventListener("click", userPick);
   }

}

function userPick(evt) {
   userChoice = this.id;
   console.log(userChoice);
    playGame();
}

function playGame() {
    let answers = ["rock", "paper", "scissors", "cat"];
    computerChoice = answers[Math.floor(Math.random() * 4)];
    console.log(computerChoice);
    catState = 2;
    let result = "";
    if (userChoice === computerChoice) {
        result = "it's a draw!"
    } else if ((userChoice === "cat") || (computerChoice === "cat")) {
        catState = Math.floor(Math.random() * 2);
        console.log(catState);
        if (userChoice === "cat") {
            if (catState === 0) {
                result = "The user picked angry cat! The computer wins!";
            } else {
                result = "The user picked happy cat! The user wins!";
            }
        } else {
            if (catState === 0) {
                result = "The computer picked angry cat! The user wins!";
            } else {
                result = "The computer picked happy cat! The computer wins!";
            }
        }
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            result = "you win, as rock blunts scissors!";
        } else {
            result = "the computer wins, as paper wraps rock!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            result = "you win, as paper wraps rock!!";
        } else {
            result = "the computer wins, as scissors cuts paper!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            result = "you win, as scissors cuts paper!!";
        } else {
            result = "the computer wins, as rock blunts scissors!!";
        }
    }
    if (result === "") {
        gameAnswer = `User picked ${userChoice}, this is not a valid choice, please try again`;
    } else {
        gameAnswer = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;
    }
    userOutput()
}

 
 function userOutput() {
    if ((userChoice === "cat") || (computerChoice ==="cat")) {
        let myAudio = document.getElementById("myAudio");
        let myCatAudio = "";
        
         if (catState === 1) {
            myCatAudio = "Catmeow1.mp3";
         } else if (catState === 0) {
            myCatAudio = "AngryCat.mp3";
         }
        myAudio.src = myCatAudio;
          myAudio.addEventListener("canplaythrough", function(){myAudio.play()});
       }
      
       let winner = document.getElementById("winner");
       winner.innerHTML = gameAnswer;

 }