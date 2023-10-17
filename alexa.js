// at the top our variables
let userChoice;
let computerChoice;
let gameAnswer;
let catState;

// launch handler change
const speakOutput = 'Welcome to rock paper scissors cat 2023! You can say rock, paper, scissors or cat';


// userpick handler
const UserPickIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'UserPickIntent';
    },
    handle(handlerInput) {
        userChoice = handlerInput.requestEnvelope.request.intent.slots.userChoice.value;
          playGame();
        const speechText = gameAnswer;
        gameAnswer = "";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('Try rock, paper, scissors or cat')
            .getResponse();
    }
};

//end
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        UserPickIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
    
    
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
    if ((userChoice === "cat") || (computerChoice === "cat")) {
    let catSound = "";
    if (catState === 0) {
        catSound = "<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_01'/>";
    } else if (catState === 1) {
        catSound = "<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01'/><audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_02'/>";
    } else {
        catSound = ""
    }
    gameAnswer = `${catSound} ${gameAnswer}`;
    }
}
