const clock = document.querySelector(".clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuts = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minuts}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

let dice1;
let dice2;
let dice3;

function run1(){
    dice1.src="4.jpg";
}
function runOut1(){
    dice1.src="1.jpg";
}
function run2(){
    dice2.src="5.jpg";
}
function runOut2(){
    dice2.src="2.jpg";
}
function run3(){
    dice3.src="6.jpg";
}
function runOut3(){
    dice3.src="3.jpg";
}

window.onload = function (){
    
    dice1 = document.getElementById("dice1");
    dice1.addEventListener("mouseover", run1, false);
    dice1.addEventListener("mouseout", runOut1 , false );
    
    dice2 = document.getElementById("dice2");
    dice2.addEventListener("mouseover", run2, false);
    dice2.addEventListener("mouseout", runOut2 , false );
    
    dice3 = document.getElementById("dice3");
    dice3.addEventListener("mouseover", run3, false);
    dice3.addEventListener("mouseout", runOut3 , false );
}