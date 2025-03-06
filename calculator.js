let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function operate(op) {
    if (currentInput === '') return;
    if (operator !== '') calculateResult();
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = (prev * current) / 100;
            break;
        case 'sqrt':
            result = Math.sqrt(prev);
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
    console.log(result);
    alert(result);
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
