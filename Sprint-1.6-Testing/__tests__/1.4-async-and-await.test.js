const { getEmployee } = require('../../Sprint-1.4-Async-Await/1.4-async-and-await')

describe('test for 1.4 N1 E1', () => {
    test('call name with id 2', () => {
        expect(getEmployee(2)
            .then(resolve => console.log(resolve))
            .catch(err => console.log(err))
            ).toBe('Bill Gates')
    })
})