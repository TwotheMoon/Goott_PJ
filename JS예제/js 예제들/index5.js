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


// 팝업창 끄기 .hidden 크래스 이용 코드
// const popUpBtn = document.querySelector("#popupClose");
//const popup = document.querySelector(".popup");

// function closePopUp(){
//     popup.classList.add("hidden");  
// }

//popUpBtn.addEventListener("click", closePopUp);


//  팝업창 끄기 onclick 버전
function closePopup(){  // 버튼 클릭시 작동하는 함수
        // 자바스크립트가 팝업창 ( <div id="popup"> ) 을 찾고
        const popupWindow = document.querySelector(".popup");
        // 찾은 팝업 창을 닫기 ( 디스플레이 숨기기 )
        popupWindow.style.display = "none";
        
        // popupWindow.style.color = "red";
        // popupWindow.style.width = "600px";
        // popupWindow.style.height = "600px";
        // popupWindow.style.background = "black";
        // popupWindow.style.transitionProperty = "width" , "height";
        // popupWindow.style.transitionDuration = "1s";
    }



     