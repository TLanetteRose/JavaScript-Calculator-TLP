const calculator ={
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue } = calculator;
    //Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit: displayValue + digit;
}

function inputDecimal(dot) {
    //If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)){
        //Append the decimal point
        calculator.displayValue += dot;
    }
}

function updateDisplay() {
    const display = document.querySelector('.calculator__screen');
    display.value = calculator.displayValue;
}
updateDisplay();


// Handling Key presses

const keys = document.querySelector('.calculator__keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    //If the element that was clicked is not a button...
    if (!target.matches('button')) {
        //exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all__clear')) {
        console.log('clear', target.value);
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
