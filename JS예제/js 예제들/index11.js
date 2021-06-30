function dw(s){
    document.write(s);
}


function br(){
    dw("<br>");
}

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 문제 57
// for(let i = 5; i < array.length; i++){
//     dw(array[i]);
// }


// 문제 58
// for(let i = 3; i < 6; i ++){
//     dw(array[i]);
// }

// 문제 59
// for(let i = 0; i < array.length; i++){
//     let num = array[i];
//     if(num <= 3 || num > 7 ){
//         dw(num);
//     } 
// }


// 문제 60 

 //let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i = 0; i < array.length; i++){
//     dw(array[i]); br();
//     array[6] = 100;
// }

// OR

// for(i = 0; i < array.length; i++){
//     dw(array[i]); 
//     br();
// }

// array.splice(6, 1, "100");

// dw(array);


// 문제 61

// let array = [1, 2, 3, 4, 5];

// for(let i = 0; i < array.length; i++){
//     let rendArray = Math.floor(Math.random() * array.length + 1);
//     array[i] = rendArray;
// }
// for(let i = 0; i < array.length; i++){
//     dw(array[i]);
// }


// let array = [1, 2, 3, 4, 5];

// for(let i = 0; i < array.length; i++){
//     let rendArray = Math.floor(Math.random() * array.length);
//     dw(array[rendArray]);
// }

// 문제 62
// let animals = ["", "토끼", "", "강아지", "코끼리", "랫서팬더", "이구아나", "북극곰", "황제펭귄", "치아바타" ];

// for(let i = 0; i < animals.length; i++){
//         dw(animals[i]);
//     if(animals[i].length == 0){ // "" 문자열 길이 = 0
//         dw("빈 문자열 입니다.");
//     }
// }

for (let i = 0; i < 6; i++) {
   
    randomNum = Math.floor(Math.random() * 45) + 1;
    
    if (lottoNum.indexOf(randomNum) === -1) {
        lottoNum.push(randomNum);
    } else {
        i--
    }
}


function compareLottoNum(a, b){
let overlapArray = [];
	for(let i =0; i<a.length; i++){
       // console.log(a);
        for(let j=0; j<b.length; j++){
        
            if(a[i] == b[j]){
              console.log(a[i]);
              overlapArray.push(a[i]);
          }
        }
    }  
    dw("당첨번호 : " + luckyNum);
    br();br();
    dw("당신의 번호 : " + lottoNum);
    br();br();
   
    switch(overlapArray.length){
        case 1 : dw("6등");   
        break; 
        case 2 : dw("5등"); 
        break;
        case 3 : dw("4등");    
        break;
        case 4 : dw("3등");    
        break;
        case 5 : dw("2등");    
        break;
        case 6 : dw("1등");    
        break;
        default : dw("꽝");    
    }
}

compareLottoNum(lottoNum, luckyNum);
br();



