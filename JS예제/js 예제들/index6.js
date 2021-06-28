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
    
    clockOfFull.innerText = `${year}년 ${month}월 ${days}일 ${hours}시 ${minuts}분 ${seconds}초`;
    
}
getClockOfFull();
setInterval(getClockOfFull, 1000);




// var currentAnswer = 1;  // 현재 문제의 번호를 기록하는 변수


// var midTop;
// var midMid;
// var answer;
// var btnAnswer;
// var playerAnswer;   // 플레이어가 입력한 정답 문자열
// var m_t_01 = "빈 칸에 들어갈 내용은?";
// var m_t_02 = "소프트웨어 아키텍처의 활용에 대한 내용 중 틀린 것은?";

// var m_c_01 = "( ______ )는 개발하고자 하는 소프트웨어의 사전 작업을 통하여 소프트웨어 개발을 쉽게 하도록 기본 틀을 만드는 것으로, 복잡한 개발을 체계적으로 접근하기 위 한 밑그림이라 할 수 있다. 학술적인 정의로는 권도형(2004)에 따르면 소프트웨어를 구 성하는 컴포넌트들의 상호 작용 및 관계, 각각의 특성을 기반으로 컴포넌트들이 상호 유기적으로 결합하는 소프트웨어의 진화를 위한 여러 가지 원칙들의 집합이라고 할 수 있다.";

// var m_c_02 = "1. 비교적 간단한 소프트웨어를 개발할 때에는 완성해야 하는 목적과 기능을 중점으로 설계하여도 품질에는 큰 문제가 없다. <br> "
//     + "2. 소프트웨어의 기능이 복잡, 다양해짐에 따라, 그 기능을 목적에 알맞게 정의하여 분류하여야 하는 명제를 안게 되었다. <br>"
//     + "3. 분류된 기능이 세분화되면 상호 간에 유기적으로 통합하는 과정이 매우 쉬워진다. <br>"
//     + "4. 완전한 소프트웨어를 개발하기 위하여 각각의 기능적 특성을 사전에 파악하여 요구 분석 단계부터 설계 단계까지 분류된 기능과 함께 종합적인 시각으로 판단하는 것이 매우 필요해진다. <br>";

// var m_a_01 = "고양이";    
// var m_a_02 = "개"; 



// function btnClick () {  
//     switch(currentAnswer){
//         case 1:
//             //todo 플레이어 답과 컴퓨터의 답을 비교하기. playerAnswer , m_a_01
//             playerAnswer = answer.value;
//             if (playerAnswer == m_a_01) {
//                 alert("정답");
//             } else {
//                 alert("오답");
//             }  
//             // 두번째 문제 내기            
//             midTop.innerHTML = m_t_02;
//             midMid.innerHTML = m_c_02;                    
//             break;
//         case 2:
//             // 두번째 문제의 처리
//             // 2번문제에 대한 플레이어의 답과 컴퓨터의 답을 비교
//             playerAnswer = answer.value;    //2번째 플레이어가 입력한 답을 인풋박스로부터 가져오기
//             if(playerAnswer == m_a_02) {
//                 alert("정답");
//             } else {
//                 alert("오답");
//             }
//             break;
//     }
//     currentAnswer = currentAnswer + 1;    
// }


//     midTop = document.getElementById("mid_top");        // 문제를 표시할 영역
//     midMid = document.getElementById("mid_mid");        // 문제의 보기 등을 표시할 영역
//     answer = document.getElementById("answer");             // 학생의 답을 기록하는 input
//     btnAnswer = document.getElementById("btn_answer");  // 입력 후 확인 버튼    
//     btnAnswer.onclick = btnClick;
//     midTop.innerHTML = m_t_01;
//     midMid.innerHTML = m_c_01;    

let allQuestion = [
    {
        quizTitle: "빈 칸에 들어갈 내용은?",
        quizContent: "( ______ ) 는 개발하고자 하는 소프트웨어의 사전 작업을 통하여 소프트웨어 개발을 쉽게 하도록 기본 틀을 만드는 것으로, 복잡한 개발을 체계적으로 접근하기 위 한 밑그림이라 할 수 있다. 학술적인 정의로는 권도형(2004)에 따르면 소프트웨어를 구 성하는 컴포넌트들의 상호 작용 및 관계, 각각의 특성을 기반으로 컴포넌트들이 상호 유기적으로 결합하는 소프트웨어의 진화를 위한 여러 가지 원칙들의 집합이라고 할 수 있다.",
        quizAnswer: "고양이",
    },
    {
        quizTitle: "소프트웨어 아키텍처의 활용에 대한 내용 중 틀린 것은? ",
        quizContent: "1. 비교적 간단한 소프트웨어를 개발할 때에는 완성해야 하는 목적과 기능을 중점으로 설계하여도 품질에는 큰 문제가 없다 <br><br>"
        +  "2. 소프트웨어의 기능이 복잡, 다양해짐에 따라, 그 기능을 목적에 알맞게 정의하여 분류하여야 하는 명제를 안게 되었다.<br><br>" 
        +  "3. 분류된 기능이 세분화되면 상호 간에 유기적으로 통합하는 과정이 매우 쉬워진다.<br><br>" 
        +  "4. 완전한 소프트웨어를 개발하기 위하여 각각의 기능적 특성을 사전에 파악하여 요구 분석 단계부터 설계 단계까지 분류된 기능과 함께 종합적인 시각으로 판단하는 것이 매우 필요해진다.<br>",
        quizAnswer: "4",
    },
    {
        quizTitle: "문제 3번",
        quizContent: "문제 3번 내용",
        quizAnswer: "2",
    },
];

// let currentAnswer = 1;
let randomQuestions = allQuestion[Math.floor(Math.random() * allQuestion.length )];
let midTop;
let midMid;
let btnAnswer;
let answer;
let playerAnswer;   // 유저가 입력한 정답 문자열
midTop = document.getElementById("mid_top");
midMid = document.getElementById("mid_mid");
answer = document.getElementById("answer");
btnAnswer = document.getElementById("btn_answer");
btnAnswer.onclick = btnClick;
midTop.innerText = randomQuestions.quizTitle;
midMid.innerText = randomQuestions.quizContent;

console.log(randomQuestions);

//문제 은행 ( 랜덤 배열로 만들기)


function btnClick () {  // 문제 굴러가는 로직

            playerAnswer = answer.value;
            //alert(answer.value);
            if(playerAnswer == randomQuestions.quizAnswer){
                alert("정답");
            } else {
                alert("오답")   
            } 
            
            // 두번째 문제 내기 로직
            midTop.innerText = randomQuestions.quizTitle;
            midMid.innerText = randomQuestions.quizContent;

}



