// 문제1
//alert("꼬양이");

// 문제2
// const cat = "고양이";
// alert(cat);

// 문제3
const catAge = 2;
const catKinds = "페르시안 ";
const catName = "문달이 ";

//const myCat = catAge + "살 " + catKinds + catName;
//alert(myCat);

// 4번 문제
function br(){
    document.write("<br>");
}

const catAgeP = document.querySelector("#cat p:first-child");
const catKindsP = document.querySelector("#cat p:nth-child(2)");
const catNameP = document.querySelector("#cat p:last-child");

catAgeP.innerText = "고양이 나이 : " + catAge + "살";
catKindsP.innerText = "고양이 종류 : " + catKinds;
catNameP.innerText = "고양이 이름 : " + catName;

