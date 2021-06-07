main();

function main() {

    const display = document.querySelector('#display');
    display.setAttribute('disabled', true);
    display.value = '';

    const calculator = document.querySelector('#calculator');

    const decimal = document.querySelector('#decimal');

    let operator = '';
    let value = '';
    let operand1 = '';
    let operand2 = '';
    let str = '';
    let result = 0;

    document.addEventListener('keyup', (e) => {
        let key = e.key;
        triggerKey(key);
    });

    calculator.addEventListener('click', (event) => {

        const isButton = event.target.nodeName === 'BUTTON';

        if (isButton) {
            let input = (event.target.innerHTML);
            if (!isNaN(input)) {
                value += input;
                display.value += (event.target.innerHTML);
            } else { //Enter if input isn't a number

                //if clear button is pressed
                if (event.target.innerHTML === 'CLEAR') {
                    operand1 = '';
                    operand2 = '';
                    operator = '';
                    value = '';
                    result = 0;
                    decimal.disabled = false;
                    display.value = '';
                }

                //if delete button is pressed
                else if (event.target.innerHTML === 'DELETE') {
                    if (display.value !== '') {
                        str = display.value;
                        display.value = str.slice(0, -1);
                        value = value.slice(0, -1);
                        if( display.value === ''){
                            document.querySelector('#clearBtn').click();
                        }
                    }
                }

                //evulate the result
                else if (event.target.innerHTML === '=') {
                    if (operand2 === '') {
                        operand2 = value;
                        value = '';
                    }
                    result = operate(operator, operand1, operand2);
                    if (typeof (result) === 'undefined') {
                        result = 0;
                    } else if (isNaN(result)) {
                        result = 0;
                    }
                    operand1 = result;
                    operand2 = '';
                    operator = '';
                    display.value = operand1;
                }

                //for any other operations
                else {

                    //for decimal value
                    if (input === '.') {
                            value += '.';
                            decimal.disabled = true;
                    }

                    //store first operand if empty 
                    else if (operand1 === '') {
                        operand1 = value;
                        value = '';
                        operator = input;
                        decimal.disabled = false;
                    }

                    //store operator value if empty
                    else if (operator === '') {
                        operator = input;
                        decimal.disabled = false;
                    }

                    //store second operand if empty and operator isn't empty
                    else if (operand2 === '' && operator !== '') {
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
    let addRes = num1+num2;
    addRes = Math.round(addRes*1000)/1000;
    return addRes;
}

function subtract(num1, num2) {
    let subtractRes = num1-num2;
    subtractRes = Math.round(subtractRes*1000)/1000;
    return subtractRes;
}

function multiply(num1, num2) {
    let multiplyRes = num1*num2;
    multiplyRes = Math.round(multiplyRes*1000)/1000;
    return multiplyRes;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 0;
    }
    let divideRes = num1/num2;
    divideRes = Math.round(divideRes*1000)/1000;
    return divideRes;
}


function operate(op, num1, num2) {
    if (op == '' | num2 == '') {
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

function triggerKey(key){
    if (!isNaN(key)) {
        document.querySelector(`#num${key}`).click();
    } else {
        switch (key) {
            case '+':
                document.querySelector('#add').click();
                break;
            case '-':
                document.querySelector('#subtract').click();
                break;
            case '*':
                document.querySelector('#multiply').click();
                break;
            case '/':
                key.preventDefault();
                document.querySelector('#divide').click();
                break;
            case '=':
                document.querySelector('#equals').click();
                break;
            case '.':
                document.querySelector('#decimal').click();
                break;
            case 'Enter':
                document.querySelector('#equals').click();
                break;
            case 'Delete':
                document.querySelector('#deleteBtn').click();
                break;
            case 'Backspace':
                document.querySelector('#deleteBtn').click();
                break;
            case 'Escape':
                document.querySelector('#clearBtn').click();
                break;
            case 'c':
                document.querySelector('#clearBtn').click();
                break;
        }
    }
}