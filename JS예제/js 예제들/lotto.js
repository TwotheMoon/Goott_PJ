function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}

let lottoNum = [];
let luckyNum = [2, 16, 23, 7, 43, 24];

for (let i = 0; i < 6; i++) {
   
   let randomNum = Math.floor(Math.random() * 45) + 1;
    
    if (lottoNum.indexOf(randomNum) === -1) {
        lottoNum.push(randomNum);
    } else {
        i--
    }
}


function compareLottoNum(lottoNum, luckyNum){
let overlapArray = [];
	for(let i =0; i<lottoNum.length; i++){
       // console.log(lottoNum);
        for(let j=0; j<luckyNum.length; j++){
        
            if(lottoNum[i] == luckyNum[j]){
              console.log(lottoNum[i]);
              overlapArray.push(lottoNum[i]);
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






// for (let i = 0; i < 6; i++) {
   
//     randomNum = Math.floor(Math.random() * 45) + 1;
    
//     if (lottoNum.indexOf(randomNum) === -1) {
//         lottoNum.push(randomNum);
//     } else {
//         i--
//     }
// }


// function compareLottoNum(a, b){
// let overlapArray = [];
// 	for(let i =0; i<a.length; i++){
//        // console.log(a);
//         for(let j=0; j<b.length; j++){
        
//             if(a[i] == b[j]){
//               console.log(a[i]);
//               overlapArray.push(a[i]);
//           }
//         }
//     }  
//     dw("당첨번호 : " + luckyNum);
//     br();br();
//     dw("당신의 번호 : " + lottoNum);
//     br();br();
   
//     switch(overlapArray.length){
//         case 1 : dw("6등");   
//         break; 
//         case 2 : dw("5등"); 
//         break;
//         case 3 : dw("4등");    
//         break;
//         case 4 : dw("3등");    
//         break;
//         case 5 : dw("2등");    
//         break;
//         case 6 : dw("1등");    
//         break;
//         default : dw("꽝");    
//     }
// }

// compareLottoNum(lottoNum, luckyNum);
// br();

