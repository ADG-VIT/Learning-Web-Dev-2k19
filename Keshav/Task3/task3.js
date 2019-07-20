function enteredname() {
    var x = document.forms["username"]["name12"].value;
    if (x == "") {
        alert("Enter name");
        return false;
    }
};

var name = document.getElementById('name1'); 
var currentQuestion=0;
var score=0;
var totalquestions=0;
var container = document.getElementById('quizcontainer');
var question1 = document.getElementById('ques');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextbtn = document.getElementById('nextbtn');
var result = document.getElementById('result');
var timer = document.getElementById('timer');

function loadquestion(questionindex) {
    var q = questions[questionindex];
    question1.textContent = (questionindex + 1) + '. '+ q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadnextQuestion() {
    var selectedopt = document.querySelector('input[type=radio]:checked');
    if(!selectedopt){
        alert('Please select your answer!!');
        return;
    }
    var answer = selectedopt.value;
    if(questions[currentQuestion].answer == answer){
        score +=2;
    }
    selectedopt.checked = false;
    currentQuestion++;
    if(currentQuestion == totalquestions - 1){
        nextbtn.textContent = 'Finish';
    }
    if(currentQuestion == totalquestions){
        quizcontainer.style.display = 'none';
        timer.style.display = 'none';
        result.style.display ='';
        result.textContent = 'Your Score: '+ score;
        return;
    }
    loadquestion(currentQuestion);
};

var questions = [{
    "question": "An array of three pointers to chars",
    "option1": "char *ptr[3]();",
    "option2": "char *ptr[3];",
    "option3": "char (*ptr[3])();",
    "option4": "char **ptr[3];",
    "answer": "2"
},{
    "question": "What do the following declaration signify? int *ptr[30];",
    "option1": "ptr is a pointer to an array of 30 integer pointers.",
    "option2": "ptr is a array of 30 pointers to integers.",
    "option3": "ptr is a array of 30 integer pointers.",
    "option4": "ptr is a array 30 pointers.",
    "answer": "2"
},{
    "question": "What do the following declaration signify? char **argv;",
    "option1": "argv is a pointer to pointer.",
    "option2": "argv is a pointer to a char pointer.",
    "option3": "argv is a function pointer.",
    "option4": "argv is a member of function pointer.",
    "answer": "2"
},{
    "question": "What do the following declaration signify? char *scr;",
    "option1": "scr is a pointer to pointer variable.",
    "option2": "scr is a function pointer.",
    "option3": "scr is a pointer to char.",
    "option4": "scr is a member of function pointer.",
    "answer": "3"
},{
    "question": "A pointer to a function which receives nothing and returns nothing",
    "option1": "void *(ptr)*int;",
    "option2": "void *(*ptr)()",
    "option3": "void *(*ptr)(*)",
    "option4": "void (*ptr)()",
    "answer": "4"
}
];
loadquestion(currentQuestion);
totalquestions=questions.length;
var mins = 1;
var secs = mins * 60; 
function countdown() { 
    setTimeout('Decrement()', 60); 
} 
function Decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds"); 
  
        if (seconds < 59) { 
            seconds.value = secs; 
        } 
        else { 
            minutes.value = getminutes(); 
            seconds.value = getseconds(); 
        } 
        if (mins < 0) { 
            alert('Time up'); 
            quizcontainer.style.display = 'none';
            timer.style.display = 'none';
            result.style.display ='';
            result.textContent = 'Your Score: '+ score;
            return; 
        } 
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
            } 
    } 
} 
  
function getminutes() { 
    mins = Math.floor(secs / 60); 
    return mins; 
} 
  
function getseconds() { 
    return secs - Math.round(mins * 60); 
} 