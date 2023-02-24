// 4. Write a program to reverse a string? (Do not use reverse function.)

let str = "HitDoshi";
let rev = "";

console.log("Before Reverse String:- ",str)
for(i=str.length-1;i>=0;i--){
    rev += str[i];
}

console.log("After Reverse String:- ",rev)

