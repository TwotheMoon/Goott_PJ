// const clock = document.querySelector("#clock");

// function getClock(){
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minuts = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0"); 
    
//     clock.innerText = `${hours}:${minuts}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);

// function br(){
//     document.write("<br>");
// }

// let playerDice;

// playerDice = prompt("1~6 사이 숫자 입력");

// document.write(playerDice);

// let computerDice = Math.floor(Math.random() * 6 + 1);

// document.write(computerDice);

// switch(parseInt(playerDice)){
//     case 1 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//     case 2 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//     case 3 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//     case 4 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//     case 5 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//     case 6 :
//         document.write("<img src='" + computerDice + ".jpg'>");
//         break;
//    }

// if(playerDice == computerDice) {
//     document.write("당첨");
// } else {
//     document.write("꽝");
// }

// 배열 : item의 나열
// const n1 = 1;
// const n2 = 2;
// const n3 = 3;
// // ....
// const n100 = 100;
// // ....
// const n1000 = 1000;

// const m = [1, 2, 3, 4, 5]

// document.write(m[0]); // == 1

// document.write(m[4]); // == 5


// let animals = ["개", "고양이", "토끼", "사자", "라쿤"];

// document.write(animals[0] + " <= 첫번째 배열"); 
// br();
// document.write(animals[1] + " <= 두번째 배열"); 
// br();
// document.write(animals[2] + " <= 세번째 배열"); 
// br();
// document.write(animals[3] + " <= 네번째 배열"); 
// br();
// document.write(animals[4] + " <= 다섯번째 배열"); 

// Date() 함수



// document.write("현재 시간은 : " + now.toLocaleTimeString());
// br();br();

// document.write("현재 시간은 :" + now.toLocaleString());
// br();br();

// document.write("현재 시간은 :" + now.getDate());
// br();br();

// const year = now.getFullYear();
// document.write(year);
// br();br();

// const month = now.getMonth();
// document.write(month);
// br();br();

// const day = now.getDay();
// document.write(day);
// br();br();

const clockOfFull = document.querySelector("#clockOfFull");

function getClockOfFull(){
    const date = new Date();
    const year = String(date.getFullYear() );
    const month = String(date.getMonth() + 1 ).padStart(2, "0");
    const days = String(date.getDate() ).padStart(2, "0");
    const hours = String(date.getHours() ).padStart(2, "0");
    const minuts = String(date.getMinutes() ).padStart(2, "0");
    const seconds = String(date.getSeconds() ).padStart(2, "0");
    const milliSeconds = String(date.getMilliseconds() );

    clockOfFull.innerText = `${year}년 ${month}월 ${days}일 ${hours}시 ${minuts}분 ${seconds}초 ${milliSeconds}밀리초`;
    
}

getClockOfFull();
setInterval(getClockOfFull, 10);