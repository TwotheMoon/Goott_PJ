
const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;
const num6 = 6;

function br(){
    document.write("<br>");
}

if(num1 < num2){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if(num1 == num2 -1){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if(num1 !== num2){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if(num1 < num2 && num1 < num5){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if(num1 < num2 || num6 > num5){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if((num1 < num2 && num6 > num5) || (num2 > num1) && (num3 < num2)){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

if((num1 < num2) || (num6 > num5) && (num5 < num6) || (num2 < num3)){
    document.write("조건이 맞아서 이걸 출력함");
}
br();

var a = 10;
var b = 3;

const result = a % b;
document.write("10 % 3 : " + result);
br();

