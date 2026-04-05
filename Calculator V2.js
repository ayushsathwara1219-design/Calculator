function calculator() {
    let operation = prompt("Choose an operation: add, substract, multiply, divide");
    let a =Number(prompt("Enter the first number"));
    let b =Number(prompt("Enter the second number"));

    if (operation === "add") {
        alert(a+b);
    }
    else if (operation === "substract") {
        alert(a-b);
    }
    else if (operation === "multiply") {
        alert(a*b);
    }
    else if (operation === "divide") {
        if (b===0) {
            alert("Cannot be divided by 0");
        }
        else {
            alert(a/b);
        }
    }
    else {
        alert("Invalid Operation");
    }
}

let again;
do {
    calculator();
    again = prompt("Do you want to calculate again? (yes/no)");
}while (again.toLowerCase() === "yes");