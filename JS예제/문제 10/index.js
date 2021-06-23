// 문제 11
// const diceValue = prompt("주사위 게임 같은 숫자 당첨");

//var randomDice6 = Math.floor(Math.random() * 6 + 1);
// document.write(randomDice6);
// switch (randomDice6) {
    //     case 1:
    //         document.write("<img src='dice6_1.jpg'>");
    //         break;
    //     case 2:
    //         document.write("<img src='dice6_2.jpg'>");
    //         break;
    //     case 3:
    //         document.write("<img src='dice6_3.jpg'>");
    //         break;
    //     case 4:
    //         document.write("<img src='dice6_4.jpg'>");
    //         break;
    //     case 5:
    //         document.write("<img src='dice6_5.jpg'>");
    //         break;
    //     case 6:
    //         document.write("<img src='dice6_6.jpg'>");
    //         break;
    // }
    
    //  if (randomDice6 == diceValue){
//     document.write("당첨");
//  } else {
//      document.write("꽝");
//  }


// 문 12

//document.write("<img src='" + randomDice6 + ".jpg'>");

//parseInt(diceValue);



//function all(){
//    const n = prompt("몇에 거시겠습니까? (1~6)");

//    document.write("당신은 " + n + "에 걸었습니다.");
//    br();br();br();

//    document.write("주사위를 굴렸습니다.");
//    br();br();br();

//    var randomDice6 = Math.floor(Math.random() * 6 + 1);
//    br();br();br();

//    document.write("<img src='" + randomDice6 + ".jpg'>");
//    br();br();br();

//   if(n == randomDice6){
//        document.write("당첨");
//    } else {
//        document.write("꽝");
//    };
    //}
    
    //all();


    // 14번 문제

function br() {
    document.write("<br>");
}
 
// function inputBet(){
//     const n = prompt("몇에 거시겠습니까? (1~6)");
//     displayPlayerBet(n);
//     runDice6(n);
//     displayResult(n);
// }

// function displayPlayerBet(n){
//     document.write("당신은 " + n + "에 걸었습니다.");
//     br();br();br();
//     return n;
// }

// function runDice6(n){
//     document.write("주사위를 굴렸습니다.");
//     br();br();br();
//     return n;
// }

// function displayResult(n){
//     var randomDice6 = Math.floor(Math.random() * 6 + 1);
   
//     document.write("<img src='" + randomDice6 + ".jpg'>");
//     br();br();br();

//    if(n == randomDice6){
//             document.write("당첨");
//         } else {
//                document.write("꽝");
//             };

//     }
// inputBet();

// function userPrompt(){
//     const n = prompt("1~6 사이 숫자 입력");
//     userWriteShow(parseInt(n));
// }

// function userWriteShow(n){
//     document.write("당신이 입력하신 숫자는 : " + n + " 입니다.");
//     diceLogic(n);
// }

// function diceLogic(n){
//     const random = Math.floor(Math.random() * 6 +1);
    
//     if(n == random){
//         document.write("<img src='" + random + ".jpg'>");
//         br();
//         document.write("당첨!!!!!");
//     } else {
//         document.write("<img src='" + random + ".jpg'>");
//         br();
//         document.write("꽝");
//     }
// }

// userPrompt();


// 15번 문제
// for(let i = 0; i < 10; i++){
//     let num = 0 + i;
//     document.write(num + "<br>");
// }

// br();

// 16번 문제

// ex1
// for(let i = 0; i <= 10; i++){
//     for(let j = 0; j < i; j++){
//         document.write("★");
//     }
//     document.write("<br>");
// }
// br();

// // ex2
// let s = "★";
// for(let i = 0; i < 10; i++){
//     document.write(s);

//     s = s + "★";
    
//     document.write("<br>"); 
// }
// br();

// ex3
// for(var i = 0 ; i < 10 ; i = i + 1){
//     // j for문
//     for(var j = 0 ; j <= i ; j = j + 1){
//         document.write("★");
//     }
//     document.write("<br>");
// }

// 배열
// let arr = ["개", "고양이", "토끼"];

// document.write(arr[0]);


let s = "별";
for(let i = 0; i < 10; i++){
    document.write(s);
    s = s + "별";
    br();
}
br();

for(let i = 0; i <10; i++){
   
    for(let j = 0; j <= i; j++){
        document.write("별");     
    }
    br();
}