//NIVELL 1

// Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

let arrowFunc = ((num1, num2)=>{
    return num1 + num2
})(2, 3)

console.log(arrowFunc)


// NIVELL 2

//Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

let animal = (valor) =>{
    let algo = {
    propiedad: valor,
    }
    return algo;
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

let Animal = function() {
    if (this.constructor === Animal) {
      throw new Error("!No se puede crear una instancia de la clase abstracta!");
    }
};

Animal.prototype.say = function() {
    throw new Error("¡Método abstracto!");
}

let Gato = function() {
    Animal.apply(this, arguments);
};
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.say = function() {
    console.log('!Miaaaauuuu!');
}

let Perro = function() {
    Animal.apply(this, arguments);
};
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.say = function() {
    console.log('!Guaaaau!');
}

var gato = new Gato();
var perro = new Perro();

gato.say();
perro.say();