
(function() {
    let sum1=0;
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
  
    f=1;
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
  
    // keep track of user's answers
    let numCorrect = 0
  
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if (userAnswer === currentQuestion.c1) {
        // add to the number of correct answers
        sum1=sum1+1;
        answerContainers[questionNumber].style.color = "green";
      }
      else if(userAnswer === currentQuestion.c2)
      {
          sum1=sum1+2;
          answerContainers[questionNumber].style.color = "green";
      }
      else if(userAnswer === currentQuestion.c3)
      {
          sum1=sum1+3;
          answerContainers[questionNumber].style.color = "green";
      }
      else if(userAnswer === currentQuestion.c4)
      {
          sum1=sum1+4;
          answerContainers[questionNumber].style.color = "green";
      }
      else if(userAnswer === currentQuestion.c5)
      {
          sum1=sum1+5;
          answerContainers[questionNumber].style.color = "green";
      }
   
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML =alert( `Result : ${sum1} out of ${5*myQuestions.length}`);
    
  }
  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "<br><h3>How tired do you feel waking up each morning ?</h3> ",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "<br><h3>On how many days out of 5 , would you check your phone , right after getting up?</h3>",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "<br><h3>How much are you unwilling to go to class ?</h3>",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
        question: "<br><h3>How often do you get irritated by small mishaps ?</h3>",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
          e: "5"
        },
        c1: "a",
        c2: "b",
        c3: "c",
        c4: "d",
        c5: "e"
      },
      {
        question: "<br><h3>How often do you wish to run away ?</h3>",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
          e: "5"
        },
        c1: "a",
        c2: "b",
        c3: "c",
        c4: "d",
        c5: "e"
      },
      
  ];
  
  // display quiz right away
  buildQuiz();
  
  // on submit, show results
  submitButton.addEventListener("click", showResults);
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds,cnt=0;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
        --timer;
        if(timer==-1 && cnt==0 && f==0)
        {
          showResults();
          cnt++;
          f=1;
        }
        if (timer < 0 || f==1) {
            timer = 0;
        }      
    }, 1000);
  }
  
  window.onload = function () {
    var fiveMinutes = 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };
  })();
  