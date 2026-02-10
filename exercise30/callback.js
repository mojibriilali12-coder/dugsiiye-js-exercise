

function operate(a,b,uyeedh){
    return uyeedh(a,b);
}

function add(a,b){
    return a+b;
}

function substration(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log("Addition" , operate(5,10, add));
console.log("Substract" , operate(10,10, substration));
console.log("Multiply" , operate(17,4, multiply));
console.log("Divide" , operate(25,2, divide));