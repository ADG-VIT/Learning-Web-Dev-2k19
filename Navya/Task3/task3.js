function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Enter name");
    return false;
  }
}

(function() {
  let sum=0;
function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];


    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}


function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0

  // for each question...

myQuestions.forEach((currentQuestion, questionNumber) => {
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  // if answer is correct
  if (userAnswer === currentQuestion.c1) {
    // add to the number of correct answers
    sum=sum+1;
    answerContainers[questionNumber].style.color = "green";
  }
  else
    answerContainers[questionNumber].style.color = "red";
});

// show number of correct answers out of total
resultsContainer.innerHTML = `Result : ${sum} out of ${myQuestions.length}`;
if(sum==0)
  alert("Why did you even try?");
else if(sum==1)
  alert("Better luck next time");
else if(sum==2)
  alert("You can do better");
else if(sum==3)
  alert("so close");
else if(sum==4)
  alert("Why did you miss one?");
else if(sum==5)
  alert("You are truly MARVEL-ous");
}



const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "Q1) Avengers was initiated because of?",
    answers: {
      a: "Captain America",
      b: "Captain Marvel", 
      c: "Iron Man"
    },
    c1: "b",
    c2: "a",
    c3: "c"
  },
  {
    question: "Q2) In Infinity War, Tony named his child after?",
    answers: {
      a: "Pepper's uncle",
      b: "Tony's uncle",
      c: "Morgan Freeman"
    },
    c1: "a",
    c2: "b",
    c3: "c"
  },
  {
    question: "Q3) What is the name of the Guardians ship?",
    answers: {
      a: "Milano",
      b: "Q-ship",
      c: "Benatar"
    },
    c1: "c",
    c2: "a",
    c3: "b"
  },
  {
    question: "Q4) Hawkeye first appeared in The Avengers.",
    answers: {
      a: "True",
      b: "False"
    },
    c1: "b",
    c2: "a"
  },
  {
    question: "Q5) Infinity Gauntlet first appeared in?",
    answers: {
      a: "Thor", 
      b: "Age of Ultron",
      c: "Thor Ragnarok"
    },
    c1: "a",
    c2: "b",
    c3: "c"
  }
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();



function startTimer(duration, display) {
  var timer = duration, minutes, seconds,cnt=0;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      --timer;
      if(timer==-1 && cnt==0)
      {
        alert("Time's up");
        cnt++;
      }
      if (timer < 0) {
          timer = 0;
      }      
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 30,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

