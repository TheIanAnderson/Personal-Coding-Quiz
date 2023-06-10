var choicesContainer = document.getElementById("choices-cont");
var startButton = document.querySelector(".start-quiz-button");
var titleText = document.getElementById("question-title");
var questionText = document.getElementById("question-text");
var input = document.getElementsByClassName("input");
var questionArray = [
  {
    title: "Welcome to the quiz!",
    text: "Click the start button to begin.",
  },

  {
    title: "Question 1",
    text: "Why did the chicken cross the road?",
    choice1: "To get to the other side.",
    choice2: "To see a chicken strip.",
    answer: "To get to the other side.",
  },
  {
    title: "Question 2",
    text: "Which of these will log 'hello world' to the console?",
    choice1: "consnole.log('hello world')",
    choice2: "console.log('hello world')",
    answer: "console.log('hello world')",
  },
  {
    title: "Question 3",
    text: "Which of these will create a new variable?",
    choice1: "var = '___'",
    choice2: "v = '___'",
    answer: "var = '___'",
  },
  {
    title: "Question 4",
    text: "How do you signify a break within a list of parameters?",
    choice1: "--",
    choice2: "&",
    answer: "&",
  },
  {
    title: "Question 5",
    text: "Which of these is the way to set a variable strictly equal to another variable or value? ",
    choice1: "var == value",
    choice2: "var === value",
    answer: "var === value",
  },
  {
    title: "Question 6",
    text: "Which of these is the way to use a function?",
    choice1: "var function = myFunc(){}",
    choice2: "myFunc();",
    answer: "myFunc();",
  },
  {
    title: "Question 7",
    text: "How do you parse a return from a fetch?",
    choice1: "myVar = .JSON",
    choice2: "myVar.JSON()",
    answer: "myVar.JSON()",
  },
  {
    title: "Question 8",
    text: "Which of these is proper camel case?",
    choice1: "MyVariable = ___",
    choice2: "myVariable = ___",
    answer: "myVariable = ___",
  },
  {
    title: "Question 9",
    text: "What does '!' say?",
    choice1: "Not.",
    choice2: "Error.",
    answer: "Not.",
  },
  {
    title: "Question 10",
    text: "Can you have a function inside a variable?",
    choice1: "Yes.",
    choice2: "No.",
    answer: "Yes.",
  },
];
var answerButton = document.querySelector(".answerbutton");
var answerButton2 = document.querySelector(".answerbutton2");
var answerButton3 = document.querySelector(".answerbutton3");
var answerButton4 = document.querySelector(".answerbutton4");
var answerButton5 = document.querySelector(".answerbutton5");
var answerButton6 = document.querySelector(".answerbutton6");
var correctAnswers = 0;
var incorrectAnswers = 0;
var countdownElement = document.getElementById("countdown");
var countdownElementId = document.getElementById("timerText");
var initialsPage = document.getElementById("inputFeild");
initialsPage.setAttribute("Style", "display:none")
titleText.textContent = questionArray[0].title;
questionText.textContent = questionArray[0].text;
countdownElement.innerHTML = "";
initialsPage.innerHTML = "";
function gameOver() {
  var unorderedlist = document.getElementById("namesList");
  choicesContainer.innerHTML = "";
  initialsPage.setAttribute("Style", "display:block");
  initialsPage.addEventListener('keyup', function(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter'){
      document.getElementById("namesList").append(JSON.stringify(initialsPage.value) + "  Correct: " + correctAnswers + " Incorrect: " + incorrectAnswers);
      localStorage.setItem( "Username and Score",JSON.stringify({
        Username: initialsPage.value,
        Score: "Correct answers: " + correctAnswers +" Incorrect Answers: " + incorrectAnswers,
      }));
      initialsPage.value = "";
      
    }
  });
  titleText.textContent =
    "Congrats! You got " +
    correctAnswers +
    " questions correct and " +
    incorrectAnswers +
    " questions incorrect!";
  questionText.textContent = "Enter your initials below.";
  answerButton.setAttribute("dissabled", "");
  answerButton2.innerHTML = "Submit";
  console.log("You got " + correctAnswers + " correct!");
  console.log("You got " + incorrectAnswers + " incorrect!");

}
function isCorrect() {
  correctAnswers++;
  console.log("correct answer");
}
function isNotCorrect() {
  incorrectAnswers++;
  console.log("incorrect answer");
}

