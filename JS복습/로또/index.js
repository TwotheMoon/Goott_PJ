const randomLotoNum = [];
const userLotoNum = [8, 12, 32, 34, 40, 42];
let overlapArray = [];

for(let i = 0; i < 7; i++){
    const random = Math.floor(Math.random() * 45) + 1;
    if(randomLotoNum.indexOf(random) === -1){
        randomLotoNum.push(random);
    } else {
        i--;
    }
}

function compareLotoNum(comNum, userNum){
    
    for(let i = 0; i < comNum.length; i++){
        for(let j = 0; j < userNum.length; j++){
            if(comNum[i] == userNum[j]){
                overlapArray.push(comNum[i]);
            }
        }
    }
    switch (overlapArray.length) {
        case 1: document.write("6등");
        break;
        case 2: document.write("5등");
        break;
        case 3: document.write("4등");
        break;
        case 4: document.write("3등");
        break;
        case 5: document.write("2등");
        break;
        case 6: document.write("1등");
        break;
        default: document.write("꽝");
        break;
    }
    document.write("<br>");
    document.write("당신의 번호 : " + userLotoNum);
    document.write("<br>");
    document.write("로또 번호 : " + randomLotoNum);
    document.write("<br>");
    document.write("당첨 번호 : " + overlapArray);
    document.write("<br>");
}
compareLotoNum(randomLotoNum, userLotoNum);



