//N1 E1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function devolucionPromesa(){
    return new Promise ((resolve, reject)=>{
        let correcto = true;
        if (correcto){
            resolve(console.log("Everything went well"));
        }else{
            reject(console.log("Something has not gone well"));
        }
    });
};

devolucionPromesa()

// N1 E2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

let arrowNumber = (number, callback)=>{
    if(number >= 30){
        callback({
            error:true,
            message:"The number is greater than or equal to 30",
        })
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



let getEmployee = id => {
    return new Promise((resolve, reject) => {
        if (id > 3 || id <= 0) {
            reject(console.log(`El ID ${id} no es valido, tiene que ser entre 1 y 3`))

        } else {
            resolve(employees[id - 1]);
        }
    })
}

getEmployee(9)
    .then(resolve => console.log(resolve))
    .catch(err => err)


//N2 E2: Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

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

getSalary(employee)
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))


// N2 E3: Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

id = 1

getEmployee(id)
    .then(resolve => console.log(resolve))
    .then(salary => {
        getSalary(getEmployee(id))
            .then(resolve => console.log(resolve))
    })


//N3 E1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

getEmployee(id)
    .then(resolve => console.log(resolve))
    .then(salary => {
        getSalary(getEmployee(id))
            .then(resolve => console.log(resolve))
    })
    .catch(err => err)