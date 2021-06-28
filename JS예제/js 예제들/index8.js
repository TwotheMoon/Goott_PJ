const clock =document.querySelector(".clock");

// 현재 시간
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuts = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minuts}:${seconds}`;
}

getClock();     // 최초 시간 표시
setInterval(getClock, 1000);    // 시간 1초마다 갱신



const gameText = document.querySelector(".game_text");
const gameTextSecond = document.querySelector(".game_text_second");
gameText.innerText = "게임 시작!";
gameTextSecond.innerText = "가위 바위 보 중 하나를 선택 하세요.";

// 컴퓨터 답변 배열
const RSP = [
    {
        value : "가위",
    },
    {
        value : "바위",
    },
    {
        value : " 보 ",
    },
];

// 컴퓨터 답변 배열 랜덤 생성
const comAnswer = RSP[Math.floor(Math.random() * RSP.length )];
                                                
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");

// 유저 답변가위 일때
function scissorsOnClick (){
    if(comAnswer.value ==  scissors.value){
        gameText.innerText = "당신은 (가위), 컴퓨터는 (가위)를 결정!";
        gameTextSecond.innerText = "무승부!";
        gameTextSecond.style.color = "purple";
    } else if (comAnswer.value == "바위"){
        gameText.innerText = "당신은 (가위), 컴퓨터는 (바위)를 결정!";
        gameTextSecond.innerText = "패배...";
        gameTextSecond.style.color = "tomato";
    } else {
        gameText.innerText = "당신은 (가위), 컴퓨터는 (보)를 결정!";
        gameTextSecond.innerText = "승리!!";
        gameTextSecond.style.color = "wheat";
    }
}

// 유저 답변 바위 일때
function rockOnClick (){
    if(comAnswer.value == rock.value){
        gameText.innerText = "당신은 (바위), 컴퓨터는 (바위)를 결정!";
        gameTextSecond.innerText = "무승부!";
        gameTextSecond.style.color = "purple";
    } else if(comAnswer.value == "보"){
        gameText.innerText = "당신은 (바위), 컴퓨터는 (보)를 결정!";
        gameTextSecond.innerText = "패배...";
        gameTextSecond.style.color = "tomato";
    } else {
        gameText.innerText = "당신은 (바위), 컴퓨터는 (가위)를 결정!";
        gameTextSecond.innerText = "승리!!";
        gameTextSecond.style.color = "wheat";
    }
}

// 유저 답변 보 일때
function paperOnClick (){
    if(comAnswer.value == paper.value){
        gameText.innerText = "당신은 (보), 컴퓨터는 (보)를 결정!";
        gameTextSecond.innerText = "무승부!";
        gameTextSecond.style.color = "purple";
    } else if(comAnswer.value == "가위"){
        gameText.innerText = "당신은 (보), 컴퓨터는 (가위)를 결정!";
        gameTextSecond.innerText = "패배...";
        gameTextSecond.style.color = "tomato";
    } else {
        gameText.innerText = "당신은 (보), 컴퓨터는 (바위)를 결정!";
        gameTextSecond.innerText = "승리!!";
        gameTextSecond.style.color = "wheat";
    }
}
const resetBtn = document.querySelector(".reset_btn");
// 새로고침
function resetPage(){
    location.reload();
}

scissors.addEventListener("click" , scissorsOnClick, false );
rock.addEventListener("mouseover", rockOnClick, false);
paper.addEventListener("mouseover", paperOnClick, false);
resetBtn.addEventListener("click", resetPage, false);

