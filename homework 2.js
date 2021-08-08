//1. Write a JavaScript function which accepts an argument and returns the type.

// function checkType (argument){
//     console.log(typeof argument);
// }
// checkType (12);


// 2. Write a JavaScript function that accepts a 
//number as a parameter and check the number is prime or not. 


// function checkPrime(n){
//     if (n===1){
//         return false;
//     }else if (n===2){
//         return true;
//     }else{
//         for (let i = 2; i<n; i++){
//     if (n%i===0){
//         return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(checkPrime(17));


// 3. Write a JavaScript function to convert an amount to small coins.
// Note: Coins are 1,2,5,10,20,50

// function convertToCoins(amount, coins){
//     if (amount === 0){
//          return []
//     } else if (amount>= coins[0]) {
//        left = (amount- coins[0]);
//          return [coins[0]].concat(convertToCoins(left, coins));
//     }
//     else{
//     coins.shift();
//          return convertToCoins(amount, coins);
//     }
//     }
//     console.log(convertToCoins(1000, [50,20,10,5,2,1]))
   

//4. Write a JavaScript program to get the integers in range (x, y)
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

// let range = function (first_num,last_num){
//     if (last_num - first_num === 2){
//         return [first_num +1];
//     } else {
//         let list = range (first_num, last_num -1);
//         list.push (last_num-1);
//         return list
//     }
// }
//     console.log(range(2,9));




// 5. Write a JavaScript program that accept three integers and display the larger

// function getMax(a,b,c){
//     if (a>b && a>c){
//         return a;
//     } else if (b>a && b>c){
//         return b
//     } else{
//         return c
//     }
// }

// const valueA = Number (prompt ("Value 1"));
// const valueB = Number (prompt ("Value 2"));
// const valueC = Number (prompt ("Value 3"));

// const result = getMax (valueA, valueB,valueC);
// alert ("Largest value is " + result);


//6. Write a JavaScript conditional statement 
// to find the sign of product of three numbers. 

// let x=3;
// let y=-7;
// let z=2;

// if (x>0 && y>0 && z>0){
//     alert("The sign is +");

// }else if (x<0 && y<0 && z<0){
//     alert("The sign is -");
// }else if (x<0 && y>0 && z<0){
//     alert("The sign is +");
// }else if (x>0 && y<0 && z<0){
//     alert("The sign is +");
// } else{
//     alert("The sign is -");
// }

