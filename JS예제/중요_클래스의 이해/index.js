function br(){
    document.write("<br>");
}

// 객체 선언
var c= {
    catName: "나비",
    age: 1,
    weight: 10
}


// 클래스 선언 객체 프로퍼티값 선언
function Cat2(catName, age, weight){
    this.catName = catName;     // this. : 클래스가 저장하고있는 변수
    this.age = age;
    this.weight = weight;
}


window.onload = function () {
    // document.write(c.toString());
    br();
    document.write(c.catName);
    br();
    document.write(c.age);
    br();
   document.write(c.weight);   
    br();
    br();
    br();

                // 생성자
    var kitty = new Cat2("야옹이", 10, 20);
    document.write(kitty.catName);
    br();

    let naby = new Cat2("나비", 20, 30);
    document.write(naby.age);
    br();

    var cat2 = new Cat2("냐옹이", 10, 20);
    document.write(cat.catName);
    br();
    document.write(cat.age);
    br();
    document.write(cat.weight);   
    
    //배열에 클래스들 넣기
    
    var classArray = [cat, cat2];

    //배열-클래스-변수 찍기
    var s = classArray[1].catName;
    br();
    br();
    br();
    document.write(s);
    
}