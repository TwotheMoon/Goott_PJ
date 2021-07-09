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
    const username = signupNameInput.value;
    const userpw = signUpPwInput.value;

    if(confirmPw() == true){    // 유효성 확인시 쿠키(?) 저장
        localStorage.setItem(USERID_KEY, userid);
        localStorage.setItem(USERPW_KEY, userpw);
        localStorage.setItem(USERNAME_KEY, username);
        alert("회원가입 완료");
    } else {
        event.preventDefault();
    }


}

function confirmPw(){   // 비밀번호 유효성 검사
    const userpw = signUpPwInput.value;
    const userpwconf = signUpPwConfirmInput.value;

    if(userpw !== userpwconf){
        alert("입력하신 비밀번호가 달라요.");
    return false;
    } else {
        return true;
    }

}


signupForm.addEventListener("submit", onSignupSubmit);


