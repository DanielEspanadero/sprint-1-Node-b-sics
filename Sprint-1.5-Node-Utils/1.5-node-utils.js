// N1 E1 Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

let recursiva = () => {
    let i = 0
    setInterval(()=>{
      console.log(`Este es el mensaje número ${i++}`);
      },1000)
  }

recursiva()

// N1 E2 Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const base = 5;
let salida = '';
const nomArxiu = `Tabla.${base}.txt`

let escribirFichero = () => {
  for (let i = 1; i <= 10; i++) {
    salida += (`${base} x ${i} = ${base * i}\n`);
  };

  fs.writeFile(nomArxiu, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla-${base} creada`);
  });


};

escribirFichero()


// N1 E3 Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile(nomArxiu, 'utf8', function (err, data) {
  console.log(data);
});


// N2 E1 Crea una funció que comprimeixi el fitxer del nivell 1.
