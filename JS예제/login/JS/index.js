function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}


function Member(id, pw, name, email){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.email = email;
}

const moon = new Member("Moon", "1", "이더문", "dlaguddh1@gmail.com");
const kan = new Member("Kan", "KanisGood", "칸", "ArtistKan@hanmail.net");
const hoan = new Member("Hoan", "hoan123", "호안", "DancerHoan@naver.com");
const members = [moon, kan, hoan];

const HIDDEN_CLASSNAME = "hidden";

const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const signUpBtn = document.getElementById("signUpBtn");
const loginBox = document.querySelector(".loginBox");
const userInfo = document.getElementById("userInfo");
let isFindId ;
let isFindPw ;

const clock = document.getElementById("clock");


function clickOnLoginBtn(){
    
    const logId = localStorage.getItem("userid");
    const logPw = localStorage.getItem("userpw");
    const logName = localStorage.getItem("username");
    const logGender = localStorage.getItem("usergender");
    const logBirth = localStorage.getItem("userbirth");
    const logPhone = localStorage.getItem("userphone");
    const logEmail = localStorage.getItem("useremail");
    const userId = idInput.value; 
    const userPw = pwInput.value; 
    isFindId = false;
    isFindPw = false;
    const parsedLogId = JSON.parse(logId);  // JSON => String 형변환
    const parsedLogPw = JSON.parse(logPw);
    const parsedLogName = JSON.parse(logName);
    const parsedLogGender = JSON.parse(logGender);
    const parsedLogBirth = JSON.parse(logBirth);
    const parsedLogPhone = JSON.parse(logPhone);
    const parsedLogEmail = JSON.parse(logEmail);
        
     if(userId === parsedLogId){
        isFindId = true;
    }
    
    
    if(isFindId == true){
        let userLoginId;
        let userLoginName;
        
        if(userPw == parsedLogPw){
            isFindPw = true;
                userLoginId = parsedLogId;
                userLoginName = parsedLogPw;
        }
        
            if(isFindPw == true){
                alert("로그인 성공");
                onLoginSubmit(parsedLogId, parsedLogName, parsedLogGender, parsedLogBirth, parsedLogPhone, parsedLogEmail );
                loginBox.classList.add(HIDDEN_CLASSNAME);
                loginBtn.classList.add(HIDDEN_CLASSNAME);
                signUpBtn.classList.add(HIDDEN_CLASSNAME);
                logoutBtn.classList.remove(HIDDEN_CLASSNAME);
            } else{
                alert("비밀번호를 틀렸어요.");
            }
    } else {
        alert("아이디가 존재하지 않아요.");
    }   // isFindId 끝

}   // clickOnLoginBtn 끝

function onLoginSubmit(parsedLogId , parsedLogName, parsedLogGender, parsedLogBirth, parsedLogPhone, parsedLogEmail ){
    userInfo.innerText = 
    `안녕하세요 ${parsedLogId}님
     성명: ${parsedLogName}
     성별: ${parsedLogGender}
     생년월일: ${parsedLogBirth}
     핸드폰번호: ${parsedLogPhone}
     이메일: ${parsedLogEmail} 
     `;

     userInfo.classList.remove(HIDDEN_CLASSNAME);
}

function clickOnLogoutBtn(){
    location.reload();
}

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart("2" , 0);
    const minuts = String(date.getMinutes()).padStart("2" , 0);
    const seconds = String(date.getSeconds()).padStart("2" , 0);

    clock.innerText = `${hours}:${minuts}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
    
loginBtn.addEventListener("click", clickOnLoginBtn);
loginBox.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", clickOnLogoutBtn);
