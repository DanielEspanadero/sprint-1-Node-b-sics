const { addition,
    substraction,
    multiplication,
    division
} = require('../app/1.6-testing');

const { getEmployee,
    funAsinc,
    greet
} = require('../../Sprint-1.4-Async-Await/1.4-async-and-await')

const { getEmployee2,
    getSalary2
} = require('../../Sprint-1.3-Promises-and-Callbacks/1.3-promises-and-callbacks')



//TODO Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands.Testeja la correcta execució d'aquestes funcions. [x]

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
        expect(division(10, 5)).toBe(2)
    });
});


//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1 [x]

describe('test for search employee name with the ID', () => {
    test('Should return Linux Torvalds', async () => {
        const employee = await getEmployee(1)
        expect(employee).toBe('Linux Torvalds')
    })
})

//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1




//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3




//TODO Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.
