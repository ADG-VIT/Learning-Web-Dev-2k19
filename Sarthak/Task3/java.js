var x=0;
var flag=0;
var sec=30;
function score() {
    x=0;
    if(document.getElementById('2').checked) {
        x=x+1
    }
    if(document.getElementById('5').checked) {
        x=x+1;
    }
    if(document.getElementById('12').checked) {
        x=x+1;
    }
    if(document.getElementById('15').checked) {
        x=x+1;
    }
    if(document.getElementById('17').checked) {
        x=x+1;
    }
}
/*Timer from geeksforgeeks.com*/
function timer() {
    if(sec>9) {
        document.getElementById('timer').innerHTML = "00:" + sec;
    }
    else if(sec==0) {
        document.getElementById('timer').innerHTML = "00:00";
        alert('Time is up. You will now be directed to the results screen');
        finish2();
    }
    else {
        document.getElementById('timer').innerHTML = "00:0" + sec;
    }
    sec=sec-1;
    setTimeout('timer()',1000);
}

function startup() {
    sessionStorage.setItem("score",0);
    sessionStorage.setItem("name",document.getElementById('name').value);
}

function display() {
    document.getElementById('h1').innerHTML = "Hello " + sessionStorage.getItem("name") + "!<br>Your score is " + sessionStorage.getItem('score') + "/5";
}

function quest2() {
    if(document.getElementById('1').checked||document.getElementById('2').checked||document.getElementById('3').checked||document.getElementById('4').checked) {
        flag=1;
    }
    if(flag==0) {
        alert('No option has been selected. Are you sure you want to continue? You cannot attempt this question after skipping it')
        flag=1;
    }
    else {
        document.getElementById('first').style.display = 'none';
        document.getElementById('second').style.display = 'block';
        flag=0;
    }
}

function quest3() {
    if(document.getElementById('5').checked||document.getElementById('6').checked||document.getElementById('7').checked||document.getElementById('8').checked) {
        flag=1;
    }
    if(flag==0) {
        alert('No option has been selected. Are you sure you want to continue? You cannot attempt this question after skipping it')
        flag=1;
    }
    else {
        document.getElementById('second').style.display = 'none';
        document.getElementById('third').style.display = 'block';
        flag=0;
    }
}

function quest4() {
    if(document.getElementById('9').checked||document.getElementById('10').checked||document.getElementById('11').checked||document.getElementById('12').checked) {
        flag=1;
    }
    if(flag==0) {
        alert('No option has been selected. Are you sure you want to continue? You cannot attempt this question after skipping it')
        flag=1;
    }
    else {
        document.getElementById('third').style.display = 'none';
        document.getElementById('fourth').style.display = 'block';
        flag=0;
    }
}

function quest5() {
    if(document.getElementById('13').checked||document.getElementById('14').checked||document.getElementById('15').checked||document.getElementById('16').checked) {
        flag=1;
    }
    if(flag==0) {
        alert('No option has been selected. Are you sure you want to continue? You cannot attempt this question after skipping it')
        flag=1; 
    }
    else {
        document.getElementById('fourth').style.display = 'none';
        document.getElementById('fifth').style.display = 'block';
        flag=0;
    }
}

function finish() {
    if(document.getElementById('17').checked||document.getElementById('18').checked||document.getElementById('19').checked||document.getElementById('20').checked) {
        flag=1;
    }
    if(flag==0) {
        alert('No option has been selected. Are you sure you want to continue? You cannot attempt this question after skipping it')
        flag=1; 
    }
    sessionStorage.setItem("score",x);
    window.open("result.html","_self");
}

function finish2() {
    sessionStorage.setItem("score",x);
    window.open("result.html","_self");
}