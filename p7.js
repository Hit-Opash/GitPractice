// 7. Use RegEx to test password strength in JavaScript?

// let regx = /([a-z]+[A-Z]+[0-9]+[@!#$%&'*+-/=?^_`{|}\.~]+){8,}/ 
let regx = /^(?=.+\d)(?=.+[a-z])(?=.+[A-Z])(?=.+[@!#$%&'*+-/=?^_`{|}\.~])(?=.+[a-zA-Z]).{8,}$/

let password = "hitD1111J$nd"

if(regx.test(password)){
    console.log("Password is valid");
}else{
    console.log("Password is not valid");
}
