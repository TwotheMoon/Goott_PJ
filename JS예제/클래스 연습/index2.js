function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}


// 매개변수, 인수 안넘겨주고

// 클래스 생성
// function Cat(){
//     this.catName = "";
//     this.catAge = 0;

//     this.introduce = function(color){
        
//         dw("고양이 이름 : " 
//         + this.catName 
//         + "고양이 나이 : " 
//         + this.catAge 
//         + "고양이 털색 : "
//         + color);
//     }

// }


// // 생성자 이용 초기화
// const kitty = new Cat();

// // 객체에 값 넣기
// kitty.catName = "키티";
// kitty.catAge = 2;

// kitty.introduce("검정색");


function Keyboard(){
    this.num = 0;
    this.keyboardType = "";
    this.keyboardKeyQuantity = 0;
    this.keyboardswitch = "";

    this.introduce = function(){
        dw(
        "[num.]: "
        + this.num
        + " 키보드 재질 : " 
        + this.keyboardType
        + " 키 갯수 : "
        + this.keyboardKeyQuantity
        + " 스위치 : "
        + this.keyboardswitch
        )
    };
}

const vamilo = new Keyboard();
vamilo.keyboardType = "plastic";
vamilo.keyboardKeyQuantity = 87; 
vamilo.keyboardswitch = "V2 Rose";

const moonCustum = new Keyboard();
moonCustum.keyboardType = "aluminum";
moonCustum.keyboardKeyQuantity = 63;
moonCustum.keyboardswitch = "Tangerine 67g";

const cox = new Keyboard();
cox.keyboardType = "plastic";
cox.keyboardKeyQuantity = 108;
cox.keyboardswitch = "rcherry red";

const ducky = new Keyboard();
ducky.keyboardType = "plastic";
ducky.keyboardKeyQuantity = 43;
ducky.keyboardswitch = "gateton blue";


const keyboards = [vamilo, moonCustum, cox, ducky];

for(let i = 0; i < keyboards.length; i++){
    keyboards[i].num = 1 + i;
    keyboards[i].introduce();
    br();
}
console.log(keyboards.length);
console.log(keyboards.length);




