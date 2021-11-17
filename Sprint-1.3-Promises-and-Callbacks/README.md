# 💻Sprint 1. Node bàsics💻
## Entrega 1.3: Promises & Callbacks
</br>

## Nivell 1 ⭐
- Exercici 1:
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

- Exercici 2:
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

## Nivell 2 ⭐⭐
- Exercici 1:
Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

```
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
```

- Exercici 2:
Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

- Exercici 3:
Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

## Nivell 3 ⭐⭐⭐
- Exercici 1:
Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.