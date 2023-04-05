export const stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10){
        return string.length;
    }else {
        return 'Incorrect string length';
    }
};

export const reverseString = (string) => {
    return string.split('').reverse().join('');
};

export class Calculator {
    add = (a, b) => {
        return a + b;
    }
    subtract = (a, b) => {
        return a - b;
    }
    multiply = (a, b) => {
        return a * b;
    }
    divide = (a, b) => {
        return a / b;
    }
};

export const capitalize = (string) => {
    let firstLetter = string.split('');
    firstLetter[0] = firstLetter[0].toUpperCase();

    return firstLetter.join('');
};
