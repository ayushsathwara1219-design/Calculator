function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b===0) {
        return "Cannot divide by 0";
    }
    return a/b;
}
console.log(add(4,5));
console.log(substract(9,5));
console.log(multiply(5,9));
console.log(divide(10,2));
