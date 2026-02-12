

// function add(a,b){
//     return a+b;
// }

// console.log(add(5,7));


 function operate(a,b,callback) {
   return callback(a,b);
}

function add(a,b){
    return a+b;
}

console.log("Addition" , operate(5,10, add));



