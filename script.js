
//perform check for num1 and num2 before passing 

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(op, num1, num2){
    switch(op){
        case '+': add(num1, num2);
                  break;
        case '-': subtract(num1, num2);
                  break;
        case '*': multiply(num1, num2);
                  break;
        case '/': divide(num1, numm2);
                  break;
        default: console.log('Oops, something went wrong');
    }
}