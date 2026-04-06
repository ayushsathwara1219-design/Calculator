function  add(a,b) {
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
        return "Number Cannot be divided by zero";
    }
    return a/b;
}

function calculator() {
    let operation = prompt("Choose Operation: add, substract, multiply, divide");
    let a = prompt("Enter the first number:");
    let b = prompt("Enter the second number:");

    if (isNaN(a) || isNaN(b) || a === "" || b === ""){
        alert ("Invalid number input");
        return;
    }

    a=Number(a);
    b=Number(b);

    if (!operation || operation === "") {
        alert("No operation entered");
        return;
    }

    operation = operation.toLowerCase();

    let result;

    if (operation === "add"){
        result = add(a,b);
    }
    else if (operation === "substract") {
        result = substract(a,b);
    }
    else if (operation === "multiply") {
        result = multiply(a*b);
    }
    else if (operation === "divide") {
        result = divide(a,b);
    }
    else {
        alert("Invalid operation");
        return;
    }

    if (result !== null) {
        alert("Result:" + result);
    }
}

let again;

do {
    calculator();
    again=prompt("Do you want to calculate again? (yes/no)");

    if (!again) break;
}
while (again.toLowerCase() === "yes");