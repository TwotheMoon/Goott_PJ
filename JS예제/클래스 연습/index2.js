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



// const vamilo = new Keyboard();
// vamilo.keyboardName = "See Melody";
// vamilo.keyboardType = "plastic";
// vamilo.keyboardKeyQuantity = 87; 
// vamilo.keyboardswitch = "V2 Rose";

// const moonCustum = new Keyboard();
// moonCustum.keyboardName = "moon custum";
// moonCustum.keyboardType = "aluminum";
// moonCustum.keyboardKeyQuantity = 63;
// moonCustum.keyboardswitch = "Tangerine 67g";

// const cox = new Keyboard();
// cox.keyboardName = "Endever";
// cox.keyboardType = "plastic";
// cox.keyboardKeyQuantity = 108;
// cox.keyboardswitch = "cherry red";

// const ducky = new Keyboard();
// ducky.keyboardName = "ducky 0";
// ducky.keyboardType = "plastic";
// ducky.keyboardKeyQuantity = 43;
// ducky.keyboardswitch = "gateron blue";



// 배열에 키보드 타입이 plastic 인 객체 이름 프로퍼티 검색 출력
// for(let i = 0; i < keyboards.length; i++){
    //     if(keyboards[i].keyboardType == "plastic"){
        //         dw(keyboards[i].keyboardName);
        //         br();
        //     }
        
        // }
        
        
        function Keyboard(){
            this.num = 0;
            this.keyboardName = "";
            this.keyboardType = "";
            this.keyboardKeyQuantity = 0;
            this.keyboardswitch = "";
        
            this.introduce = function(){
                dw(
                  "제품명 : "
                + this.keyboardName + rand() + "<br>"
                + "[num.]: "  
                + this.num  + "<br>"
                + " 키보드 재질 : " 
                + this.keyboardType + "<br>"
                + " 키 갯수 : "
                + this.keyboardKeyQuantity + "<br>"
                + " 스위치 : "
                + this.keyboardswitch + "<br>"
                )
            };
        }

        function rand(){
            let rendNum = Math.floor(Math.random() * 100 ) ; 
            return rendNum;
        }

    
        const keyboards = [, , , , , , , , , , ];
        
        for(let i = 0; i < keyboards.length; i++){
            keyboards[i] = new Keyboard();
            keyboards[i].num = 1 + i;
            keyboards[i].keyboardName = "vamilo";
            keyboards[i].keyboardType = "aluminum";
            keyboards[i].keyboardKeyQuantity = rand();
            keyboards[i].keyboardswitch = "charry red";
            keyboards[i].introduce();
            br();
        }

      