function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (incorrectAnswers + correctAnswers == 10) {
      countdownElement.innerHTML = "";
    } else if (timeLeft > 1) {
      countdownElement.textContent = " seconds remaining: " + timeLeft;
      timeLeft--;
    } else if (timeLeft == 1) {
      countdownElement.innerHTML = "";
      countdownElementId.textContent = "";
      timeLeft = 0;
      gameOver();
    } else {
      countdownElement.innerHTML = "";
      gameOver();
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  question1();
  countdown();
});

function question1() {
  titleText.textContent = questionArray[1].title;
  questionText.textContent = questionArray[1].text;

  //create and append each button
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[1].choice1;
  answerTwo.textContent = questionArray[1].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);

  //answerButton.textContent = questionArray[1].choice1;
  //answerButton2.textContent = questionArray[1].choice2;
  startButton.setAttribute("style", "display:none");
  answerOne.setAttribute("value", "To get to the other side.");
  answerTwo.setAttribute("value", "To see a chicken strip.");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[1].answer)) {
      isCorrect();
    }
    question2();
  });
  answerTwo.addEventListener("click", function () {
    isNotCorrect();
    question2();
  });
}

function question2() {
  //empty the container so that we can add two new elements
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[2].choice1;
  answerTwo.textContent = questionArray[2].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);

  titleText.textContent = questionArray[2].title;
  questionText.textContent = questionArray[2].text;
  // answerButton.textContent = "";
  // answerButton2.textContent = "";
  // answerButton3.textContent = questionArray[2].choice1;
  // answerButton4.textContent = questionArray[2].choice2;
  answerOne.setAttribute("value", "consnole.log('hello world')");
  answerTwo.setAttribute("value", "console.log('hello world')");
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[2].answer)) {
      isCorrect();
    }
    question3();
  });
  answerOne.addEventListener("click", function () {
    isNotCorrect();

    question3();
  });
}

function question3() {
  // answerButton3.textContent = "";
  // answerButton4.textContent = "";
  titleText.textContent = questionArray[3].title;
  questionText.textContent = questionArray[3].text;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[3].choice1;
  answerTwo.textContent = questionArray[3].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  answerOne.textContent = questionArray[3].choice1;
  answerTwo.textContent = questionArray[3].choice2;
  answerOne.setAttribute("value", "var = '___'");
  answerTwo.setAttribute("value", "v = '___'");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[3].answer)) {
      isCorrect();
    }
    question4();
  });
  answerTwo.addEventListener("click", function () {
    isNotCorrect();

    question4();
  });
}

function question4() {
  titleText.textContent = questionArray[4].title;
  questionText.textContent = questionArray[4].text;
  // answerButton.textContent = questionArray[4].choice1;
  // answerButton2.textContent = questionArray[4].choice2;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[4].choice1;
  answerTwo.textContent = questionArray[4].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  answerOne.setAttribute("value", "--");
  answerTwo.setAttribute("value", "&");
  answerOne.addEventListener("click", function () {
    if (answerOne.value == questionArray[4].answer) {
      isCorrect();
    } else {
      isNotCorrect();
    }
    question5();
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[4].answer)) {
      isCorrect();
    } else {
      isNotCorrect();
    }
    question5();
  });
}

function question5() {
  titleText.textContent = questionArray[5].title;
  questionText.textContent = questionArray[5].text;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[5].choice1;
  answerTwo.textContent = questionArray[5].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  // answerButton.textContent = questionArray[5].choice1;
  // answerButton2.textContent = questionArray[5].choice2;
  answerOne.setAttribute("value", "var == value");
  answerTwo.setAttribute("value", "var === value");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[5].answer)) {
      isNotCorrect();
    } else {
      isCorrect();
    }
    question6();
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[5].answer)) {
      isCorrect();
    } else {
      isNotCorrect();
    }
    question6();
  });
}

