import {stringLength, reverseString, Calculator, capitalize} from './string';

it('check for string length', () => {
    const length = 'lawr';
    expect(stringLength(length)).toBe(4);
});

describe('should return an error', () => {
    it('check for string more than 10', () => {
        const length = 'lawrence is blessed';
        expect(stringLength(length)).toBe('Incorrect string length')
    })

    it('check for string less than 1', () => {
        const length = '';
        expect(stringLength(length)).toBe('Incorrect string length')
    })
})

it('check for reverse string', () => {
    const reverse = reverseString('lawrence');
    expect(reverse).toBe('ecnerwal')
});

describe.each([
    [5, 5, 10],
])('should return the correct sum', (a, b, expected) => {
    const calculate = new Calculator();
    it(`should be the expected sum ${expected}`, () => {
        const sum = calculate.add(a, b);
        expect(sum).toBe(expected);
    });

    it(`should not be greater than ${expected}`, () => {
        const sum = calculate.add(a, b);
        expect(sum).not.toBeGreaterThan(expected)
    })

    it(`should not be less than ${expected}`, () => {
        const sum = calculate.add(a, b);
        expect(sum).not.toBeLessThan(expected)
    })
});

describe.each([
    [5, 3, 2],
])('should return the correct difference', (a, b, expected) => {
    const calculate = new Calculator();
    it(`should be the expected difference ${expected}`, () => {
        const sum = calculate.subtract(a, b);
        expect(sum).toBe(expected);
    });

    it(`should not be greater than ${expected}`, () => {
        const sum = calculate.subtract(a, b);
        expect(sum).not.toBeGreaterThan(expected)
    })

    it(`should not be less than ${expected}`, () => {
        const sum = calculate.subtract(a, b);
        expect(sum).not.toBeLessThan(expected)
    })
});

describe.each([
    [2, 10, 20],
])('should return the correct multiple', (a, b, expected) => {
    const calculate = new Calculator();
    it(`should be the expected number ${expected}`, () => {
        const sum = calculate.multiply(a, b);
        expect(sum).toBe(expected);
    });

    it(`should not be greater than ${expected}`, () => {
        const sum = calculate.multiply(a, b);
        expect(sum).not.toBeGreaterThan(expected)
    })

    it(`should not be less than ${expected}`, () => {
        const sum = calculate.multiply(a, b);
        expect(sum).not.toBeLessThan(expected)
    })
});

describe.each([
    [30, 5, 6],
])('should return the correct quotient', (a, b, expected) => {
    const calculate = new Calculator();
    it(`should be the expected number ${expected}`, () => {
        const sum = calculate.divide(a, b);
        expect(sum).toBe(expected);
    });

    it(`should not be greater than ${expected}`, () => {
        const sum = calculate.divide(a, b);
        expect(sum).not.toBeGreaterThan(expected)
    })

    it(`should not be less than ${expected}`, () => {
        const sum = calculate.divide(a, b);
        expect(sum).not.toBeLessThan(expected)
    })
})

it('should return first letter capitalized', () => {
    const capital = 'lawrence';
    expect(capitalize(capital)).toBe('Lawrence')
})