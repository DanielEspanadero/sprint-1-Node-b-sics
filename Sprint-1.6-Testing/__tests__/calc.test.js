const { addition, substraction, multiplication, division } = require('../app/calc');

describe('test for addition', () => {
    test('1 + 2 is 3', () => {
        expect(addition(1, 2)).toBe(3)
    });
    test('3 + 5 is 8', () => {
        expect(addition(3, 5)).toBe(8)
    });
});

describe('test for substraction', () => {
    test('6 - 3 is 3', () => {
        expect(substraction(6, 3)).toBe(3)
    });
    test('4 - 3 is 1', () => {
        expect(substraction(4, 3)).toBe(1)
    });
});

describe('test for multiplication', () => {
    test('5 * 3 is 15', () => {
        expect(multiplication(5, 3)).toBe(15)
    });
    test('7 * 2 is 14', () => {
        expect(multiplication(8, 2)).toBe(16)
    });
});

describe('test for division', () => {
    test('8 / 2 is 4', () => {
        expect(division(8, 2)).toBe(4)
    });
    test('10 / 5 is 2', () => {
        expect(division(10,5)).toBe(2)
    });
});
