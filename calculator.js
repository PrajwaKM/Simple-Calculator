let firstNumber = '';
let secondNumber = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    const display = document.getElementById('display');

    if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
    }

    display.value += number;
}

function setOperator(op) {
    const display = document.getElementById('display');
    firstNumber = display.value;
    operator = op;
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    secondNumber = display.value;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        default:
            return;
    }

    display.value = result;
    resultDisplayed = true;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    resultDisplayed = false;
}
