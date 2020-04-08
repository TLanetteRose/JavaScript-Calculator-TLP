const keys = document.getElementById('keys');
const calculator ={
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operatorFlag: false,
    waitingForSecondOperand: false,
    operator: null,
    ans: '0'
};

//Inputting the digits
function inputDigits(digits) {
    if (calculator.operatorFlag === true) {
        calculator.displayValue = digits;
        calculator.operatorFlag = false;
    } else {
        calculator.displayValue === '0' ? (calculator.displayValue = digits) : (calculator.displayValue += digits);
    }
}
    

function inputDecimal(decimal) {
    //Prevents decimal point from being appended to displayValue
    if (calculator.operatorFlag === true) return;
    //If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(decimal)){
        //Append the decimal point
        calculator.displayValue += decimal;
    }
}

//Handling Operators
function handleOperator(newOperator) {
    let { firstOperand, operator, displayValue, operatorFlag } = calculator;
    let inputValue = parseFloat(displayValue);
    if(operator && operatorFlag === true) {
        calculator.operator = newOperator;
        return;
    }
    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        calculator.secondOperand = parseFloat(displayValue);
        const result = calculate[calculator.operator](
            calculator.firstOperand,
            calculator.secondOperand
        );
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
        calculator.ans = formatDisplay(String(result));
    }
    calculator.displayValue = formatDisplay(calculator.displayValue);
    calculator.operatorFlag = true;
    calculator.operator = newOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

//Reset the Calculator
function resetCalculator () {
    calculator.displayValue ='0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    return;
}

//Updating the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = calculator.displayValue;
}
updateDisplay();


//Handling Key presses

const keys = document.querySelector('.calculator__keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    //If the element that was clicked is not a button...
    if (!target.matches('button')) {
        //exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all__clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
