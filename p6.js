// 6. JavaScript Regular Expression to validate Email

let regx = /^[^\.0-9!#$%&'*+-/=?^_`{|}\.~][A-Za-z0-9!#$%&'*+-/=?^_`{|}\.~]+@[a-zA-Z]+[\.]{1}(com|org|co|net|us)(?!\.)$/i

//condition:-

//Starting dot and special char not valid
//a-zA-Z0-9-special char one or more time(+)
// @ must exist
// after @ a-zA-Z one or more time 
// after that com|COM nust exist
// Ending dot(.) not valid

let email_1 = "hd.opash@gmail.com"
let email_2 = "HD.OPASH@GMAIL.COM"

if(regx.test(email_2)){
    console.log("Email is valid");
}else{
    console.log("Email is not valid");
}
