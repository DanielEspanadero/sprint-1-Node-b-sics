//NIVELL 1

// Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

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

// Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre 
// (que s'imprimirà per consola) en funció del paràmetre rebut.

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
  

//NIVELL 2

//Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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
    Promise.resolve(console.log(Object.values(employees[id - 1])));
}

getEmployee(1)


//Exercici 2: Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

