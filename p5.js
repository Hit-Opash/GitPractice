// 5. How to check if object is empty or not in javaScript?

let obj ={};
// or let obj = Object.create(null);

if(Object.values(obj).length==0){
    console.log("Object is empty")
}else{
    console.log("Object is not empty")
}

// or
// if(Object.keys(obj).length==0){
//     console.log("Object is empty")
// }else{
//     console.log("Object is not empty")
// }

// or
// if(Object.entries(obj).length==0){
//     console.log("Object is empty")
// }else{
//     console.log("Object is not empty")
// }
