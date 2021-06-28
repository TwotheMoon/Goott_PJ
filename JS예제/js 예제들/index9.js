const clock = document.getElementById("clock");

function getclock (){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuts = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minuts}:${seconds}`;
}

getclock();
setInterval(getclock, 1000);


function br(){
    document.write("<br>");
}

// function run(){
//     alert("실행");
// }

// function calc(a, b){
//     return a + b;
// }

// function return100(){   
//     return 100;
// }

// function return50plus60(){   
//     return 50 + 60;
// }

// function returnNN(){   
//     let nn = 120;
//     return nn;
// }

// function returnCalculate(a, b){
//     let nnn = a + b
//     return nnn;
// }

// function displayString(s){
//     document.write(s);
//     br();
// }

// function displayNum(nnnn){
//     document.write(nnnn);
//     br();
// }

// function displayCalcNum(a, b){
//     let sum = a + b;
    
//     document.write(sum);
//     br();
// }

// run();

// // document.write(calc(1,2));

// let n2 = return100();
// document.write(n2);
// br();

// let n3 = return50plus60();
// document.write(n3);
// br();

// let n4 = returnNN();
// document.write(n4);
// br();

// let n5 = returnCalculate(100, 100);
// document.write(n5);
// br();

// displayString("고양이");

// displayNum(1000);

// displayCalcNum(1000, 2000);


// // 문제 30
// function return10000(){
//     let man = document.write(10000);
//     return man;
// }

// return10000();
// br();

//문제 31

// function return10002000(){
//     return 1000+2000;
// }

// document.write(return10002000());

// 문제 32
// function sumNum(){
//     let a = 10;
//     let b = 20;
//     let result = a + b;
//     return result;
// }

// document.write(sumNum());

// 문제 33

// const puppy = "라렌이";

// function callOfPuppy(puppySay){
//     document.write(puppySay);
// }

// callOfPuppy(puppy);


//  문제 34
// const nNum = 10;

// function callOfNum(nNumSay){
//     document.write(nNumSay);
// }

// callOfNum(nNum);

//문제 35

// function multiply(a, b, c){
//     let value = a * b * c;
//     return value;
// }

// document.write(multiply(1, 2, 3)); 


// 문제 36

let a = 6;
let b = 3; 

function run36add(a, b){
    return a + b;
}
function run36sub(a, b){
    return a - b;
}
function run36mul(a, b){
    return a * b;
}
function run36div(a, b){
    return a / b;
}


document.write("a, b 더하기 : " + run36add(a, b));
br();
document.write("a, b 빼기 : " + run36sub(a, b));
br();
document.write("a, b 곱하기 : " + run36mul(a, b));
br();
document.write("a, b 나누기 : " + run36div(a, b));



// 문제 37


