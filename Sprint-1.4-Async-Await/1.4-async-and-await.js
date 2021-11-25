// N1 E1: Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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



let getEmployee = id => {
    return new Promise((resolve, reject) => {
        if (id > 3 || id <= 0) {
            reject(console.log(`El ID ${id} no es valido, tiene que ser entre 1 y 3`))

        } else {
            resolve(employees[id - 1]);
        }
    })
}

let id = 1
let idEmpleado = id
let employee = employees.find(employees => employees.id === idEmpleado);


let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        if (id > 3 || id <= 0) {
            reject(`El ID ${id} no es valido, tiene que ser entre 1 y 3`)

        } else {
            resolve(salaries[id - 1].salary);
        }
    })
}

// N1 E2: Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.

