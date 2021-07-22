const title = document.querySelector(".mid_contents_title");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

const RSP = [
    {
        value : "rock",
    },
    {
        value : "scissors",
    },
    {
        value : "paper",
    },
];
const comAnswer = RSP[Math.floor(Math.random() * RSP.length )];


title.innerText = "가위바위보 게임 시작";

function userSelectRock(){
    if(comAnswer.value == "rock"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${rock.value}를 냈습니다 비겼습니다.`;
    } else if(comAnswer.value == "scissors"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${rock.value}를 냈습니다 이겼습니다.`;
    } else {
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${rock.value}를 냈습니다 졌습니다.`;
    }
}
function userSelectScissors(){
    if(comAnswer.value == "scissors"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${scissors.value}를 냈습니다 비겼습니다.`;
    } else if(comAnswer.value == "paper"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${scissors.value}를 냈습니다 이겼습니다.`;
    } else {
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${scissors.value}를 냈습니다 졌습니다.`;
    }
}
function userSelectPaper(){
    if(comAnswer.value == "paper"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${paper.value}를 냈습니다 비겼습니다.`;
    } else if(comAnswer.value == "rock"){
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${paper.value}를 냈습니다 이겼습니다.`;
    } else {
        title.innerText = `컴퓨터는 ${comAnswer.value}, 유저는 ${paper.value}를 냈습니다 졌습니다.`;
    }
}

rock.addEventListener("click", userSelectRock);
scissors.addEventListener("mouseover", userSelectScissors);
paper.addEventListener("mouseover", userSelectPaper);