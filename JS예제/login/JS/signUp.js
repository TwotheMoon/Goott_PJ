const signupForm = document.querySelector('#signup-form');

const signUpIdInput = document.querySelector(".signup-id-input");
const signUpPwInput = document.querySelector(".signup-pw-input");
const signUpPwConfirmInput = document.querySelector(".signup-pwConfirm-input");
const signupSubmitBtn = document.querySelector(".signup-submit");
const signupNameInput = document.querySelector(".signup-name-input");

const USERID_KEY = "userid";     
const USERPW_KEY = "userpw";    
const USERNAME_KEY = "username";    

function onSignupSubmit(event){     // 회원가입 submit 에 대한 함수
    const userid = signUpIdInput.value;
    const userpw = signUpPwInput.value;
    const username = signupNameInput.value;
    const userpwconf = signUpPwConfirmInput.value;

   if(confrimValueLengthId(userid) == false){
       alert("아이디를 2글자 이상 15자 작성해주세요.");
       event.preventDefault();
    } else if(confrimValueLengthPw(userpw) == false) {
        alert("비밀번호를 8글자 이상 15자 이하로 작성해주세요.");
        event.preventDefault();
    } else if(confirmPw(userpw, userpwconf) == false){
        alert("입력하신 비밀번호가 달라요.");
        event.preventDefault();
    } else {
        const moon = new User(userid, userpw, username);    // 객체 생성
        alert("회원가입 완료" + "\n" 
                + "id : " + moon.userid + "\n" 
                + "pw : " + moon.userpw + "\n" 
                + "name : " + moon.username );
        localStorage.setItem(USERID_KEY, JSON.stringify(userid));   // JSON 형변환
        localStorage.setItem(USERPW_KEY, JSON.stringify(userpw));
        localStorage.setItem(USERNAME_KEY, JSON.stringify(username));
    }

}


function User(userid, userpw, username){    // 클래스 생성
    this.userid = userid;
    this.userpw = userpw;
    this.username = username;
}

function confrimValueLengthId(userid){  // 아이디 길이 유효성 검사
    if(userid.length <= 2 || userid.length >= 15){
        return false;
    } else {
        return true;
    }
}

function confrimValueLengthPw(userpw){  // 비밀번호 길이 유효성 검사
    if(userpw.length <= 8 || userpw.length >= 15){
        return false;
    } else {
        return true;
    }
}

function confirmPw(userpw, userpwconf){   // 비밀번호 동일 유효성 검사
    if(userpw !== userpwconf){
    return false;
    } else {
        return true;
    }
}

signupForm.addEventListener("submit", onSignupSubmit);


