# JavaScript-Calculator-TLP
Simple JavaScript Calculator from tutorial



function inputDigit(digits) {
    const { displayValue, waitingForSecondOperand } = calculator;
    //Overwrite `displayValue` if the current value is '0' otherwise append to it
        if (waitingForSecondOperand === true) {
            calculator.displayValue = digit;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
        }
        console.log(calculator);
    }

if (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        return;
    }

 if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }