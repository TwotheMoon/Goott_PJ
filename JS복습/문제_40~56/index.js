const btn = document.getElementById("btn");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const input3 = document.getElementById("num3");
const input4 = document.getElementById("num4");

// btn.addEventListener("click", btnOnClick);

// 문제 41번 ~ 42
// function btnOnClick(){
//     const num1 = JSON.parse(input1.value);
//     const num2 = JSON.parse(input2.value);
//     document.write(sum(num1, num2));

// }

// function sum (num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// 문제 43
// function btnOnClick(){
//     const num1 = JSON.parse(input1.value);
//     const num2 = JSON.parse(input2.value);
//     document.write(
//         sum( 
//             3, sum(num1, num2)
//         )
//     );
// }

// function sum (num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// 문제 44
// function btnOnClick(){
//     const num1 = JSON.parse(input1.value);
//     const num2 = JSON.parse(input2.value);
//     const num3 = JSON.parse(input3.value);
//     const num4 = JSON.parse(input4.value);
//     document.write(
//        sum(
//            sum(num1, num2), sum(num3, num4)
//        )
//     );
// }

// function sum (num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// 문제 45
// function btnOnClick(){
//     document.write(
//         sum1(
//             sum2(1, 2, 3, 4), sum2(5, 6, 7, 8)
//         )
//     );
// }

// function sum1 (num1, num2){
//     const result = num1 + num2;
//     return result;
// }
// function sum2 (num1, num2, num3, num4){
//     const result = num1 + num2 + num3 + num4;
//     return result;
// }

// 문제 46
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];

// function btnOnClick(num1, num2, num3, num4){
//     document.write(
//         sum1(
//             sum2(array1[0], array1[1], array1[2], array1[3]),
//             sum2(array2[0],array2[1],array2[2],array2[3])
//             )
//     );
// }

// function sum1 (num1, num2){
//     const result = num1 + num2;
//     return result;
// }
// function sum2 (num1, num2, num3, num4){
//     const result = num1 + num2 + num3 + num4;
//     return result;
// }

// 문제 47
// const array = [1, 2, 3];

// function btnOnClick(){
//     document.write(sumArray(array));
// }

// function sumArray(a){
//     const a1 = a[0];
//     const a2 = a[1];
//     const a3 = a[2];
//     const result = a1 + a2 + a3;
//     return result;
// }

//문제 48
// let array = [];
// for(i = 1; i <= 20; i++){
//     array.push(i);
// }

// 문제 49
// document.write(array[6]);

// 문제 50
// document.write(array[0]);
// document.write(array[19]);

// 문제 51
// document.write(array[0] + array[19]);

// 문제 52
// document.write(array.length);

// 문제 53
// let array = [];
// for(i = 1; i <= 20; i++){
//     array.push(i);
// }
// document.write(array);

// 문제 54
// let array = [];
// for(i = 1; i <= 20; i++){
//     array.push(i);
// }

// for(i = 0; i < array.length; i++){
//     document.write(array[i]);
//     document.write("<br>");
// }

// 문제 55
// let array = [];
// for(i = 1; i <= 10; i++){
//     array.push(i);
// }

// for(i = 0; i < array.length; i++){
//     document.write(array[i]);
//     document.write("<br>");
// }

// 문제 56
const zoo = ["강아지 ", "고양이 ", "너굴맨 "];
for(let i = 0; i < zoo.length; i++){
    if(zoo[i] == "너굴맨 "){
        document.write(zoo[i] + "찾았다." );
    }
}