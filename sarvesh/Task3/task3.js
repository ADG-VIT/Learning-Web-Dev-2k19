
    let pos = 0,test,test_status,question,choice,choices,ch1,ch2,ch3,ch4,score=0;
    var questions = [
        ["A ___ is the only mammal that can fly","bat","eagle","kiwi","sparrow","1"],
        ["A ______ can see directly behind his back without moving hi head","lion","rabbit","human","Penguin","2"],
        ["A ______ has 3 hearts","cat","Octopus","Starfish","Elephant","2"],
        ["A ______ is the smallest bird","Vulture","Humming bird","sparrow","parrot","2"],
        ["A group of Flamingoes is called _________","pride","herd","pack","flambouyance","4"]
    ];
    
    function restart(){
        pos = 0;
        score = 0;
        time();
        process();
        //time();
       }
function process(){
    test = document.getElementById("test");
    if(pos >= 5){
        document.getElementById('tell').innerHTML = "<h1>Quiz Results</h1>";
        test.innerHTML = "<h2>You got "+score+" of 5 questions correct.</h2>";
        document.getElementById("teststatus").innerHTML = "Test Completed";
        test.innerHTML += "<button onclick='restart();'>Retake Quiz</button>";
        /*if(score === 5){
            document.getElementById("waqt").innerHTML = "<h4>You did great</h4>";
        } else{document.getElementById("waqt").innerHTML = "<h4>Better luck next time</h4>";}*/
    }
      
    if(pos+1 < 6){
    document.getElementById('tell').innerHTML = "<h1>Welcome to quiz</h1>";
    document.getElementById("teststatus").innerHTML = "Question "+ (pos+1) +" of 5";
    question = questions[pos][0];
    ch1 = questions[pos][1];
    ch2 = questions[pos][2];
    ch3 = questions[pos][3];
    ch4 = questions[pos][4];
    test.innerHTML = "<h3>"+ question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='1'>"+ch1+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='2'>"+ch2+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='3'>"+ch3+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='4'>"+ch4+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    }
    
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0;i<4;i++){
        if(choices[i].checked){
            choice = choices[i].value;
            
        }
    }
    if(choice === questions[pos][5]){
        score++;
    }
    pos++;
    process();
}
window.addEventListener("load",process,false);


//window.addEventListener("load",Quiz);
function time()
{
    document.getElementById('timer').innerHTML = 05 + ":" + 00;
startTimer();

  function startTimer() {
  //var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = document.getElementById('timer').innerHTML.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  document.getElementById('timer').innerHTML = m + ":" + s;
    let myVar = setTimeout(startTimer, 1000);

  if(m<0){
    //alert('timer completed');
    clearTimeout(myVar);
    document.getElementById('tell').innerHTML = "<h1>Quiz Results</h1>"
    test.innerHTML = "<h2>You got "+score+" of 5 questions correct.</h2>"
    document.getElementById("teststatus").innerHTML = "Test Completed";
    
       test.innerHTML += "<button onclick='restart();'>Retake Quiz</button>";
    
    }
    
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}
window.addEventListener("load",time);



 
