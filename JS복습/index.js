const reset = document.getElementById("reload");

function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}
function resetPage(){
    location.reload();
}
reset.addEventListener("click", resetPage);
br();

// 1번
// const random = Math.floor(Math.random() * 6) + 1;
// h1.innerText = `주사위를 굴려 (${random})이 나왔습니다.`;

// 2번
// const random1 = Math.floor(Math.random() * 6) + 1;
// document.write(`주사위를 굴려 (${random1})이 나왔습니다.`); 
// br();
// const random2 = Math.floor(Math.random() * 4) + 1;
// document.write(`주사위를 굴려 (${random2})이 나왔습니다.`);
// br();
// const random3 = Math.floor(Math.random() * 10) + 1;
// document.write(`주사위를 굴려 (${random3})이 나왔습니다.`);
// br();
// const random4 = Math.floor(Math.random() * 100) + 1;
// document.write(`주사위를 굴려 (${random4})이 나왔습니다.`);
// br();

// 3번
// document.write(`주사위를 굴려 (${Math.floor(Math.random() * 6) + 1})이 나왔습니다.`);

// 4번
// const random = Math.floor(Math.random() * 6) + 1;
// if(random == 6){
//     document.write("당첨되셨습니다.");
// }

// 5번
// const random = Math.floor(Math.random() * 6) + 1;
// if(random == 1 || random == 2 || random == 3){
//     document.write("꽝입니다.");
// } else {
//     document.write("당첨되셨습니다.");
// }

// 6번
// const random = Math.floor(Math.random() * 6) + 1;
// if(random == 1 || random == 2 || random == 3){
//     document.write("꽝입니다.");
// } else if(random == 4 || random == 5) {
//     document.write("2등 당첨되셨습니다.");
// } else {
//     document.write("1등 당첨되셨습니다.");
// }

// 7번
// const random = Math.floor(Math.random() * 6) + 1;

// switch (random) {
//     case 1:
//         document.write("꽝");
//         break;
//     case 2:
//         document.write("5등 당첨");
//         break;
//     case 3:
//         document.write("4등 당첨");
//         break;
//     case 4:
//         document.write("3등 당첨");
//         break;
//     case 5:
//         document.write("2등 당첨");
//         break;
//     case 6:
//         document.write("1등 당첨");
//         break;

//     default:
//         break;
// }

// 8번
// const random = Math.floor(Math.random() * 6) + 1;
// if(random == 1){
//     document.write("꽝입니다.");
// } else {
//     document.write(random + "등입니다.");
// }

// 9번
// const random = Math.floor(Math.random() * 6) + 1;

// switch (random) {
//     case 1:
//         document.write("꽝");
//         break;
//     case 2:
//         document.write("5등 당첨");
//         break;
//     case 3:
//         document.write("4등 당첨");
//         break;
//     case 4:
//         document.write("3등 당첨");
//         break;
//     case 5:
//         document.write("2등 당첨");
//         break;
//     case 6:
//         document.write("1등 당첨");
//         break;

//     default:
//         break;
// }

// 10번
// const random = Math.floor(Math.random() * 6) + 1;

// switch (random) {
//     case 1:
//         document.write("<img src='img/1.jpg'>");
//         break;
//     case 2:
//         document.write("<img src='img/2.jpg'>");
//         break;
//     case 3:
//         document.write("<img src='img/3.jpg'>");
//         break;
//     case 4:
//         document.write("<img src='img/4.jpg'>");
//         break;
//     case 5:
//         document.write("<img src='img/5.jpg'>");
//         break;
//     case 6:
//         document.write("<img src='img/6.jpg'>");
//         break;

//     default:
//         break;
// }

// 11번
// const num = prompt("숫자입력 (1 ~ 6)");
// const random = Math.floor(Math.random() * 6) + 1;
// console.log(num);

// if(random == num){
//     document.write("당첨");
// } else {
//     document.write("꽝");
// }

// 12번
// const num = prompt("숫자입력 (1 ~ 6)");
// const random = Math.floor(Math.random() * 6) + 1;
// console.log(num);

// switch (random) {
//     case 1:
//         document.write("<img src='img/1.jpg'>");
//         break;
//     case 2:
//         document.write("<img src='img/2.jpg'>");
//         break;
//     case 3:
//         document.write("<img src='img/3.jpg'>");
//         break;
//     case 4:
//         document.write("<img src='img/4.jpg'>");
//         break;
//     case 5:
//         document.write("<img src='img/5.jpg'>");
//         break;
//     case 6:
//         document.write("<img src='img/6.jpg'>");
//         break;

//     default:
//         break;
// }

// if(random != num){
//     document.write("꽝");
// } else {
//     document.write("<img src='" + random + ".jpg'>");
// }

// 13번
// function dice(){
//     const num = prompt("숫자입력 (1 ~ 6)");
//     const random = Math.floor(Math.random() * 6) + 1;
//     console.log(num);

//     switch (random) {
//         case 1:
//             document.write("<img src='img/1.jpg'>");
//             break;
//         case 2:
//             document.write("<img src='img/2.jpg'>");
//             break;
//         case 3:
//             document.write("<img src='img/3.jpg'>");
//             break;
//         case 4:
//             document.write("<img src='img/4.jpg'>");
//             break;
//         case 5:
//             document.write("<img src='img/5.jpg'>");
//             break;
//         case 6:
//             document.write("<img src='img/6.jpg'>");
//             break;

//         default:
//             break;
//     }

//     if(random != num){
//         document.write("꽝");
//     } else {
//         document.write("당첨 <img src='" + random + ".jpg'>");
//     }
// }
// dice();