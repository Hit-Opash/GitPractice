// 1. Write a program in javascript. sum(2)(3);
// Example: Expected output is 5

let n1=2,n2=3;
let sum = (n1) => (n2) => {

    return n1+n2;

}

console.log(`Sum of ${n1} + ${n2} is:- `,sum(2)(3));