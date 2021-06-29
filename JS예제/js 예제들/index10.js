const clock = document.getElementById("clock");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getclock();
setInterval(getclock, 1000); 


function dw(s){
    document.write(s);
}

function br(){
    dw("<br>");
}

// 문제 45

// function sum(a, b){
//     return a + b;
// }


// 문제 41

// dw(sum(1, 2));
// br();

// // 문제 42

// dw(sum(3, 4));
// br();

// 문제 43 
// let numOf1 = sum(1, 2);

//dw(numOf3(3, sum(1, 2)) );

// 문제 44
// let numOf1 = sum(1, 2);
// let numOf2 = sum(3, 4);

// dw(sum(numOf1, numOf2));

// 문제 45

// function sum(a, b, c, d){
//     return a + b + c + d;
// }

// const sum1 = sum(1, 2, 3, 4);
// const sum2 = sum(5, 6, 7, 8);

// dw(sum1 sum2);

// 문제 46
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];

// function sumArray(array){
//     let a1 =  array[0];
//     let a2 =  array[1];
//     let a3 =  array[2];
//     let a4 =  array[3];
    
//     return a1 + a2 + a3 + a4;
// }

// dw(sumArray(a1) + sumArray(a2));

// 문제 47

// const array = [1, 2, 3];

// function sumArray(a){
//     let a1 = a[0];
//     let a2 = a[1];
//     let a3 = a[2];
//     return a1 + a2 + a3;
// }

// dw(sumArray(array));

// 문제 48

// const array = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16 ,17, 18, 19, 20
// ]

// function arrayExport(a){
//     for(let i = 0; i < array.length; i++){
//         dw(a[i]); 
//     }
// }

// arrayExport(array);


// 문제 49
//dw(array[6]);

// 문제 50
// dw(array[0]);
// dw(array[19]);

// 문제 51

//dw(array[0] + array[19]);

// 문제 52

// dw("배열의 길이 : " + array.length);

// 문제 53

// function arrayExport(a){
//     for(let i = 0; i < array.length; i++){
//         dw(a[i]); 
//     }
// }

//dw(arrayExport(array));

// 문제 54
// function arrayExport(a){
//     for(let i = 0; i < array.length; i++){
//         dw(a[i] + "<br>"); 
//     }
// }

// dw(arrayExport(array));

// 문제 55

// function arrayExport(a){
//     for(let i = 0; i < array.length; i++){
//         dw(a[i] + "<br>"); 
//     }
// }

// dw(arrayExport(array));

// 문제 55

// const array = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]

// function arrayExport(a){
//     for(let i = 0; i < a.length; i++){
//         dw(a[i] + "<br>"); 
//     }
// }

// arrayExport(array);


// 문제 56

const zoo = [
    "rabbit", "dog", "cat", "alligator", "elephant", "giraffe", "monkey", 'halfWaterDog', "fox", "nugulman"
]

// function zooTychoon(a){
//     for(i = 0; i < a.length; i++){
//         dw(a[i] + "<br>");
//     }
// }
// zooTychoon(zoo);

// 문제 57

for(let i = 0; i < zoo.length; i++){
    let nugul = zoo[i];
    
    if(nugul == "nugulman"){
        dw(nugul);
    } else {

    }
}
