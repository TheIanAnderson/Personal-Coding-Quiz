// Someone clicks start ->
// Game starts, card changes to a quesiton with buttons to log asnwers-> 
// When a wrong answer is given, counter subtracts -10 seconds.
// Game ends when clock = 0 or all questions are answered.
// Score is kept in local storage at the end of game, when initials are given.

var startButton = document.querySelector(".start-quiz-button");
var countdownElement = document.getElementById("countdown");
var count = 100;
var titleText = document.getElementById("question-title");
var questionText = document.getElementById("question-text");
var questionArray = [
  {
    title: "Welcome to the quiz!",
    text: "Click the start button to begin."
  },
  
  {
  title: "Question 1",
  text: "Why did the chicken cross the road?",
  choice1: "To get to the other side.",
  choice2: "To see a chicken strip.",
  isCorrect: this.choice1
},
{
  title: "Question 2",
  text: "Which of these will log 'hello world' to the console?",
  choice1: "consnole.log('hello world')",
  choice2: "console.log('hello world')",
  isCorrect: this.choice2
},
{
  title: "Question 3",
  text: "Which of these will update the text of a <h3> element with JavaScript?",
  choice1: "h3.textContent = '______'",
  choice2: "h3.innerHTML = '_____'",
  isCorrect: this.choice1
}];
var answerButton = document.querySelector(".answerbutton");
var answerButton2 = document.querySelector(".answerbutton2")
var answerButton3 = document.querySelector(".answerbutton3")
var answerButton4 = document.querySelector(".answerbutton4")
var answerButton5 = document.querySelector(".answerbutton5")
var answerButton6 = document.querySelector(".answerbutton6")

var correctAnswers = 0;
var incorrectAnswers = 0;

titleText.textContent = questionArray[0].title;
questionText.textContent = questionArray[0].text;

startButton.addEventListener("click", function(){
  titleText.textContent = questionArray[1].title;
  questionText.textContent = questionArray[1].text;
  answerButton.textContent = questionArray[1].choice1;
  answerButton2.textContent = questionArray[1].choice2;
  startButton.setAttribute("style","display:none");
  answerButton.setAttribute("style", "display:inline");
  answerButton2.setAttribute("style", "display:inline");
  return question1();
});

function question1(){
  answerButton.addEventListener("click", function(){
    if(answerButton.textContent != questionArray[1].choice2){
      ++correctAnswers;
      console.log("Correct: " + correctAnswers);
      console.log("Incorrect: " + incorrectAnswers);
      return question2();
    }
  });
  answerButton2.addEventListener("click", function(){
    if(answerButton2.textContent != questionArray[1].choice1){
      ++incorrectAnswers;
      console.log("Correct: " + correctAnswers);
      console.log("Incorrect: " + incorrectAnswers);
      return question2();
    }
  });
}

function question2(){
  titleText.textContent = questionArray[2].title;
  questionText.textContent = questionArray[2].text;
  answerButton.textContent = questionArray[2].choice1;
  answerButton2.textContent = questionArray[2].choice2;
  answerButton.addEventListener("click", function(){
    if(answerButton.textContent != questionArray[2].choice2){
      ++incorrectAnswers;      
      console.log("Correct: " + correctAnswers);
      console.log("Incorrect: " + incorrectAnswers);
      return question3();
    }
  });
  answerButton2.addEventListener("click", function(){
    if(answerButton2.textContent != questionArray[2].choice1){
    ++correctAnswers;
    console.log("Correct: " + correctAnswers);
    console.log("Incorrect: " + incorrectAnswers);
    return question3();
    }
  });
}


function question3(){
  titleText.textContent = questionArray[3].title;
  questionText.textContent = questionArray[3].text;
  answerButton.textContent = questionArray[3].choice1;
  answerButton2.textContent = questionArray[3].choice2;
  answerButton.addEventListener("click", function(){
    if(answerButton.textContent != questionArray[3].choice2){
      ++incorrectAnswers;      
      console.log("Correct: " + correctAnswers);
      console.log("Incorrect: " + incorrectAnswers);
    }
  });
  answerButton2.addEventListener("click", function(){
    if(answerButton2.textContent != questionArray[3].choice1){
    ++correctAnswers;
    console.log("Correct: " + correctAnswers);
    console.log("Incorrect: " + incorrectAnswers);
    }
  });
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