// N1 E1: Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

// ! Correccions: He corregit els mateixos errors que tenia al 1.3.

let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find(employee => employee.id === id)
        if (findEmployee) {
            resolve(findEmployee.name);
        } else {
            reject(`The ID ${id} doesn't value, you need put a numbrer from 1 to 3`);
        }
    })
}

getEmployee(2)
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))

let getSalary = (id) => {
    return new Promise((resolve, reject) => {
        let findSalary = salaries.find(salario => salario.id === id);
        if (findSalary) {
            resolve(findSalary.salary);
        } else {
            reject('The ID doesn`t exit!');
        }
    });
};

getSalary(2)
    .then(good => console.log(good))
    .catch(err => console.log(err));


module.exports = {
    getEmployee,
    getSalary
};