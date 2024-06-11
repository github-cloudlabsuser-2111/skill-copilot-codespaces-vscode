function calculator(num1, num2, operation) {
    switch(operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}

console.log(calculator(5, 3, 'add'));      // Outputs: 8
console.log(calculator(5, 3, 'subtract')); // Outputs: 2
console.log(calculator(5, 3, 'multiply')); // Outputs: 15
console.log(calculator(5, 3, 'divide'));   // Outputs: 1.6666666666666667

const calculator = require('./calculator');

describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator(5, 3, 'add')).toBe(8);
    });

    test('subtracts two numbers', () => {
        expect(calculator(5, 3, 'subtract')).toBe(2);
    });

    test('multiplies two numbers', () => {
        expect(calculator(5, 3, 'multiply')).toBe(15);
    });

    test('divides two numbers', () => {
        expect(calculator(5, 3, 'divide')).toBeCloseTo(1.67, 2);
    });

    test('handles invalid operations', () => {
        expect(calculator(5, 3, 'invalid')).toBe('Invalid operation');
    });
});
