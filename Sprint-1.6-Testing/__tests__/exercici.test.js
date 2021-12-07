const { addition,
    substraction,
    multiplication,
    division
} = require('../app/calc');

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

// describe('Confirm that the function that returns a promise works.', () => {
//     test('years is 6', async () => {
//         const response = await greet(6)
//         expect(response).toBe("I'm 6 years old")
//         const response2 = await funAsinc()
//     expect(response2).toBe("I'm 6 years old")
// })
// })

// describe('Confirm an asynchronous function that calls another', () => {
//     test('Test for add Promise', async () => {
//         const response2 = await funAsinc()
//         expect(response2).toBe("I'm 6 years old")
//     })
// })


//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

test('Should return 4000',async () => {
    const employee = await getEmployee2(1)
    const response = await getSalary2(employee[id])
    expect(response.salary).toBe(4000)
})

// let id = 1
// getEmployee2(id).then(name => {
//     console.log(name)
//     return getSalary2(id)
// }).then(salary => {
//     console.log(salary)
// })

//TODO Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

// test('Fake Timers', () => {
//     const callback = jest.fn()

//     sums(callback)

//     expect(callback).toHaveBeenCalled()

//     const cb = () => {
//         jest.runAllTimers()
//     }

//     jest.useFakeTimers()

//     return add(1, 2, cb).then(data => {
//         expect(data).toBe(3)
//     })
// })