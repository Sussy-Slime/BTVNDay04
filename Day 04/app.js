var sec1 = 0;
var sec2 = 0;
var sec3 = 0;
var sec4 = 0;
var sec5 = 0;
var clock1;
var clock2;
var clock3;
var clock4;
var clock5;

function start1(){
    sec1++
    document.getElementById("timer1").innerHTML = sec1
}
function startBut1(){
    sec1 = 0;
    clock1 = setInterval(("start1()"), 1000);
}
function pauseBut1(){
    sec1 = 0;
    clearInterval(clock1);
}
function stopBut1(){
    sec1 = 0;
    document.getElementById("timer1").innerHTML = sec2
    clearInterval(clock1);
}

function start2(){
    sec2++
    document.getElementById("timer2").innerHTML = sec2
}
function startBut2(){
    sec2 = 0;
    clock2 = setInterval(("start2()"), 1000);
}
function pauseBut2(){
    sec2 = 0;
    clearInterval(clock2);
}
function stopBut2(){
    sec2 = 0;
    document.getElementById("timer2").innerHTML = sec2
    clearInterval(clock2);
}

function start3(){
    sec3++
    document.getElementById("timer3").innerHTML = sec3
}
function startBut3(){
    sec3 = 0;
    clock3 = setInterval(("start3()"), 1000);
}
function pauseBut3(){
    sec3 = 0;
    clearInterval(clock3);
}
function stopBut3(){
    sec3 = 0;
    document.getElementById("timer3").innerHTML = sec3
    clearInterval(clock3);
}

function start4(){
    sec4++
    document.getElementById("timer4").innerHTML = sec4
}
function startBut4(){
    sec4 = 0;
    clock4 = setInterval(("start4()"), 1000);
}
function pauseBut4(){
    sec4 = 0;
    clearInterval(clock4);
}
function stopBut4(){
    sec4 = 0;
    document.getElementById("timer4").innerHTML = sec4
    clearInterval(clock4);
}

function start5(){
    sec5++
    document.getElementById("timer5").innerHTML = sec5
}
function startBut5(){
    sec5 = 0;
    clock5 = setInterval(("start5()"), 1000);
}
function pauseBut5(){
    sec5 = 0;
    clearInterval(clock5);
}
function stopBut5(){
    sec5 = 0;
    document.getElementById("timer5").innerHTML = sec5
    clearInterval(clock5);
}

function stopAll(){
    sec1 = 0;
    sec2 = 0;
    sec3 = 0;
    sec4 = 0;
    sec5 = 0;
    document.getElementById("timer1").innerHTML = sec1
    document.getElementById("timer2").innerHTML = sec2
    document.getElementById("timer3").innerHTML = sec3
    document.getElementById("timer4").innerHTML = sec4
    document.getElementById("timer5").innerHTML = sec5
    clearInterval(clock1);
    clearInterval(clock2);
    clearInterval(clock3);
    clearInterval(clock4);
    clearInterval(clock5);
}
function startAll() {
    sec1 = 0;
    sec2 = 0;
    sec3 = 0;
    sec4 = 0;
    sec5 = 0;
    clock1 = setInterval(("start1()"), 1000);
    clock2 = setInterval(("start2()"), 1000);
    clock3 = setInterval(("start3()"), 1000);
    clock4 = setInterval(("start4()"), 1000);
    clock5 = setInterval(("start5()"), 1000);
}