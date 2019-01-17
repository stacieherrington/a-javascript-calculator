let x = parseFloat(prompt("Enter your first number."))

while (isNaN(x)) {
    x = parseFloat(prompt("That is not a number. Please enter your first number."))
}

let operator = prompt("Enter an operator: +, -, *, or /.")

while ((operator !== "+") && (operator !== "-") && (operator !== "*") && (operator !== "/")) {
    operator = prompt("That is not one of the four basic arithmetic operators. Please try one of those: +, -, *, or /.")
}

let y = parseFloat(prompt("Enter your second number."))

while (isNaN(y)) {
    y = parseFloat(prompt("That is not a number. Please enter your second number."))
}

let result

switch(operator) {
    case "+":
        result = x + y
        break
    case "-":
        result = x - y
        break
    case "*":
        result = x * y
        break
    case "/":
        result = x/y
        break
}

const resultString = x + " " + operator + " " + y + " = " + result
console.log(resultString)
