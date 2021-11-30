//N1 E1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

// TODO Crear una funció que retorni una Promise. [x]
// TODO Invocar la funció resolve() o reject() que rep. [x]
// TODO Pasar les dues funcions de manera que imprimeixin un misatge diferent depenent de si la promise es resol o no. [x]
// ! Correcció: Al resolve() i al reject() tinc la mania de posarli un console.log() quan el que s'ha de fer es pasarli el missatge i desprès si he de fer un console.log(), fer-ho en un .then o al cas del reject en un .catch().

function devolucionPromesa() {
    return new Promise((resolve, reject) => {
        let correcto = true;
        if (correcto) {
            resolve('Everything went well');
        } else {
            reject('Something has not gone well');
        }
    });
};

devolucionPromesa()
    .then(good => console.log(good))
    .catch(err => console.log(err))

// N1 E2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

// * Correcte

let arrowNumber = (number, callback)=>{
    if(number >= 30){
        callback({
            error:true,
            message:"The number is greater than or equal to 30",
        }, null)
        return
    }else{
        callback(null, {
            error:false,
            value:"The number is less than 30",
        })
        return
    }
}

arrowNumber(302,(err, result)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(result.value);
    }
})
  

//N2 E1: Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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

// TODO Crear una arrow function getEmployee [x]
// TODO Fer que la funció retorni una promesa [x]
// TODO Que donant-li un ID, retorni el nom de l'empleat [x]
// ! Correcció: Habia posat el console.log() dins del resolve en comptes de fer-ho al .then, tambè he millorat la recerca afegint un .find().

let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find(employee => employee.id === id)
        if (findEmployee) {
            resolve(findEmployee.name);
        } else {
            reject(`El ID ${id} no es valido, tiene que ser entre 1 y 3`);
        }
    })
}

getEmployee(2)
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))


//N2 E2: Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

// TODO Crear una arrow function getSalari [x]
// TODO Fer que retorni el salari pel seu id [x]
// ! Correcció: He tret el console.log dels parametres resolve i reject i he fet que retorni el salari quan el donem l'id concret.

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


// N2 E3: Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

// TODO Invocar la funció getEmployee i després getSalari [x]
// TODO Niar les dues promeses [x]
// ! Correcció: He cambiat les dues promeses per separat i he ficat tot dins d'un promise all, així quan s'executa la primera, si aquesta es correcta, despres s'executara la segona.
//! Correcció 2: Habia ficat tot dins d'un promise.all, finalment he niat les dues promeses tal i com diu l'exercici. 

let id = 1
getEmployee(id).then(name => {
    console.log(name)
    return getSalary(id)
}).then(salary => {
    console.log(salary)
})


//N3 E1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

// TODO Fixar l'element catch a la invocació del nivell anterior [x]
// TODO Fer que capturi qualsevol error i el mostri per consola [x]
// ! Correcció: Com l'exercici anterior el tenia malament, l'he adaptat al corregit i he afegit la captura del error

let id = 1
getEmployee(id).then(name => {
    console.log(name)
    return getSalary(id)
}).then(salary => {
    console.log(salary)
}).catch((e) => {
    console.log(e)
})