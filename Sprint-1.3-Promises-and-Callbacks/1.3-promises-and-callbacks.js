//NIVELL 1

// Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
// Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function devolucionPromesa(){
    return new Promise ((resolve, reject)=>{
        let correcto = true;
        if (correcto){
            resolve(console.log("Todo ha ido bien"));
        }else{
            reject(console.log("algo no ha ido bien"));
        }
    });
};

devolucionPromesa()

// Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre 
// (que s'imprimirà per consola) en funció del paràmetre rebut.

