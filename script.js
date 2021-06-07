main();

function main() {

    const display = document.querySelector('#display');
    const calculator = document.querySelector('#calculator');

    let operator = '';
    let operand = '';
    let calc = '';
    let str = '';

    calculator.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (isButton) {
            let input = (event.target.innerHTML);
            if (!isNaN(input)) {
                operand += input;
                display.value += (event.target.innerHTML);
            } else {
                if (event.target.innerHTML === 'CLEAR') {
                    display.value = '';
                } else if (event.target.innerHTML === 'DELETE') {
                    if (display.value !== '')
                        str = display.value;
                        display.value = str.slice(0, -1);
                } else {
                    operator = input;
                    calc = operand + operator;
                    display.value += (event.target.innerHTML);
                }
            }
        }
    });
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    switch (op) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            console.log('Oops, something went wrong');
    }
}