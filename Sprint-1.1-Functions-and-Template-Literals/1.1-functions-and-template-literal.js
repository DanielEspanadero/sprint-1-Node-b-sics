//NIVELL 1

// Exercici 1: Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.

function nomUsuari (nom){
    console.log(nom);
};

nomUsuari("Daniel")


// NIVELL 2

// Exercici 1: Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let nom = "Daniel";
let cognom = "Españadero";

console.log(`
    Nom: ${nom}
    Cognom: ${cognom}
    `);


// Execici 2: Invoca una funció que retorni un valor des de dins d'una template literal.

function numero (valor){
    return `El valor és ${valor} i és dins d'un template literal`;
}

console.log(numero(3));


// NIVELL 3

// Exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

var array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

for(i of array){
    array.forEach(function(){
        console.log(i+=1);
    })
}


// Execici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.

let nomUsuari = (function(nom){
    console.log(nom);
})("Pedro");