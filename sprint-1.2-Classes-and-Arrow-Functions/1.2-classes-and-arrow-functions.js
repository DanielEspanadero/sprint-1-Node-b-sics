//NIVELL 1

// Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

((num1, num2)=>{
    console.log(num1 + num2)
})(3, 2);


// NIVELL 2

//Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

let animal = (valor) =>{
    let algo = {
    propiedad: valor,
    }
    return algo.propiedad;
}
console.log(animal("perro"));

//Exercici 2: Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
    constructor(nom){
        this.nom = nom;
    }
    dirNom(){
        console.log(this.nom);
    }
}

let jose = new Persona("Jose")
jose.dirNom()


// NIVELL 3

//Exercici 1: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

function Animal(especie, raza, edad) {
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
}
Animal.prototype.ladrar = ()=>{
    console.log("GUAUUU!!!!");
}
Animal.prototype.maullar = ()=>{
    console.log("MIIAAAUU!!!!");
}

let perro = new Animal("perro", "labrador", 12);
let gato = new Animal("gato", "persa", 5);

console.log(perro.especie);
perro.ladrar();

console.log(gato.raza);
gato.maullar();