//intialise variables
let userChoice;
let computerChoice = "";
let answers = ["rock", "paper", "scissors", "cat"];
let myAudio;
let gameAnswer;
setupInput();

function setupInput() {
    let choices = document.getElementsByClassName("choice");
    let cat = document.getElementById("cat");
    let elephant = document.getElementById("elephant");
    elephant.addEventListener("click", userPick);
    myAudio = document.getElementById("myAudio");
    myAudio.addEventListener("canplaythrough", function(){myAudio.play()});
    cat.addEventListener("click", userPick);
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", userPick);
    }
}

function displayOutput()
{
    let winner = document.getElementById("winner");
    if (userChoice ==="cat") {
        myAudio.src = "Catmeow1.mp3";
    }
    winner.innerHTML = gameAnswer;
}

function userPick(evt) {
    userChoice = this.id;
    console.log(userChoice);
    playGame();
}

function playGame() {
computerChoice = answers[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";

    if (userChoice === "cat") {
        result = "meow meow meow MEOW"
    }

    if (userChoice === computerChoice) {
        result = "it's a draw!"
    } else if (userChoice ==="rock") {
        if (computerChoice ==="scissors") {
            result ="you win, as rock blunts scissors!"
        } else {
            result = "the computer wins, as paper wraps rock!"
        }
    } else if (userChoice ==="paper") {
        if (computerChoice ==="rock") {
            result = "you win, as paper wraps rock!!"
        } else {
            result = "the computer wins, as scissors cuts paper!"
        }
    } else if (userChoice ==="scissors") {
        if (computerChoice ==="paper") {
            result = "you win, as scissors cuts paper!!"
        } else {
            result = "the computer wins, as rock blunts scissors!!"
        }
    } 

    if (result === "") {
        gameAnswer = `User picked ${userChoice}, this is not a valid choice, please try again`;
    } else {
        gameAnswer = `User picked ${userChoice} , computer picked ${computerChoice} - ${result}`;
    }



    
  
displayOutput();
}


    
