let x = prompt("Enter your first number.")
let operator = prompt("Enter an operator: +, -, *, or /.")
let y = prompt("Enter your second number.")
let result

x = parseInt(x)
y = parseInt(y)

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