function question6() {
  choicesContainer.innerHTML = "";
  titleText.textContent = questionArray[6].title;
  questionText.textContent = questionArray[6].text;
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[6].choice1;
  answerTwo.textContent = questionArray[6].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  // answerButton.textContent = questionArray[6].choice1;
  // answerButton2.textContent = questionArray[6].choice2;
  answerOne.setAttribute("value", "var function = myFunc(){}");
  answerTwo.setAttribute("value", "myFunc();");
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[6].answer)) {
      isCorrect();
      question7();
    } else {
      isNotCorrect();
      question7();
    }
  });
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[6].answer)) {
      isNotCorrect();
      question7();
    }
  });
}

function question7() {
  choicesContainer.innerHTML = "";
  titleText.textContent = questionArray[7].title;
  questionText.textContent = questionArray[7].text;
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[7].choice1;
  answerTwo.textContent = questionArray[7].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  // answerButton.textContent = questionArray[7].choice1;
  // answerButton2.textContent = questionArray[7].choice2;
  answerOne.setAttribute("value", "myVar = .JSON");
  answerTwo.setAttribute("value", "myVar.JSON()");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[7].answer)) {
      isNotCorrect();
    }
    question8();
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[7].answer)) {
      isCorrect();
    }
    question8();
  });
}

function question8() {
  titleText.textContent = questionArray[8].title;
  questionText.textContent = questionArray[8].text;
  // answerButton.textContent = questionArray[8].choice1;
  // answerButton2.textContent = questionArray[8].choice2;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[8].choice1;
  answerTwo.textContent = questionArray[8].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  answerOne.setAttribute("value", "MyVariable = ___");
  answerTwo.setAttribute("value", "myVariable = ___");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[8].answer)) {
      isNotCorrect();
    }
    question9();
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[8].answer)) {
      isCorrect();
      question9();
    }
  });
}

function question9() {
  titleText.textContent = questionArray[9].title;
  questionText.textContent = questionArray[9].text;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[9].choice1;
  answerTwo.textContent = questionArray[9].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  // answerButton.textContent = questionArray[9].choice1;
  // answerButton2.textContent = questionArray[9].choice2;
  answerOne.setAttribute("value", "Not.");
  answerTwo.setAttribute("value", "Yes.");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[9].answer)) {
      isCorrect();
    }
    question10();
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[9].answer)) {
      isNotCorrect();
      question10();
    }
  });
}

function question10() {
  titleText.textContent = questionArray[10].title;
  questionText.textContent = questionArray[10].text;
  choicesContainer.innerHTML = "";
  var answerOne = document.createElement("button");
  var answerTwo = document.createElement("button");
  answerOne.textContent = questionArray[10].choice1;
  answerTwo.textContent = questionArray[10].choice2;
  choicesContainer.append(answerOne);
  choicesContainer.append(answerTwo);
  // answerButton.textContent = questionArray[10].choice1;
  // answerButton2.textContent = questionArray[10].choice2;

  answerOne.setAttribute("value", "Yes.");
  answerTwo.setAttribute("value", "No.");
  answerOne.addEventListener("click", function () {
    if ((answerOne.value = questionArray[10].answer)) {
      isCorrect();
      gameOver();
    }
  });
  answerTwo.addEventListener("click", function () {
    if ((answerTwo.value = questionArray[10].answer)) {
      isNotCorrect();
      gameOver();
    }
  });
  //call a function that will set questions container to be innerHTML = ""; then remove hide class from initials page
}

// var quizQuestions = "";

// var username = document.querySelector(".username");
// var usernames = [];
// var userInfo = {
//   name: "",
//   right: "",
//   wrong: "",
//   rank: "",
// };

// var userScore = [];
// startButton.addEventListener("click", function () {
//   if (username.value === "") {
//     alert("You must enter a username.");
//     return;
//   } else if (username !== "") {
//     userInfo.name = username.value;
//     localStorage.setItem("userInfo", JSON.stringify(userScore));
//     var counter = setInterval(countdown, 1000);
//     userScore.push(username.value);
//     console.log(userScore);

//     }
//   }

// });

// var usernameClass = document.querySelector(".username");

// var userProgress = {
//   username: usernameClass.value,
//   correct: 0,
//   incorrect: 0,
//   rank: 0
// }

// localStorage.setItem("User and Progress", userProgress.username);
