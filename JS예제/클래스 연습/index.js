function dw(s){
    document.write(s);
}
function br(){
    dw("<br>");
}


// // 1. 클래스(설계도) 선언
// // 클래스 명 대문자 시작
// function Cat(catName, age, weight){
//     this.catName = catName;
//     this.age = age;
//     this.weight = weight;
// }


// // 2. 클래스(설계도) 를 이용한 객체(제품) 생성
// let kitty = new Cat("키티", 2, 200);
// let dongneCat = new Cat("동네고양이", 20, 30);
// let thiefCat = new Cat("도둑고양이", 10, 20);


// // 3. 객체(제품) 사용
// dw(kitty.catName);
// br();
// dw(dongneCat.age);
// br();
// dw(thiefCat.weight);
// br();


function Player(playerName, hp, mp, exe, level){
    this.playerName = playerName;
    this.hp = hp;
    this.mp = mp;
    this.exe = exe;
    this.level = level;

    this.attack = function(weaponAttack){
        let weponDameges = weaponAttack;
        return weponDameges;
    }
    this.attackOnByRemainingHp = function(weaponAttack, hp){
        let dameges = hp - weaponAttack;
        return dameges;
    }
}

function PlayerWeapon(type, damege, rate){
    this.type = type;
    this.damege = damege;
    this.rate = rate;
}

let moon = new Player("Moon", 100, 50, 360, 15);

let sword = new PlayerWeapon("sword", 20, "epic");

dw(sword.type + " 에 의한 " + moon.playerName + " 의 피해량 : " + moon.attack(sword.damege, moon.hp));
br();
dw(moon.playerName + " 의 남은 hp : " + moon.attackOnByRemainingHp(sword.damege, moon.hp));

