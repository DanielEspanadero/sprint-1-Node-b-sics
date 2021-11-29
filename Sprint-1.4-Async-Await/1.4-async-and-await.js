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

// N1 E2 Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.
    
// TODO Crear una funció asincrona que rebri un id d'empleat
// TODO Imprimir per pantalla el nom de l'empleat i el seu salari
// TODO Fer servis les funcions de l'exercici anterior
// ! Correcció: He adaptat l'exercici a les correccións de l'exercici anterior.

async function asinRes(id) {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);
        return console.log(`employee: ${employee}, Salary: ${salary}`);
    } catch (errorMessage) {
        console.log('Error, no data')
    }
}
asinRes(1);

// N2 E1: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

// TODO Crear una nova funció asíncrona que cridi a una altra
// TODO Fer que retorni una promise que efectuï la funció resolve als 2 segons


var age = 18;

const greet = (age) => {
    return new Promise((resolve, reject) => {
        if (typeof age === 'number') {
            setTimeout(() => {
                resolve(`I'm ${age} years old`);
            }, 2000);
        } else {
            reject('You need to put your age!')

        }

    });
}

async function funAsinc() {
    try {
        const presentation = await greet(age);
    } catch {
        const err = await greet.reject()
    }
}

funAsinc();

// N3 E1 Captura tots els errors possibles dels nivells 1 i 2.

// * 📌 Els errors ja estan capturats als respectius exercicis 


// Exportació pel exercici de test

module.exports = {
    getEmployee
}