function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}

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

// 15번
// for(let i = 0; i < 10; i++ ){
//     for(j = 0; j <= i; j++){
//         dw("별");
//     }
//     br();
// }

// 17번
// alert("고양이");

// 18번
// const cat = "고양이";
// alert(cat);

// 19번
// const catAge = 2;
// const catType = " 코리안 숏컷";
// const catName = " coco";
// const coco = catAge + catType + catName;
// alert(coco);

// 20번
// const catAge = 2;
// const catType = " 코리안 숏컷";
// const catName = " coco";
// const coco = catAge + catType + catName;
// const p = document.getElementById("cat");
// p.innerText = coco;

// 조건문1
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 0;
// if(a < b){
//     dw("조건이 맞아서 이걸 출력");
// }

// 조건문2
// const a = -1;
// const b = 2;

// if(a == b){
//     dw("조건이 맞아서 이걸 출력");
// } else {
//     dw("조건이 거짓");
// }

// 조건문3
// const a = -1;
// const b = 2;

// if(a != b){
//     dw("조건이 맞아서 이걸 출력");
// } else {
//     dw("조건이 거짓");
// }

// 조건문4
// const a = 10;
// const b = 3;

// dw("10 % 3 = " + a % b);

// 조건문5
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 0;
// if(a < b && e > f){
//     dw("조건이 맞아서 이걸 출력");
// }

// 조건문6
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 0;
// if(a < b || e > f){
//     dw("조건이 맞아서 이걸 출력");
// }

// 조건문7
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 0;
// if((a < b && b < c) || (e > f && d < e)){
//     dw("조건이 맞아서 이걸 출력");
// }

// 조건문8
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 0;
// if((a < b || b < c) && (e > f || d < e)){
//     dw("조건이 맞아서 이걸 출력");
// } else {
//     dw("조건이 거짓");
// }

// if종합
// const a = -1;
// const b = 2;
// const c = 3;
// const d = 100;
// const e = 1000;
// const f = 2;

// if(a < b){
//     if(b > a){
//         if(b == f){
//             if(a != b){
//                 if(a < b && b < c){
//                     if(a < b || b > c){
//                         if((a < b && b < c) || (e > f && d < e)){
//                             if((a < b || b < c) && (e > f || d < e)){
//                                 alert("성공");               
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// 21번
// const date = new Date();
// dw(`
//     ${date.getUTCFullYear()}년 
//     ${date.getMonth() + 1}월 
//     ${date.getDate()}일 
//     ${date.getHours()}시 
//     ${date.getMinutes()}분 
//     ${date.getSeconds()}초 
//     ${date.getMinutes()}밀리초 
//     `);

// 22번
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popup-btn");

function popUpBtnOnClick(){
    popup.style.display = "none";
}

popupBtn.addEventListener("click", popUpBtnOnClick);

// 23번
const img1 = document.querySelector("#img-box img:first-child");
const img2 = document.querySelector("#img-box img:nth-child(2)");
const img3 = document.querySelector("#img-box img:last-child");

function mouseOverOnImg1(){
    img1.src="img/4.jpg";
}
function mouseOverOnImg2(){
    img2.src="img/5.jpg";
}
function mouseOverOnImg3(){
    img3.src="img/6.jpg";
}

function mouseOutOnImg1(){
    img1.src="img/1.jpg";
}

function mouseOutOnImg2(){
    img2.src="img/2.jpg";
}

function mouseOutOnImg3(){
    img3.src="img/3.jpg";
}

img1.addEventListener("mouseover", mouseOverOnImg1);
img2.addEventListener("mouseover", mouseOverOnImg2);
img3.addEventListener("mouseover", mouseOverOnImg3);

img1.addEventListener("mouseout", mouseOutOnImg1);
img2.addEventListener("mouseout", mouseOutOnImg2);
img3.addEventListener("mouseout", mouseOutOnImg3);