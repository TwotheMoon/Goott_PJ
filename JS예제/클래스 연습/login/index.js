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


const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementById("loginBtn");
const loginBox = document.querySelector(".loginBox");
const userInfo = document.getElementById("userInfo");
let isFindId ;
let isFindPw ;

const HIDDEN_CLASSNAME = "hidden";


function clickOnLoginBtn(){
    const userId = idInput.value; 
    const userPw = pwInput.value; 
    isFindId = false;
    isFindPw = false;

    for(let i = 0; i < members.length; i++){
        if(userId == members[i].id){
            isFindId = true;
        }
    }   // for 끝
    
    if(isFindId == true){
        let userLoginId;
        let userLoginName;
        let userLoginEmail;
        for(let i = 0; i < members.length; i++){
            if(userPw == members[i].pw){
                isFindPw = true;
                 userLoginId = members[i].id;
                 userLoginName = members[i].name;
                 userLoginEmail = members[i].email;
            }
        } 
        
            if(isFindPw == true){
                alert("로그인 성공");
                loginBox.classList.add(HIDDEN_CLASSNAME);
                onLoginSubmit(userLoginId, userLoginName, userLoginEmail);
            } else{
                alert("비밀번호를 틀렸어요.");
            }
    } else {
        alert("아이디가 존재하지 않아요.");
    }   // isFindId 끝

}   // clickOnLoginBtn 끝

function onLoginSubmit(userId , name, email){
    userInfo.innerText = 
    `안녕하세요 ${userId}님
     성명: ${name} 
     이메일: ${email}`;
     userInfo.classList.remove(HIDDEN_CLASSNAME);
}

    
loginBtn.addEventListener("click", clickOnLoginBtn);
loginBox.addEventListener("submit", onLoginSubmit);
