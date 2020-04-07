const calculator ={
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};



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
        console.log('decimal', target.value);
        return;
    }
    if (target.classList.contains('all__clear')) {
        console.log('clear', target.value);
        return;
    }
    console.log('digit', target.value);
});
