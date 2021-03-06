const signupForm = document.querySelector('#signup-form');

const signUpIdInput = document.querySelector(".signup-id-input");
const signUpPwInput = document.querySelector(".signup-pw-input");
const signUpPwConfirmInput = document.querySelector(".signup-pwConfirm-input");
const signupSubmitBtn = document.querySelector(".signup-submit");
const signupNameInput = document.querySelector(".signup-name-input");
const signupGender = document.querySelector(".signup-gender-input");
const signupBirthYY = document.querySelector(".signup-birthyy-input");
const signupBirthMM = document.querySelector(".signup-birthmm-input");
const signupBirthDD = document.querySelector(".signup-birthdd-input");
const signupPhone1 = document.querySelector(".signup-phone1-input");
const signupPhone2 = document.querySelector(".signup-phone2-input");
const signupPhone3 = document.querySelector(".signup-phone3-input");
const signupEmail1 = document.querySelector(".signup-email1-input");
const signupEmail2 = document.querySelector(".signup-email2-input");

const USERID_KEY = "userid";     
const USERPW_KEY = "userpw";    
const USERNAME_KEY = "username";
const USERGENDER_KEY = "usergender";
const USERBIRTH_KEY = "userbirth";
const USERPHONE_KEY = "userphone";
const USEREMAIL_KEY = "useremail";

function onSignupSubmit(event){     // 회원가입 submit 에 대한 함수
    const userid = signUpIdInput.value;
    const userpw = signUpPwInput.value;
    const username = signupNameInput.value;
    const userpwconf = signUpPwConfirmInput.value;
    const usergender = signupGender.value;
    const userbirthyy = signupBirthYY.value;
    const userbirthmm = signupBirthMM.value;
    const userbirthdd = signupBirthDD.value;
    const userbirth = userbirthyy + userbirthmm + userbirthdd;
    const userphone1 = signupPhone1.value;
    const userphone2 = signupPhone2.value;
    const userphone3 = signupPhone3.value;
    const userphone = userphone1 + userphone2 + userphone3;
    const useremail1 = signupEmail1.value;
    const useremail2 = signupEmail2.value;
    const useremail = useremail1 + useremail2;

   if(confrimValueLengthId(userid) == false){
       alert("아이디를 2글자 이상 15자 작성해주세요.");
       event.preventDefault();

    } else if(confrimValueLengthPw(userpw) == false) {
        alert("비밀번호를 8글자 이상 15자 이하로 작성해주세요.");
        event.preventDefault();

    } else if(confirmPw(userpw, userpwconf) == false){
        alert("입력하신 비밀번호가 달라요.");
        event.preventDefault();

    } else if (confirmBirth(userbirthyy, userbirthmm, userbirthdd) == 1){
        alert("연도 4글자 입력해주세요");
        event.preventDefault();

    } else if(confirmBirth(userbirthyy, userbirthmm, userbirthdd) == 2){
        alert("월 2글자 입력해주세요.");
        event.preventDefault();

    } else if(confirmBirth(userbirthyy, userbirthmm, userbirthdd) == 3){
        alert("일 2글자 입력해주세요.");
        event.preventDefault();

    } else if(confirmPhone(userphone1, userphone2, userphone3) == 1){
        alert("검색되지 않는 지역번호입니다.");
        event.preventDefault();

    } else if(confirmPhone(userphone1, userphone2, userphone3) == 2){
        alert("휴대폰 번호 앞자리 4글자 입력해주세요.");
        event.preventDefault();

    } else if(confirmPhone(userphone1, userphone2, userphone3) == 3){
        alert("휴대폰 번호 뒷자리 4글자 입력해주세요.");
        event.preventDefault();

    } else {
        const moon = new User(userid, userpw, username, usergender, userbirth, userphone, useremail);    // 객체 생성
        alert("회원가입 완료" + "\n" 
                + "아이디 : " + moon.userid + "\n" 
                + "비밀번호" + moon.userpw + "\n" 
                + "이름 : " + moon.username + "\n" 
                + "성별 : " + moon.usergender + "\n" 
                + "생년월일 : " + moon.userbirth + "\n" 
                + "전화번호 : " + moon.userphone + "\n" 
                + "이메일 : " + moon.useremail + "\n"                 
                );
        localStorage.setItem(USERID_KEY, JSON.stringify(userid));   // JSON 형변환
        localStorage.setItem(USERPW_KEY, JSON.stringify(userpw));
        localStorage.setItem(USERNAME_KEY, JSON.stringify(username));
        localStorage.setItem(USERGENDER_KEY, JSON.stringify(usergender));
        localStorage.setItem(USERBIRTH_KEY, JSON.stringify(userbirth));
        localStorage.setItem(USERPHONE_KEY, JSON.stringify(userphone));
        localStorage.setItem(USEREMAIL_KEY, JSON.stringify(useremail));
    }

}


function User(userid, userpw, username, usergender, userbirth, userphone, useremail){    // 클래스 생성
    this.userid = userid;
    this.userpw = userpw;
    this.username = username;
    this.usergender = usergender;
    this.userbirth = userbirth;
    this.userphone = userphone;
    this.useremail = useremail;
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

function confirmBirth(userbirthyy, userbirthmm, userbirthdd){
    if(userbirthyy.length <= 1 || userbirthyy.length >= 5){
        if(userbirthmm.length != 2){
            if(userbirthdd.length != 2){
                return 3;
            }
            return 2;
        }
        return 1;
    } else {
        return 0;
    }
}

function confirmPhone(userphone1, userphone2, userphone3){
    if(userphone1.length <= 1 || userphone1.length >= 4){
        return 1;
    }
     else if (userphone2.length != 4){
        return 2;
    } else if(userphone3.length != 4){
        return 3;
    } else {
        return 0;
    }
}

signupForm.addEventListener("submit", onSignupSubmit);


