function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}

let lottoNum = [];
let bonusNum = [];
let luckyNum = [];
const userNum1 = document.getElementById("input1");
const userNum2 = document.getElementById("input2");
const userNum3 = document.getElementById("input3");
const userNum4 = document.getElementById("input4");
const userNum5 = document.getElementById("input5");
const userNum6 = document.getElementById("input6");
const midBtn = document.querySelector(".mid-btn");
const userAllNum =document.getElementById("userAllNum");

midBtn.style.width = "50px";

function handelMidBtnClick(){
    let value1 = JSON.parse(userNum1.value);    
    let value2 = JSON.parse(userNum2.value);
    let value3 = JSON.parse(userNum3.value);
    let value4 = JSON.parse(userNum4.value);
    let value5 = JSON.parse(userNum5.value);
    let value6 = JSON.parse(userNum6.value);

    luckyNum.push(value1);
    luckyNum.push(value2);
    luckyNum.push(value3);
    luckyNum.push(value4);
    luckyNum.push(value5);
    luckyNum.push(value6);
   // console.log(luckyNum);
   userAllNum.innerText = `${luckyNum}`;
   let prize = compareLottoNum(lottoNum, luckyNum);
    showYourPrize.innerText = prize;
}

midBtn.addEventListener("click" , handelMidBtnClick);


for (let i = 0; i < 7; i++) {
    
    let randomNum = Math.floor(Math.random() * 45) + 1;
    
    if (lottoNum.indexOf(randomNum) === -1) {
        lottoNum.push(randomNum);
    } else {
        i--
    }
}

const showLottoNum = document.getElementById("showLottoNum");
showLottoNum.innerText = `${lottoNum[0]}, ${lottoNum[1]}, ${lottoNum[2]}, ${lottoNum[3]}, ${lottoNum[4]}, ${lottoNum[5]} `;
const showBonusNum = document.getElementById("showBonusNum");
showBonusNum.innerText = lottoNum[6];
const showYourPrize = document.getElementById("showYourPrize");


function compareLottoNum(lottoNum, luckyNum){
    let overlapArray = [];
	for(let i =0; i<lottoNum.length; i++){
        // console.log(lottoNum);
        for(let j=0; j<luckyNum.length; j++){
            
            if(lottoNum[i] == luckyNum[j]){
                overlapArray.push(lottoNum[i]);
                console.log(lottoNum[i]);
            }
        }
    }  
    switch(overlapArray.length){
        case 1 : return showYourPrize.innerText = "6등";   
        case 2 : return showYourPrize.innerText = "5등"; 
        case 3 : return showYourPrize.innerText = "4등";    
        case 4 : return showYourPrize.innerText = "3등";    
        case 5 : return showYourPrize.innerText = "2등";    
        case 6 : return showYourPrize.innerText = "1등";    
        default :  return showYourPrize.innerText = "꽝"
    }
    
}


br();
