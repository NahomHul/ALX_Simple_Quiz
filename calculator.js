function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

function handleClick(operation) {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;

    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }

    document.getElementById("calculation-result").textContent = result;
}

document.getElementById("add").addEventListener("click", () => handleClick("add"));
document.getElementById("subtract").addEventListener("click", () => handleClick("subtract"));
document.getElementById("multiply").addEventListener("click", () => handleClick("multiply"));
document.getElementById("divide").addEventListener("click", () => handleClick("divide"));
