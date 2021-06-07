main();

function main() {

    const display = document.querySelector('#display');
    display.value = '';

    const calculator = document.querySelector('#calculator');

    const decimal = document.querySelector('#decimal');

    let operator = '';
    let value = '';
    let operand1 = '';
    let operand2 = '';
    let str = '';
    let result = 0;

    calculator.addEventListener('click', (event) => {

        const isButton = event.target.nodeName === 'BUTTON';
        if (isButton) {
            let input = (event.target.innerHTML);
            if (!isNaN(input)) {
                value += input;
                display.value += (event.target.innerHTML);
            } else {
                if (event.target.innerHTML === 'CLEAR') {
                    operand1 = '';
                    operand2 = '';
                    operator = '';
                    value = '';
                    result = 0;
                    display.value = '';
                } else if (event.target.innerHTML === 'DELETE') {
                    if (display.value !== '')
                        str = display.value;
                    display.value = str.slice(0, -1);
                } else if (event.target.innerHTML === '=') {
                    if (operand2 === '') {
                        operand2 = value;
                        value = '';
                    }
                    result = operate(operator, operand1, operand2);
                    if (typeof (result) === 'undefined') {
                        result = 0;
                    }else if(isNaN(result)){
                        result = 0;
                    }
                    operand1 = result;
                    operand2 = '';
                    operator = '';
                    display.value = operand1;
                } else {
                    if (input === '.') {
                        value += '.';
                        decimal.disabled = true;
                    } else if (operand1 === '') {
                        operand1 = value;
                        value = '';
                        operator = input;
                        decimal.disabled = false;
                    } else if (operator === '') {
                        operator = input;
                        decimal.disabled = false;
                    } else if (operand2 === '' && operator !== '') {
                        operand2 = value;
                        value = '';
                        result = operate(operator, operand1, operand2);
                        operator = input;
                        decimal.disabled = false;
                        operand1 = result.toString();
                        display.value = '';
                        display.value += operand1;
                        operand2 = '';
                    }
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
    if (num2 === 0) {
        return 0;
    }
    return num1 / num2;
}

function operate(op, num1, num2) {
    if(op == '' | num2 == ''){
        return num1;
    }
    num1 = Number(num1);
    num2 = Number(num2);

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